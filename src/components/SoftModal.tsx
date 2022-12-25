import React, { FC, useRef, useEffect, PropsWithChildren } from "react";
import { Animated, StyleSheet, Pressable, useWindowDimensions, View } from "react-native";

interface ISoftModal {
  visible: boolean;
  onRequestClose?: () => void;
}

export const SoftModal: FC<PropsWithChildren<ISoftModal>> = (props) => {
  const animationRef = useRef<Animated.Value>(new Animated.Value(0)).current;
  const { height, width } = useWindowDimensions();

  useEffect(() => {
    Animated.spring(animationRef, { toValue: props.visible ? 1 : 0, useNativeDriver: false, friction: 10 }).start();
  }, [props.visible]);

  return (
    <Animated.View
      style={[
        StyleSheet.absoluteFillObject,
        {
          height,
          width,
          transform: [
            {
              translateY: animationRef.interpolate({ inputRange: [0, 1], outputRange: [height, 0] }),
            },
          ],
        },
      ]}
    >
      <Pressable style={{ flex: 1 }} onPress={props.onRequestClose}>
        <View style={{ flex: 1 }}>{props.children}</View>
      </Pressable>
    </Animated.View>
  );
};
