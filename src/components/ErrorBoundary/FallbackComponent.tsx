import React, { FC } from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";
import type { IFallBackProps } from "./types";
import { CommonStyles } from "../../styles";

export type Props = { error: Error; resetError: Function };

const styles = StyleSheet.create({
  centerAlignText: { textAlign: "center" },
});

const FallbackComponent: FC<IFallBackProps> = (_props) => {
  return (
    <View style={CommonStyles.flex}>
      <View style={[CommonStyles.flex, CommonStyles.centeredContent]}>
        <Text style={[styles.centerAlignText]}>There was an Unhandled Issue and it needs to be reported!</Text>
        <Text>{JSON.stringify(_props.error)}</Text>
        <Pressable onPress={_props.resetError}>
          <Text>Report</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default FallbackComponent;
