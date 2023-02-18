import { FC, ReactNode } from "react";
interface IMessageConfig {
    title: string;
    message?: string;
    type: "success" | "error" | "info" | "warning";
    illustration?: ReactNode;
    dismissOnButtonPress?: boolean;
    buttons?: Array<{
        title: string;
        onPress?: () => void;
        variant: "primary" | "secondary" | "destructive";
    }>;
    onDismiss?: () => void;
}
export declare const ShowMessage: (messageConfig: IMessageConfig) => void;
export declare const ShowLoader: (status: boolean) => void;
export interface IAlertComponent {
    messageConfig: IMessageConfig;
    dismissModal?: () => void;
}
interface ICustomizableAlert {
    loaderComponent: ReactNode;
    messageComponent: FC<IAlertComponent>;
}
export declare const AlertCustomizationProvider: FC<ICustomizableAlert>;
export {};
