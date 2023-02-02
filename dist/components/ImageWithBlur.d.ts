import { FC } from "react";
import { ImageProps } from "react-native";
interface IImageWithBlur extends ImageProps {
    backgroundBlur?: number;
    centerImageScale?: number;
    showLoader?: boolean;
}
export declare const ImageWithBlur: FC<IImageWithBlur>;
export {};
