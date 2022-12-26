"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("react-native");
const styles = react_native_1.StyleSheet.create({
    wrapper: {
        flex: 1,
        justifyContent: "flex-end",
    },
    background: {
        flex: 1,
        backgroundColor: "transparent",
    },
    container: {
        width: "100%",
        height: 0,
        overflow: "hidden",
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
    },
    draggableContainer: {
        width: "100%",
        alignItems: "center",
        backgroundColor: "transparent",
    },
    draggableIcon: {
        width: 40,
        height: 6,
        borderRadius: 3,
        margin: 10,
        marginBottom: 0,
    },
});
exports.default = styles;
//# sourceMappingURL=styles.js.map