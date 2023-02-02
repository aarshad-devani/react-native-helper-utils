"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const styles_1 = __importDefault(require("./styles"));
const Row = (props) => {
    const gridStyles = (0, styles_1.default)();
    return <react_native_1.View style={[gridStyles.row, react_native_1.StyleSheet.compose({}, props.rowStyles)]}>{props.children}</react_native_1.View>;
};
exports.default = Row;
//# sourceMappingURL=Row.js.map