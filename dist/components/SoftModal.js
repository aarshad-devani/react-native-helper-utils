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
exports.SoftModal = void 0;
const react_1 = __importStar(require("react"));
const react_native_1 = require("react-native");
const SoftModal = (props) => {
    const animationRef = (0, react_1.useRef)(new react_native_1.Animated.Value(0)).current;
    const { height, width } = (0, react_native_1.useWindowDimensions)();
    (0, react_1.useEffect)(() => {
        react_native_1.Animated.spring(animationRef, { toValue: props.visible ? 1 : 0, useNativeDriver: false, friction: 10 }).start();
    }, [props.visible]);
    return (<react_native_1.Animated.View style={[
            react_native_1.StyleSheet.absoluteFillObject,
            {
                height,
                width,
                transform: [
                    {
                        translateY: animationRef.interpolate({ inputRange: [0, 1], outputRange: [height, 0] }),
                    },
                ],
            },
        ]}>
      <react_native_1.Pressable style={{ flex: 1 }} onPress={props.onRequestClose}>
        <react_native_1.View style={{ flex: 1 }}>{props.children}</react_native_1.View>
      </react_native_1.Pressable>
    </react_native_1.Animated.View>);
};
exports.SoftModal = SoftModal;
//# sourceMappingURL=SoftModal.js.map