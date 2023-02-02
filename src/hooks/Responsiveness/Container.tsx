import React, { FC, PropsWithChildren, useMemo } from "react";
import { View, ViewProps, StyleSheet, useWindowDimensions, ScrollView, ScrollViewProps } from "react-native";
import { IScreenTypes, getScreenType, ScreenBounds } from "./styles";

interface IContainer extends ViewProps, ScrollViewProps {
  maxScreen: IScreenTypes;
  useScrollView?: boolean;
}

export const Container: FC<PropsWithChildren<IContainer>> = (props) => {
  const { maxScreen } = props;
  const { width } = useWindowDimensions();
  const currentScreenType = useMemo(() => getScreenType(width), [width]);

  const Component = props.useScrollView ? ScrollView : View;

  const maxWidthPossible = useMemo(() => {
    const currentScreenBounds = [
      ScreenBounds[currentScreenType][0],
      ScreenBounds[currentScreenType][1] === -1 ? width : ScreenBounds[currentScreenType][1],
    ];
    const expectedScreenBounds = [
      ScreenBounds[maxScreen][0],
      ScreenBounds[maxScreen][1] === -1 ? width : ScreenBounds[maxScreen][1],
    ];
    return currentScreenBounds[1] >= expectedScreenBounds[1] ? expectedScreenBounds[1] : currentScreenBounds[1];
  }, [currentScreenType, maxScreen, width]);

  return (
    <Component
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      {...props}
      style={[styles.container, { maxWidth: maxWidthPossible }, StyleSheet.compose({}, props.style)]}
    >
      {props.children}
    </Component>
  );
};

const styles = StyleSheet.create({
  container: { alignSelf: "center" },
});

export default Container;
