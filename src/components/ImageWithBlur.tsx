import React, { FC } from "react";
import { View, Image, ImageProps, StyleSheet, ActivityIndicator } from "react-native";
import { CommonStyles } from "../styles";

interface IImageWithBlur extends ImageProps {
  backgroundBlur?: number;
  centerImageScale?: number;
  showLoader?: boolean;
}

const styles = StyleSheet.create({
  dullColor: { backgroundColor: "#0007" },
});

export const ImageWithBlur: FC<IImageWithBlur> = (props) => {
  return (
    <View style={[CommonStyles.centeredContent, CommonStyles.overflowHidden]}>
      <Image
        source={props.source}
        defaultSource={props.defaultSource}
        style={StyleSheet.compose({ opacity: 0.5 }, props.style)}
        blurRadius={props.backgroundBlur ?? 5}
        resizeMode="cover"
      />
      <View style={[StyleSheet.absoluteFill, CommonStyles.centeredContent]}>
        <Image
          resizeMode="contain"
          defaultSource={props.defaultSource}
          source={props.source}
          style={[StyleSheet.compose({ transform: [{ scale: props.centerImageScale ?? 0.9 }] }, props.style)]}
        />
      </View>
      {props.showLoader && (
        <View
          style={[
            StyleSheet.absoluteFill,
            CommonStyles.centeredContent,
            styles.dullColor,
            StyleSheet.compose({}, props.style),
          ]}
        >
          <ActivityIndicator color="white" />
        </View>
      )}
    </View>
  );
};
