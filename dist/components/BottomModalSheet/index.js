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
// https://github.com/kcotias/react-native-gesture-bottom-sheet
const react_1 = __importStar(require("react"));
const react_native_1 = require("react-native");
const styles_1 = __importDefault(require("./styles"));
const BottomSheet = (props, forwardedRef) => {
    const { backgroundColor = "#25252599", children, dragIconColor = "#A3A3A3", dragIconStyle = {}, draggable = true, height, hasDraggableIcon, panStyle = {}, radius = 10, sheetBackgroundColor = "#F3F3F3", onBottomSheetClose = () => { }, } = props;
    const animationRef = (0, react_1.useRef)(new react_native_1.Animated.Value(0)).current;
    const panRef = (0, react_1.useRef)(new react_native_1.Animated.ValueXY()).current;
    const [modalVisible, setModalVisible] = (0, react_1.useState)(false);
    (0, react_1.useImperativeHandle)(forwardedRef, () => ({
        show,
        close,
    }));
    const setModalVisibility = (0, react_1.useCallback)((visible) => {
        if (visible) {
            setModalVisible(visible);
            react_native_1.Animated.timing(animationRef, {
                toValue: height,
                duration: 300,
                useNativeDriver: false,
            }).start();
        }
        else {
            react_native_1.Animated.timing(animationRef, {
                toValue: 0,
                duration: 400,
                useNativeDriver: false,
            }).start(() => {
                panRef.setValue({ x: 0, y: 0 });
                animationRef.setValue(0);
                setModalVisible(visible);
                onBottomSheetClose();
            });
        }
    }, 
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [height]);
    const panResponder = (0, react_1.useRef)(react_native_1.PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderMove: (e, gestureState) => {
            if (gestureState.dy > 0) {
                react_native_1.Animated.event([null, { dy: panRef.y }], {
                    useNativeDriver: false,
                })(e, gestureState);
            }
        },
        onPanResponderRelease: (_e, gestureState) => {
            const gestureLimitArea = props.height / 3;
            const gestureDistance = gestureState.dy;
            if (gestureDistance > gestureLimitArea) {
                setModalVisibility(false);
            }
            else {
                react_native_1.Animated.spring(panRef, {
                    toValue: { x: 0, y: 0 },
                    useNativeDriver: false,
                }).start();
            }
        },
    })).current;
    const show = () => setModalVisibility(true);
    const close = () => setModalVisibility(false);
    return (<react_native_1.Modal transparent visible={modalVisible} onRequestClose={close}>
      <react_native_1.View style={[styles_1.default.wrapper, { backgroundColor: backgroundColor }]}>
        <react_native_1.TouchableOpacity style={styles_1.default.background} activeOpacity={1} onPress={close}/>
        <react_native_1.Animated.View {...(draggable && panResponder.panHandlers)} style={[
            styles_1.default.container,
            react_native_1.StyleSheet.compose({
                backgroundColor: sheetBackgroundColor,
                borderTopRightRadius: radius,
                borderTopLeftRadius: radius,
            }, panStyle),
            {
                height: animationRef,
            },
        ]}>
          {hasDraggableIcon && (<react_native_1.View style={styles_1.default.draggableContainer}>
              <react_native_1.View style={[
                styles_1.default.draggableIcon,
                react_native_1.StyleSheet.compose({
                    backgroundColor: dragIconColor,
                }, dragIconStyle),
            ]}/>
            </react_native_1.View>)}
          {children}
        </react_native_1.Animated.View>
      </react_native_1.View>
    </react_native_1.Modal>);
};
exports.default = BottomSheet;
//# sourceMappingURL=index.js.map