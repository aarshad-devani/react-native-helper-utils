"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageWithBlur = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const styles_1 = require("../styles");
const styles = react_native_1.StyleSheet.create({
    dullColor: { backgroundColor: "#0007" },
});
const ImageWithBlur = (props) => {
    return (<react_native_1.View style={[styles_1.CommonStyles.centeredContent, styles_1.CommonStyles.overflowHidden]}>
      <react_native_1.Image source={props.source} defaultSource={props.defaultSource} style={react_native_1.StyleSheet.compose({ opacity: 0.5 }, props.style)} blurRadius={props.backgroundBlur ?? 5} resizeMode="cover"/>
      <react_native_1.View style={[react_native_1.StyleSheet.absoluteFill, styles_1.CommonStyles.centeredContent]}>
        <react_native_1.Image resizeMode="contain" defaultSource={props.defaultSource} source={props.source} style={[react_native_1.StyleSheet.compose({ transform: [{ scale: props.centerImageScale ?? 0.9 }] }, props.style)]}/>
      </react_native_1.View>
      {props.showLoader && (<react_native_1.View style={[
                react_native_1.StyleSheet.absoluteFill,
                styles_1.CommonStyles.centeredContent,
                styles.dullColor,
                react_native_1.StyleSheet.compose({}, props.style),
            ]}>
          <react_native_1.ActivityIndicator color="white"/>
        </react_native_1.View>)}
    </react_native_1.View>);
};
exports.ImageWithBlur = ImageWithBlur;
//# sourceMappingURL=ImageWithBlur.js.map