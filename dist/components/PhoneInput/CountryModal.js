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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountryModal = exports.CountryList = void 0;
const react_1 = __importStar(require("react"));
const react_native_1 = require("react-native");
const CountryCodeEmoji_1 = require("./CountryCodeEmoji");
const countries_json_1 = __importDefault(require("./countries.json"));
const styles_1 = require("./styles");
exports.CountryList = countries_json_1.default;
const CountryModalItem = (props) => {
    return (<react_native_1.Pressable onPress={() => {
            props.onItemPress(props.countryItem);
        }}>
      <react_native_1.View style={[styles_1.modalStyles.listItem, react_native_1.StyleSheet.compose({}, props.itemContainerStyle)]}>
        <react_native_1.Text>{(0, CountryCodeEmoji_1.countryCodeEmoji)(props.countryItem.iso2)}</react_native_1.Text>
        <react_native_1.Text style={react_native_1.StyleSheet.compose({}, props.listItemTextStyle)}>{`+${props.countryItem.dialCode}  ${props.countryItem.name}`}</react_native_1.Text>
      </react_native_1.View>
    </react_native_1.Pressable>);
};
const CountryModal = (props) => {
    const flatListRef = (0, react_1.useRef)();
    const { width, height } = (0, react_native_1.useWindowDimensions)();
    (0, react_1.useEffect)(() => {
        if (props.selectedCountryItem) {
            flatListRef.current?.scrollToItem({
                item: props.selectedCountryItem,
                animated: true,
                viewPosition: 1,
            });
        }
    }, [props.selectedCountryItem]);
    return (<react_native_1.Modal visible={props.modalVisible} transparent supportedOrientations={["landscape", "portrait"]} onRequestClose={props.onDismiss} animationType="slide">
      <react_native_1.FlatList ref={() => flatListRef} style={[
            styles_1.modalStyles.flastListStyle,
            { width: width * (width > height ? 0.5 : 0.8) }, // if portrait then we will occupy 80% of screen and if landscape then we use 50% of screen
        ]} data={props.countryList ?? exports.CountryList} keyExtractor={(item) => item.iso2} renderItem={({ item, index }) => (<CountryModalItem key={index} onItemPress={props.onCountrySelected} countryItem={item} itemContainerStyle={props.itemContainerStyle} listItemTextStyle={props.listItemTextStyle}/>)}/>
    </react_native_1.Modal>);
};
exports.CountryModal = CountryModal;
//# sourceMappingURL=CountryModal.js.map