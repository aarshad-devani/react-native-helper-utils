import React, { ReactNode, useEffect, useRef } from "react";
import { Pressable, View, Animated, FlatList, StyleSheet, StyleProp, TextStyle, ViewStyle, Text } from "react-native";
import { CommonStyles } from "../styles";

type ActiveInActiveStyle<T> = { active: T; inactive: T };

interface InfiniteTabsProps<T = any> {
  tabs: T[];
  onTabClick: (itemClicked: this["tabs"][0]) => void;
  activeTab?: this["tabs"][0];
  displayProperty: keyof this["tabs"][0];
  keyExtractor: (data: this["tabs"][0]) => string;
  keyProperty: keyof this["tabs"][0];
  indicatorPlacement?: "top" | "bottom";
  textStyle?: ActiveInActiveStyle<StyleProp<TextStyle>>;
  indicatorStyle?: ActiveInActiveStyle<StyleProp<ViewStyle>>;
  tabItemContainerStyle?: ActiveInActiveStyle<StyleProp<ViewStyle>>;
  spanFull?: boolean;
  render?: (item: this["tabs"][0], index: number, isSelected: boolean) => ReactNode;
}

interface ClickableTabItemProps {
  text: string;
  active?: boolean;
  indicatorPlacement?: "top" | "bottom";
  textStyle?: ActiveInActiveStyle<StyleProp<TextStyle>>;
  indicatorStyle?: ActiveInActiveStyle<StyleProp<ViewStyle>>;
  tabItemContainerStyle?: ActiveInActiveStyle<StyleProp<ViewStyle>>;
}

const styles = StyleSheet.create({
  wrapFlex: {
    flexWrap: "wrap",
  },
  indicatorBar: {
    height: 3,
    width: "100%",
    alignSelf: "center",
    backgroundColor: "white",
  },
  topBar: {
    position: "absolute",
    top: 0,
    left: 0,
  },
  bottomBar: {
    position: "absolute",
    bottom: 0,
    left: 0,
  },
  centeredItem: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export const ClickableTabItem: React.FC<ClickableTabItemProps> = (props) => {
  const animation = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    Animated.spring(animation, {
      toValue: props.active ? 1 : 0,
      friction: 10,
      useNativeDriver: true,
    }).start();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.active]);

  return (
    <View
      style={[
        CommonStyles.marginHorizontal10,
        StyleSheet.compose(
          {},
          props.active ? props.tabItemContainerStyle?.active : props.tabItemContainerStyle?.inactive
        ),
      ]}
    >
      {props.indicatorPlacement === "top" && (
        <Animated.View
          style={[
            { transform: [{ scale: animation }] },
            styles.indicatorBar,
            styles.topBar,
            StyleSheet.compose({}, props.active ? props.indicatorStyle?.active : props.indicatorStyle?.inactive),
          ]}
        />
      )}
      <View style={[styles.centeredItem, CommonStyles.margin5]}>
        <Text style={props.active ? props.textStyle?.active : props.textStyle?.inactive}>{props.text}</Text>
      </View>
      {props.indicatorPlacement === "bottom" && (
        <Animated.View
          style={[
            { transform: [{ scale: animation }] },
            styles.indicatorBar,
            styles.bottomBar,
            StyleSheet.compose({}, props.active ? props.indicatorStyle?.active : props.indicatorStyle?.inactive),
          ]}
        />
      )}
    </View>
  );
};

export const InfiniteTabs: React.FC<InfiniteTabsProps> = (props) => {
  const [selectedTab, setSelectedTab] = React.useState<(typeof props)["tabs"][0]>(props.activeTab ?? props.tabs[0]);
  const flatListRef = useRef<FlatList<(typeof props)["tabs"][0]>>(null);

  useEffect(() => {
    if (props.activeTab && props.keyExtractor(props.activeTab) !== props.keyExtractor(selectedTab)) {
      setSelectedTab(props.activeTab);
      flatListRef.current && flatListRef.current.scrollToItem({ animated: true, item: props.activeTab });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.activeTab]);

  const SelectTab = (tabItem: (typeof props)["tabs"][0]) => () => {
    setSelectedTab(tabItem);
    props.onTabClick(tabItem);
  };
  if (props.spanFull) {
    return (
      <View style={[CommonStyles.row, CommonStyles.horizontalAlignFlex]}>
        {props.tabs.map((item, i) => (
          <View style={[CommonStyles.flex]} key={i}>
            <Pressable onPress={SelectTab(item)}>
              {props.render ? (
                props.render(item, i, selectedTab ? item[props.keyProperty] === selectedTab[props.keyProperty] : false)
              ) : (
                <ClickableTabItem
                  indicatorPlacement={props.indicatorPlacement ?? "bottom"}
                  text={item[props.displayProperty]}
                  active={selectedTab ? item[props.keyProperty] === selectedTab[props.keyProperty] : false}
                  textStyle={props.textStyle}
                  indicatorStyle={props.indicatorStyle}
                  tabItemContainerStyle={props.tabItemContainerStyle}
                />
              )}
            </Pressable>
          </View>
        ))}
      </View>
    );
  }
  return (
    <FlatList
      ref={flatListRef}
      style={{ flexGrow: 0, minHeight: 30 }}
      horizontal={true}
      data={props.tabs}
      showsHorizontalScrollIndicator={false}
      // renderScrollComponent={false}
      renderItem={({ item, index }) => (
        <Pressable onPress={SelectTab(item)}>
          {props.render ? (
            props.render(item, index, selectedTab ? item[props.keyProperty] === selectedTab[props.keyProperty] : false)
          ) : (
            <ClickableTabItem
              text={item[props.displayProperty]}
              active={selectedTab ? item[props.keyProperty] === selectedTab[props.keyProperty] : false}
              textStyle={props.textStyle}
              indicatorStyle={props.indicatorStyle}
              tabItemContainerStyle={props.tabItemContainerStyle}
            />
          )}
        </Pressable>
      )}
      keyExtractor={props.keyExtractor}
    />
  );
};
