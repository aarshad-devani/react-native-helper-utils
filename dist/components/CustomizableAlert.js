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
exports.AlertCustomizationProvider = exports.ShowLoader = exports.ShowMessage = void 0;
const react_1 = __importStar(require("react"));
const react_native_1 = require("react-native");
class AlertManager {
    showMessageFn = () => { };
    showLoaderFn = () => { };
    register = (showMessage, showLoader) => {
        this.showMessageFn = showMessage;
        this.showLoaderFn = showLoader;
    };
    showLoader = (status) => this.showLoaderFn(status);
    showMessage = (messageConfig) => this.showMessageFn(messageConfig);
}
const localAlertManager = new AlertManager();
const ShowMessage = (messageConfig) => localAlertManager.showMessage(messageConfig);
exports.ShowMessage = ShowMessage;
const ShowLoader = (status) => localAlertManager.showLoader(status);
exports.ShowLoader = ShowLoader;
const AlertCustomizationProvider = (props) => {
    const { height, width } = (0, react_native_1.useWindowDimensions)();
    const MessageComponent = props.messageComponent;
    const animationRef = (0, react_1.useRef)(new react_native_1.Animated.Value(0)).current;
    const [showLoader, setShowLoader] = (0, react_1.useState)(false);
    const [messageInfo, setMessageInfo] = (0, react_1.useState)();
    const DismissModal = () => {
        setMessageInfo(undefined);
        messageInfo?.onDismiss && messageInfo.onDismiss();
        setShowLoader(false);
    };
    (0, react_1.useEffect)(() => {
        localAlertManager.register(setMessageInfo, setShowLoader);
    }, []);
    const showModal = (0, react_1.useMemo)(() => showLoader || !!messageInfo, [showLoader, messageInfo]);
    (0, react_1.useEffect)(() => {
        react_native_1.Animated.spring(animationRef, { toValue: showModal ? 1 : 0, useNativeDriver: false, friction: 10 }).start();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [showModal]);
    return (<react_native_1.Animated.View style={[
            react_native_1.StyleSheet.absoluteFillObject,
            styles.viewStyles,
            {
                transform: [{ translateY: animationRef.interpolate({ inputRange: [0, 1], outputRange: [-1 * height, 0] }) }],
            },
        ]}>
      <react_native_1.Animated.View style={[styles.flex, { transform: [{ scale: animationRef }], height, width, opacity: animationRef }]}>
        {showModal && (<>
            {messageInfo ? (<MessageComponent messageConfig={messageInfo} dismissModal={DismissModal}/>) : (<react_native_1.View style={[styles.flex, { height, width }]}>{props.loaderComponent}</react_native_1.View>)}
          </>)}
      </react_native_1.Animated.View>
    </react_native_1.Animated.View>);
};
exports.AlertCustomizationProvider = AlertCustomizationProvider;
const styles = react_native_1.StyleSheet.create({
    viewStyles: {
        backgroundColor: "#0006",
    },
    flex: { flex: 1 },
});
//# sourceMappingURL=CustomizableAlert.js.map