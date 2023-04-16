import { Component, PropsWithChildren } from "react";
import { Animated, LayoutChangeEvent, StyleProp, ViewStyle } from "react-native";
interface ICollapsibleState {
    measuring: boolean;
    measured: boolean;
    height: Animated.Value;
    contentHeight: number;
    animating: boolean;
}
interface ICollapsibleProps {
    align?: "top" | "center" | "bottom";
    collapsed: boolean;
    collapsedHeight: number;
    enablePointerEvents?: boolean;
    duration?: number;
    onAnimationEnd?: () => void;
    easing?: string;
    renderChildrenCollapsed: boolean;
    style?: Animated.AnimatedProps<StyleProp<ViewStyle>>;
}
export default class Collapsible extends Component<PropsWithChildren<ICollapsibleProps>, ICollapsibleState> {
    unmounted: boolean;
    _animation: Animated.CompositeAnimation | void | null;
    contentHandle: any;
    static defaultProps: {
        align: string;
        collapsed: boolean;
        collapsedHeight: number;
        enablePointerEvents: boolean;
        duration: number;
        easing: string;
        onAnimationEnd: () => null;
        renderChildrenCollapsed: boolean;
    };
    constructor(props: ICollapsibleProps);
    componentDidUpdate(prevProps: ICollapsibleProps): void;
    componentWillUnmount(): void;
    _componentDidUpdate(prevProps: ICollapsibleProps): void;
    _handleRef: (ref: any) => void;
    _measureContent(callback: (ht: number) => void): void;
    _toggleCollapsed(collapsed: boolean): void;
    _transitionToHeight(height: number): void;
    _handleLayoutChange: (event: LayoutChangeEvent) => void;
    render(): JSX.Element;
}
export {};
