import { FC } from "react";
import { ViewStyle, TextStyle, StyleProp } from "react-native";
export interface ICountryItem {
    name: string;
    iso2: string;
    dialCode: string;
    priority: number;
    areaCodes: string[] | null;
}
export declare const CountryList: ICountryItem[];
interface ICountryModal {
    countryList?: ICountryItem[];
    onCountrySelected: (selectedCountry: ICountryItem) => void;
    selectedCountryItem?: ICountryItem;
    modalVisible: boolean;
    onDismiss?: () => void;
    itemContainerStyle?: StyleProp<ViewStyle>;
    listItemTextStyle?: StyleProp<TextStyle>;
}
export declare const CountryModal: FC<ICountryModal>;
export {};
