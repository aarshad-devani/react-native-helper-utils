import { FC } from "react";
import { TextInputProps, ViewStyle, TextStyle } from "react-native";
import { ICountryItem } from "./CountryModal";
interface IPhoneInput {
    outerContainerStyle?: ViewStyle;
    textInputProps?: TextInputProps;
    initialCountryCode?: string;
    countryFlagTextStyle?: TextStyle;
    countryFlagButtonStyle?: ViewStyle;
    disableModal?: boolean;
    countryList?: ICountryItem[];
    onFlagButtonPress?: () => void;
    value: string;
    onPhoneNumberUpdate: (newValue: string, formattedValue: string, countryCode: string) => void;
}
export declare const isValidNumber: (phoneString: string, countryCode?: string) => boolean;
export declare const GetRawNumber: (phoneString: string, countryCode?: string) => string;
export declare const GetFormattedNumber: (phoneString: string, countryCode?: string) => string;
export declare const PhoneInput: FC<IPhoneInput>;
export {};
