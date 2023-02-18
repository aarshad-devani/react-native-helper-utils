import React, { ReactNode } from "react";
import { StyleProp, TextStyle, ViewStyle } from "react-native";
interface TabItem {
    name: string;
    key: string | number;
}
interface InfiniteTabsProps {
    tabs: any[];
    onTabClick: (itemClicked: this["tabs"][0]) => void;
    activeTab?: TabItem;
    displayProperty: keyof this["tabs"][0];
    keyProperty: keyof this["tabs"][0];
    activeTextStyle?: StyleProp<TextStyle>;
    inActiveTextStyle?: StyleProp<TextStyle>;
    indicatorPlacement?: "top" | "bottom";
    indicatorStyle?: StyleProp<ViewStyle>;
    tabItemContainerStyle?: StyleProp<ViewStyle>;
    render?: (item: this["tabs"][0], index: number, isSelected: boolean) => ReactNode;
}
export declare const InfiniteTabs: React.FC<InfiniteTabsProps>;
export {};
