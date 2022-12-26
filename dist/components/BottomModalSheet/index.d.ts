import { PropsWithChildren, ForwardRefRenderFunction } from "react";
import { ViewStyle, StyleProp } from "react-native";
interface IBottomSheet {
    backgroundColor?: string;
    dragIconColor?: string;
    draggable?: boolean;
    dragIconStyle?: StyleProp<ViewStyle>;
    hasDraggableIcon: boolean;
    height: number;
    panStyle?: StyleProp<ViewStyle>;
    radius?: number;
    sheetBackgroundColor?: string;
    onBottomSheetClose?: () => void;
}
export interface BottomSheetHandles {
    show: () => void;
    close: () => void;
}
declare const BottomSheet: ForwardRefRenderFunction<BottomSheetHandles, PropsWithChildren<IBottomSheet>>;
export default BottomSheet;
