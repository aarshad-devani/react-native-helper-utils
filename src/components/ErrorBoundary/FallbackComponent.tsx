import React, { FC } from "react";
import { View, useWindowDimensions, StyleSheet, Text, Pressable } from "react-native";
import { IFallBackProps } from "./types";
import { CommonStyles } from "../../styles";

export type Props = { error: Error; resetError: Function };

const styles = StyleSheet.create({
  centerAlignText: { textAlign: "center" },
});

const FallbackComponent: FC<IFallBackProps> = (_props) => {
  const { width, height } = useWindowDimensions();
  const ICON_SIZE = width * 0.1;
  return (
    <View style={CommonStyles.flex}>
      <View style={[CommonStyles.flex, CommonStyles.centeredContent]}>
        <Text>There was an Unhandled Issue and it needs to be reported!</Text>
        <Text>{JSON.stringify(_props.error)}</Text>
        <Pressable onPress={_props.resetError}>
          <Text>Report</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default FallbackComponent;
