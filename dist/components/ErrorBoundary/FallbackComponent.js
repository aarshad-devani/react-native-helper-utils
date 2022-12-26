"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const styles_1 = require("../../styles");
const styles = react_native_1.StyleSheet.create({
    centerAlignText: { textAlign: "center" },
});
const FallbackComponent = (_props) => {
    return (<react_native_1.View style={styles_1.CommonStyles.flex}>
      <react_native_1.View style={[styles_1.CommonStyles.flex, styles_1.CommonStyles.centeredContent]}>
        <react_native_1.Text style={[styles.centerAlignText]}>There was an Unhandled Issue and it needs to be reported!</react_native_1.Text>
        <react_native_1.Text>{JSON.stringify(_props.error)}</react_native_1.Text>
        <react_native_1.Pressable onPress={_props.resetError}>
          <react_native_1.Text>Report</react_native_1.Text>
        </react_native_1.Pressable>
      </react_native_1.View>
    </react_native_1.View>);
};
exports.default = FallbackComponent;
//# sourceMappingURL=FallbackComponent.js.map