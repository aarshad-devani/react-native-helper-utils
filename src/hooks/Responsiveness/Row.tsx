import React, { FC, PropsWithChildren } from "react";
import { StyleProp, View, ViewStyle, StyleSheet } from "react-native";
import useGridStyles from "./styles";

interface IProps {
  rowStyles?: StyleProp<ViewStyle>;
}

const Row: FC<PropsWithChildren<IProps>> = (props) => {
  const gridStyles = useGridStyles();

  return <View style={[gridStyles.row, StyleSheet.compose({}, props.rowStyles)]}>{props.children}</View>;
};

export default Row;
