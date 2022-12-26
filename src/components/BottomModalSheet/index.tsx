// https://github.com/kcotias/react-native-gesture-bottom-sheet
import React, {
  PropsWithChildren,
  useCallback,
  useRef,
  useState,
  ForwardRefRenderFunction,
  useImperativeHandle,
} from "react";
import { View, Modal, TouchableOpacity, Animated, PanResponder, ViewStyle, StyleProp, StyleSheet } from "react-native";
import styles from "./styles";

interface IBottomSheet {
  backgroundColor?: string;
  dragIconColor?: string;
  draggable?: boolean;
  dragIconStyle?: StyleProp<ViewStyle>;
  hasDraggableIcon: boolean;
  height: number;
  panStyle?: StyleProp<ViewStyle>;
  radius?: number;
  sheetBackgroundColor?: string;
  onBottomSheetClose?: () => void;
}

export interface BottomSheetHandles {
  show: () => void;
  close: () => void;
}

const BottomSheet: ForwardRefRenderFunction<BottomSheetHandles, PropsWithChildren<IBottomSheet>> = (
  props,
  forwardedRef
) => {
  const {
    backgroundColor = "#25252599",
    children,
    dragIconColor = "#A3A3A3",
    dragIconStyle = {},
    draggable = true,
    height,
    hasDraggableIcon,
    panStyle = {},
    radius = 10,
    sheetBackgroundColor = "#F3F3F3",
    onBottomSheetClose = () => {},
  } = props;
  const animationRef = useRef<Animated.Value>(new Animated.Value(0)).current;
  const panRef = useRef<Animated.ValueXY>(new Animated.ValueXY()).current;
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  useImperativeHandle(forwardedRef, () => ({
    show,
    close,
  }));

  const setModalVisibility = useCallback(
    (visible: boolean) => {
      if (visible) {
        setModalVisible(visible);
        Animated.timing(animationRef, {
          toValue: height,
          duration: 300,
          useNativeDriver: false,
        }).start();
      } else {
        Animated.timing(animationRef, {
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
    [height]
  );

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (e, gestureState) => {
        if (gestureState.dy > 0) {
          Animated.event([null, { dy: panRef.y }], {
            useNativeDriver: false,
          })(e, gestureState);
        }
      },
      onPanResponderRelease: (_e, gestureState) => {
        const gestureLimitArea = props.height / 3;
        const gestureDistance = gestureState.dy;
        if (gestureDistance > gestureLimitArea) {
          setModalVisibility(false);
        } else {
          Animated.spring(panRef, {
            toValue: { x: 0, y: 0 },
            useNativeDriver: false,
          }).start();
        }
      },
    })
  ).current;

  const show = () => setModalVisibility(true);
  const close = () => setModalVisibility(false);

  return (
    <Modal transparent visible={modalVisible} onRequestClose={close}>
      <View style={[styles.wrapper, { backgroundColor: backgroundColor }]}>
        <TouchableOpacity style={styles.background} activeOpacity={1} onPress={close} />
        <Animated.View
          {...(draggable && panResponder.panHandlers)}
          style={[
            styles.container,
            StyleSheet.compose(
              {
                backgroundColor: sheetBackgroundColor,
                borderTopRightRadius: radius,
                borderTopLeftRadius: radius,
              },
              panStyle
            ),
            {
              height: animationRef,
            },
          ]}
        >
          {hasDraggableIcon && (
            <View style={styles.draggableContainer}>
              <View
                style={[
                  styles.draggableIcon,
                  StyleSheet.compose(
                    {
                      backgroundColor: dragIconColor,
                    },
                    dragIconStyle
                  ),
                ]}
              />
            </View>
          )}
          {children}
        </Animated.View>
      </View>
    </Modal>
  );
};

export default BottomSheet;
