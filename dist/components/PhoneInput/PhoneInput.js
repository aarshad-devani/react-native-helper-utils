"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhoneInput = void 0;
const react_1 = __importStar(require("react"));
const react_native_1 = require("react-native");
const styles_1 = require("./styles");
const CountryCodeEmoji_1 = require("./CountryCodeEmoji");
const CountryModal_1 = require("./CountryModal");
const phoneUtils_1 = require("./phoneUtils");
const PhoneInput = (props, forwardedRef) => {
    const initialCountryCode = props.initialCountryCode ?? "in";
    const [selectedCountry, setSelectedCountry] = (0, react_1.useState)(CountryModal_1.CountryList.find((x) => x.iso2.toLowerCase() === (initialCountryCode ?? "in").toLowerCase()));
    const [modalOpen, setModalOpen] = (0, react_1.useState)(false);
    const [phoneNumberInputData, setPhoneNumberInputData] = (0, react_1.useState)((0, phoneUtils_1.GetRawNumber)(props.value ?? "", selectedCountry.iso2));
    (0, react_1.useImperativeHandle)(forwardedRef, () => ({
        getCountry: () => selectedCountry,
        getRawNumber: () => phoneNumberInputData,
        getFullNumber: () => "+" + selectedCountry.dialCode + phoneNumberInputData,
    }));
    (0, react_1.useEffect)(() => {
        props.onCountryUpdate && props.onCountryUpdate(selectedCountry);
    }, [selectedCountry]);
    (0, react_1.useEffect)(() => {
        // if (phoneNumberInputData.length > 10) {
        //   const formattedNumber = GetFormattedNumber(
        //     "+" + selectedCountry?.dialCode ?? "91" + phoneNumberInputData,
        //     selectedCountry?.iso2.toUpperCase(),
        //   );
        //   console.log("FormattedNumber", formattedNumber);
        //   props.onPhoneNumberUpdate(formattedNumber, phoneNumberInputData);
        // }
        props.onPhoneNumberUpdate(phoneNumberInputData, "+" + (selectedCountry?.dialCode ?? "91") + phoneNumberInputData, (selectedCountry?.iso2 ?? "IN").toUpperCase());
    }, [phoneNumberInputData, selectedCountry]);
    return (<>
      <react_native_1.View style={[styles_1.styles.container, { width: "100%" }, props.outerContainerStyle]}>
        <react_native_1.Pressable onPress={() => {
            props.onFlagButtonPress && props.onFlagButtonPress();
            !props.disableModal && setModalOpen((curr) => !curr);
        }}>
          <react_native_1.View style={[styles_1.styles.container, styles_1.styles.flagButton, react_native_1.StyleSheet.compose({}, props.countryFlagButtonStyle)]}>
            <react_native_1.Text>{(0, CountryCodeEmoji_1.countryCodeEmoji)(selectedCountry?.iso2)}</react_native_1.Text>
            <react_native_1.Text style={react_native_1.StyleSheet.compose({}, props.countryFlagTextStyle)}>{`+${selectedCountry?.dialCode}`}</react_native_1.Text>
          </react_native_1.View>
        </react_native_1.Pressable>
        <react_native_1.View style={{ alignSelf: "stretch", width: "80%" }}>
          <react_native_1.TextInput {...props.textInputProps} style={{ flex: 1 }} placeholder="Phone Number" value={phoneNumberInputData} returnKeyType="done" onChangeText={(newValue) => setPhoneNumberInputData(newValue)}/>
        </react_native_1.View>
      </react_native_1.View>
      <CountryModal_1.CountryModal countryList={props.countryList} modalVisible={modalOpen} onDismiss={() => setModalOpen(false)} selectedCountryItem={selectedCountry} onCountrySelected={(selectedCountry) => {
            setSelectedCountry(selectedCountry);
            setModalOpen(false);
        }}/>
    </>);
};
exports.PhoneInput = PhoneInput;
//# sourceMappingURL=PhoneInput.js.map