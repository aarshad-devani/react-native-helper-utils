import { FC, PropsWithChildren } from "react";
import { StyleProp, ViewStyle } from "react-native";
interface IProps {
    xs?: number;
    sm?: number;
    md?: number;
    lg?: number;
    style?: StyleProp<ViewStyle>;
}
declare const Col: FC<PropsWithChildren<IProps>>;
export default Col;
