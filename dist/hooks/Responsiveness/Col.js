"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const styles_1 = __importDefault(require("./styles"));
const Col = (props) => {
    const { xs, sm, md, lg, style, children } = props;
    const columns_xs = "col_" + xs;
    const columns_sm = "col_sm_" + (sm || xs);
    const columns_md = "col_md_" + (md || sm || xs);
    const columns_lg = "col_lg_" + (lg || md || sm || xs);
    const gridStyles = (0, styles_1.default)();
    return (<react_native_1.View style={[
            gridStyles[columns_xs],
            gridStyles[columns_sm],
            gridStyles[columns_md],
            gridStyles[columns_lg],
            react_native_1.StyleSheet.compose({}, style),
        ]}>
      {children}
    </react_native_1.View>);
};
exports.default = Col;
//# sourceMappingURL=Col.js.map