import React, { Fragment, ReactNode, useEffect, useRef } from "react";
import { Pressable, View, Animated, FlatList, StyleSheet, StyleProp, TextStyle, ViewStyle, Text } from "react-native";
import { CommonStyles } from "../styles";

interface InfiniteTabsProps {
  tabs: any[];
  onTabClick: (itemClicked: this["tabs"][0]) => void;
  activeTab?: this["tabs"][0];
  displayProperty: keyof this["tabs"][0];
  keyProperty: keyof this["tabs"][0];
  activeTextStyle?: StyleProp<TextStyle>;
  inActiveTextStyle?: StyleProp<TextStyle>;
  indicatorPlacement?: "top" | "bottom";
  indicatorStyle?: StyleProp<ViewStyle>;
  tabItemContainerStyle?: StyleProp<ViewStyle>;
  render?: (item: this["tabs"][0], index: number, isSelected: boolean) => ReactNode;
}

interface ClickableTabItemProps {
  text: string;
  onClick: () => void;
  active?: boolean;
  textStyle?: StyleProp<TextStyle>;
  inActiveTextStyle?: StyleProp<TextStyle>;
  indicatorPlacement?: "top" | "bottom";
  indicatorStyle?: StyleProp<ViewStyle>;
  tabItemContainerStyle?: StyleProp<ViewStyle>;
}

const styles = StyleSheet.create({
  wrapFlex: {
    flexWrap: "wrap",
  },
  bottomBar: {
    position: "absolute",
    bottom: 0,
    left: 0,
    height: 3,
    width: "100%",
    alignSelf: "center",
    backgroundColor: "white",
  },
  centeredItem: {
    justifyContent: "center",
    alignItems: "center",
  },
});

const ClickableTabItem: React.FC<ClickableTabItemProps> = (props) => {
  const animation = React.useRef(new Animated.Value(0)).current;
  const onClick = () => {
    props.onClick();
  };

  React.useEffect(() => {
    Animated.spring(animation, {
      toValue: props.active ? 1 : 0,
      friction: 10,
      useNativeDriver: true,
    }).start();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.active]);

  return (
    <Pressable onPress={onClick}>
      <View style={[CommonStyles.marginHorizontal10]}>
        <View style={[styles.centeredItem, { margin: 5 }]}>
          <Text>{props.text}</Text>
        </View>
        <Animated.View
          style={[
            { transform: [{ scale: animation }] },
            styles.bottomBar,
            StyleSheet.compose({}, props.indicatorStyle),
          ]}
        />
      </View>
    </Pressable>
  );
};

export const InfiniteTabs: React.FC<InfiniteTabsProps> = (props) => {
  const [selectedTab, setSelectedTab] = React.useState<typeof props["tabs"][0]>(props.activeTab ?? props.tabs[0]);
  const flatListRef = useRef<FlatList<typeof props["tabs"][0]>>(null);

  useEffect(() => {
    if (props.activeTab && props.activeTab !== selectedTab) {
      setSelectedTab(props.activeTab);
      flatListRef.current && flatListRef.current.scrollToItem({ animated: true, item: props.activeTab });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.activeTab]);

  const SelectTab = (tabItem: typeof props["tabs"][0]) => () => {
    setSelectedTab(tabItem);
    props.onTabClick(tabItem);
  };
  return (
    <FlatList
      ref={flatListRef}
      style={{ flexGrow: 0, minHeight: 30 }}
      horizontal={true}
      data={props.tabs}
      showsHorizontalScrollIndicator={false}
      // renderScrollComponent={false}
      renderItem={({ item, index }) =>
        props.render ? (
          <Fragment>
            {props.render(
              item,
              index,
              selectedTab ? item[props.keyProperty] === selectedTab[props.keyProperty] : false
            )}
          </Fragment>
        ) : (
          <ClickableTabItem
            text={item[props.displayProperty]}
            onClick={SelectTab(item)}
            active={selectedTab ? item[props.keyProperty] === selectedTab[props.keyProperty] : false}
          />
        )
      }
      keyExtractor={(item) => item.key.toString()}
    />
  );
};
