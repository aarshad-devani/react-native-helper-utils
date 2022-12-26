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
const react_1 = __importStar(require("react"));
const react_native_1 = require("react-native");
const Toast = (props) => {
    let { id, onDestroy, icon, type = "normal", message, duration = 5000, style, textStyle, animationDuration = 250, animationType = "slide-in", successIcon, dangerIcon, warningIcon, successColor, dangerColor, warningColor, normalColor, placement, swipeEnabled, onPress, } = props;
    const containerRef = (0, react_1.useRef)(null);
    const [animation] = (0, react_1.useState)(new react_native_1.Animated.Value(0));
    const panResponderRef = (0, react_1.useRef)();
    const panResponderAnimRef = (0, react_1.useRef)();
    const closeTimeoutRef = (0, react_1.useRef)(null);
    const dims = (0, react_native_1.useWindowDimensions)();
    (0, react_1.useEffect)(() => {
        react_native_1.Animated.timing(animation, {
            toValue: 1,
            useNativeDriver: react_native_1.Platform.OS !== "web",
            duration: animationDuration,
        }).start();
        if (duration !== 0 && typeof duration === "number") {
            closeTimeoutRef.current = setTimeout(() => {
                handleClose();
            }, duration);
        }
        return () => {
            closeTimeoutRef.current && clearTimeout(closeTimeoutRef.current);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [duration]);
    // Handles hide & hideAll
    (0, react_1.useEffect)(() => {
        if (!props.open) {
            // Unregister close timeout
            closeTimeoutRef.current && clearTimeout(closeTimeoutRef.current);
            // Close animation them remove from stack.
            handleClose();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.open]);
    const handleClose = () => {
        react_native_1.Animated.timing(animation, {
            toValue: 0,
            useNativeDriver: react_native_1.Platform.OS !== "web",
            duration: animationDuration,
        }).start(() => onDestroy());
    };
    const panReleaseToLeft = (gestureState) => {
        react_native_1.Animated.timing(getPanResponderAnim(), {
            toValue: { x: (-dims.width / 10) * 9, y: gestureState.dy },
            useNativeDriver: react_native_1.Platform.OS !== "web",
            duration: 250,
        }).start(() => onDestroy());
    };
    const panReleaseToRight = (gestureState) => {
        react_native_1.Animated.timing(getPanResponderAnim(), {
            toValue: { x: (dims.width / 10) * 9, y: gestureState.dy },
            useNativeDriver: react_native_1.Platform.OS !== "web",
            duration: 250,
        }).start(() => onDestroy());
    };
    const getPanResponder = () => {
        if (panResponderRef.current)
            return panResponderRef.current;
        panResponderRef.current = react_native_1.PanResponder.create({
            onMoveShouldSetPanResponder: (_, gestureState) => {
                //return true if user is swiping, return false if it's a single click
                return !(gestureState.dx === 0 && gestureState.dy === 0);
            },
            onPanResponderMove: (_, gestureState) => {
                getPanResponderAnim()?.setValue({
                    x: gestureState.dx,
                    y: gestureState.dy,
                });
            },
            onPanResponderRelease: (_, gestureState) => {
                if (gestureState.dx > 50) {
                    panReleaseToRight(gestureState);
                }
                else if (gestureState.dx < -50) {
                    panReleaseToLeft(gestureState);
                }
                else {
                    react_native_1.Animated.spring(getPanResponderAnim(), {
                        toValue: { x: 0, y: 0 },
                        useNativeDriver: react_native_1.Platform.OS !== "web",
                    }).start();
                }
            },
        });
        return panResponderRef.current;
    };
    const getPanResponderAnim = () => {
        if (panResponderAnimRef.current)
            return panResponderAnimRef.current;
        panResponderAnimRef.current = new react_native_1.Animated.ValueXY({ x: 0, y: 0 });
        return panResponderAnimRef.current;
    };
    if (icon === undefined) {
        switch (type) {
            case "success": {
                if (successIcon) {
                    icon = successIcon;
                }
                break;
            }
            case "danger": {
                if (dangerIcon) {
                    icon = dangerIcon;
                }
                break;
            }
            case "warning": {
                if (warningIcon) {
                    icon = warningIcon;
                }
                break;
            }
        }
    }
    let backgroundColor = "";
    switch (type) {
        case "success":
            backgroundColor = successColor || "rgb(46, 125, 50)";
            break;
        case "danger":
            backgroundColor = dangerColor || "rgb(211, 47, 47)";
            break;
        case "warning":
            backgroundColor = warningColor || "rgb(237, 108, 2)";
            break;
        default:
            backgroundColor = normalColor || "#333";
    }
    const animationStyle = {
        opacity: animation,
        transform: [
            {
                translateY: animation.interpolate({
                    inputRange: [0, 1],
                    outputRange: placement === "bottom" ? [20, 0] : [-20, 0], // 0 : 150, 0.5 : 75, 1 : 0
                }),
            },
        ],
    };
    if (swipeEnabled) {
        animationStyle.transform?.push(getPanResponderAnim().getTranslateTransform()[0]);
    }
    if (animationType === "zoom-in") {
        animationStyle.transform?.push({
            scale: animation.interpolate({
                inputRange: [0, 1],
                outputRange: [0.7, 1],
            }),
        });
    }
    return (<react_native_1.Animated.View ref={containerRef} {...(swipeEnabled ? getPanResponder().panHandlers : null)} style={[styles.container, animationStyle]}>
      {props.renderType && props.renderType[type] ? (props.renderType[type](props)) : props.renderToast ? (props.renderToast(props)) : (<react_native_1.TouchableWithoutFeedback disabled={!onPress} onPress={() => onPress && onPress(id)}>
          <react_native_1.View style={[styles.toastContainer, { maxWidth: (dims.width / 10) * 9, backgroundColor }, style]}>
            {icon ? <react_native_1.View style={styles.iconContainer}>{icon}</react_native_1.View> : null}
            {react_1.default.isValidElement(message) ? message : <react_native_1.Text style={[styles.message, textStyle]}>{message}</react_native_1.Text>}
          </react_native_1.View>
        </react_native_1.TouchableWithoutFeedback>)}
    </react_native_1.Animated.View>);
};
const styles = react_native_1.StyleSheet.create({
    container: { width: "100%", alignItems: "center" },
    toastContainer: {
        paddingHorizontal: 12,
        paddingVertical: 12,
        borderRadius: 5,
        marginVertical: 5,
        flexDirection: "row",
        alignItems: "center",
        overflow: "hidden",
    },
    message: {
        color: "#fff",
        fontWeight: "500",
    },
    iconContainer: {
        marginRight: 5,
    },
});
exports.default = Toast;
//# sourceMappingURL=toast.js.map