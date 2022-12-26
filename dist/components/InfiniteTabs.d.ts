import React from "react";
import { StyleProp, TextStyle, ViewStyle } from "react-native";
interface TabItem {
    name: string;
    key: string | number;
}
interface InfiniteTabsProps<T = any> {
    tabs: T[];
    textProperty: string;
    onTabClick: (itemClicked: TabItem) => void;
    activeTab?: TabItem;
    activeTextStyle?: StyleProp<TextStyle>;
    inActiveTextStyle?: StyleProp<TextStyle>;
    indicatorPlacement?: "top" | "bottom";
    indicatorStyle?: StyleProp<ViewStyle>;
    tabItemContainerStyle?: StyleProp<ViewStyle>;
}
export declare const InfiniteTabs: React.FC<InfiniteTabsProps>;
export {};
