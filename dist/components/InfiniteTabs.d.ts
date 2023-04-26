import React, { ReactNode } from "react";
import { StyleProp, TextStyle, ViewStyle } from "react-native";
type ActiveInActiveStyle<T> = {
    active: T;
    inactive: T;
};
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
export declare const ClickableTabItem: React.FC<ClickableTabItemProps>;
export declare const InfiniteTabs: React.FC<InfiniteTabsProps>;
export {};
