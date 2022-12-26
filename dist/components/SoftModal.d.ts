import { FC, PropsWithChildren } from "react";
interface ISoftModal {
    visible: boolean;
    onRequestClose?: () => void;
}
export declare const SoftModal: FC<PropsWithChildren<ISoftModal>>;
export {};
