import { FC, PropsWithChildren } from "react";
import { ViewProps, ScrollViewProps } from "react-native";
import { IScreenTypes } from "./styles";
interface IContainer extends ViewProps, ScrollViewProps {
    maxScreen: IScreenTypes;
    useScrollView?: boolean;
}
export declare const Container: FC<PropsWithChildren<IContainer>>;
export default Container;
