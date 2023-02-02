import { FC, PropsWithChildren } from "react";
import { StyleProp, ViewStyle } from "react-native";
interface IProps {
    rowStyles: StyleProp<ViewStyle>;
}
declare const Row: FC<PropsWithChildren<IProps>>;
export default Row;
