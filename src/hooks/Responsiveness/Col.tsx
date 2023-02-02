import React, { FC, PropsWithChildren } from "react";
import { View, StyleProp, ViewStyle, StyleSheet } from "react-native";
import useGridStyles from "./styles";

interface IProps {
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  style?: StyleProp<ViewStyle>;
}

const Col: FC<PropsWithChildren<IProps>> = (props) => {
  const { xs, sm, md, lg, style, children } = props;
  const columns_xs = "col_" + xs;
  const columns_sm = "col_sm_" + (sm || xs);
  const columns_md = "col_md_" + (md || sm || xs);
  const columns_lg = "col_lg_" + (lg || md || sm || xs);

  const gridStyles = useGridStyles();

  return (
    <View
      style={[
        gridStyles[columns_xs as keyof typeof gridStyles],
        gridStyles[columns_sm as keyof typeof gridStyles],
        gridStyles[columns_md as keyof typeof gridStyles],
        gridStyles[columns_lg as keyof typeof gridStyles],
        StyleSheet.compose({}, style),
      ]}
    >
      {children}
    </View>
  );
};

export default Col;
