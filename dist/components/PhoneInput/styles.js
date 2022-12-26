"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.modalStyles = exports.styles = void 0;
const react_native_1 = require("react-native");
exports.styles = react_native_1.StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    flagButton: {
        padding: 3,
        alignItems: "stretch",
        justifyContent: "center",
    },
});
exports.modalStyles = react_native_1.StyleSheet.create({
    listItem: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#ccc8",
    },
    flastListStyle: {
        margin: 10,
        alignSelf: "center",
        backgroundColor: "#FFFFFF99",
    },
});
//# sourceMappingURL=styles.js.map