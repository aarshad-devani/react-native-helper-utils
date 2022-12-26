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
exports.PhoneInput = exports.GetFormattedNumber = exports.GetRawNumber = exports.isValidNumber = void 0;
const react_1 = __importStar(require("react"));
const react_native_1 = require("react-native");
const google_libphonenumber_1 = require("google-libphonenumber");
const styles_1 = require("./styles");
const CountryCodeEmoji_1 = require("./CountryCodeEmoji");
const CountryModal_1 = require("./CountryModal");
const phoneNumberUtil = google_libphonenumber_1.PhoneNumberUtil.getInstance();
const isValidNumber = (phoneString, countryCode = "IN") => {
    try {
        const number1 = phoneNumberUtil.parseAndKeepRawInput(phoneString, countryCode);
        return phoneNumberUtil.isValidNumber(number1);
    }
    catch (err) {
        return false;
    }
};
exports.isValidNumber = isValidNumber;
const GetRawNumber = (phoneString, countryCode = "IN") => {
    // if(phoneString === "") return ""
    // console.log("Params", phoneString, countryCode);
    if (phoneString.length < 12)
        return phoneString;
    try {
        const mainNumber = phoneNumberUtil.parseAndKeepRawInput(phoneString, countryCode);
        const rawNumber = phoneNumberUtil.isValidNumber(mainNumber) && mainNumber.getNationalNumber()
            ? mainNumber.getNationalNumber()?.toString()
            : phoneString;
        return rawNumber && Boolean(rawNumber) ? rawNumber : phoneString;
    }
    catch (err) {
        console.warn("Error Returning", err);
        return phoneString;
    }
};
exports.GetRawNumber = GetRawNumber;
const GetFormattedNumber = (phoneString, countryCode = "IN") => {
    const mainNumber = phoneNumberUtil.parseAndKeepRawInput(phoneString, countryCode);
    return phoneNumberUtil.format(mainNumber, google_libphonenumber_1.PhoneNumberFormat.E164);
};
exports.GetFormattedNumber = GetFormattedNumber;
const PhoneInput = (props) => {
    const initialCountryCode = props.initialCountryCode ?? "in";
    const [selectedCountry, setSelectedCountry] = (0, react_1.useState)(CountryModal_1.CountryList.find((x) => x.iso2.toLowerCase() === initialCountryCode.toLowerCase()));
    const [modalOpen, setModalOpen] = (0, react_1.useState)(false);
    const [phoneNumberInputData, setPhoneNumberInputData] = (0, react_1.useState)((0, exports.GetRawNumber)(props.value ?? "", selectedCountry?.iso2));
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
            !props.disableModal && setModalOpen(!modalOpen);
        }}>
          <react_native_1.View style={[styles_1.styles.container, styles_1.styles.flagButton, props.countryFlagButtonStyle]}>
            <react_native_1.Text>{(0, CountryCodeEmoji_1.countryCodeEmoji)(selectedCountry?.iso2)}</react_native_1.Text>
            <react_native_1.Text style={[props.countryFlagTextStyle]}>{`+${selectedCountry?.dialCode}`}</react_native_1.Text>
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