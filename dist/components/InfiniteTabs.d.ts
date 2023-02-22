import React, { ReactNode } from "react";
import { StyleProp, TextStyle, ViewStyle } from "react-native";
interface InfiniteTabsProps {
    tabs: any[];
    onTabClick: (itemClicked: this["tabs"][0]) => void;
    activeTab?: this["tabs"][0];
    displayProperty: keyof this["tabs"][0];
    keyExtractor: (data: this["tabs"][0]) => string;
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
