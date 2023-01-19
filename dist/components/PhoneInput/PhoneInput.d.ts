import { ForwardRefRenderFunction } from "react";
import { TextInputProps, ViewStyle, TextStyle, StyleProp } from "react-native";
import { ICountryItem } from "./CountryModal";
export interface IPhoneInput {
    countryList?: ICountryItem[];
    disableModal?: boolean;
    outerContainerStyle?: ViewStyle;
    textInputProps?: TextInputProps;
    initialCountryCode?: string;
    countryFlagTextStyle?: StyleProp<TextStyle>;
    countryFlagButtonStyle?: StyleProp<ViewStyle>;
    value: string;
    onCountryUpdate?: (selectedCountry: ICountryItem) => void;
    onFlagButtonPress?: () => void;
    onPhoneNumberUpdate: (newValue: string, formattedValue: string, countryCode: string) => void;
}
export interface IPhoneInputMethods {
    getCountry: () => ICountryItem;
    getRawNumber: () => string;
    getFullNumber: () => string;
}
export type PhoneInputRef = IPhoneInputMethods;
export declare const PhoneInput: ForwardRefRenderFunction<IPhoneInputMethods, IPhoneInput>;
