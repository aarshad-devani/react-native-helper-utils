import React, { useState, useEffect, ForwardRefRenderFunction, useImperativeHandle } from "react";
import {
  TextInput,
  TextInputProps,
  ViewStyle,
  TextStyle,
  Pressable,
  View,
  Text,
  StyleProp,
  StyleSheet,
} from "react-native";

import { styles } from "./styles";
import { countryCodeEmoji } from "./CountryCodeEmoji";
import { ICountryItem, CountryModal, CountryList } from "./CountryModal";
import { GetRawNumber } from "./phoneUtils";

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

export const PhoneInput: ForwardRefRenderFunction<IPhoneInputMethods, IPhoneInput> = (props, forwardedRef) => {
  const initialCountryCode = props.initialCountryCode ?? "in";
  const [selectedCountry, setSelectedCountry] = useState<ICountryItem>(
    CountryList.find((x) => x.iso2.toLowerCase() === (initialCountryCode ?? "in").toLowerCase())!
  );

  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [phoneNumberInputData, setPhoneNumberInputData] = useState<string>(
    GetRawNumber(props.value ?? "", selectedCountry.iso2)
  );

  useImperativeHandle(forwardedRef, () => ({
    getCountry: () => selectedCountry,
    getRawNumber: () => phoneNumberInputData,
    getFullNumber: () => "+" + selectedCountry.dialCode + phoneNumberInputData,
  }));

  useEffect(() => {
    props.onCountryUpdate && props.onCountryUpdate(selectedCountry);
  }, [selectedCountry]);

  useEffect(() => {
    // if (phoneNumberInputData.length > 10) {
    //   const formattedNumber = GetFormattedNumber(
    //     "+" + selectedCountry?.dialCode ?? "91" + phoneNumberInputData,
    //     selectedCountry?.iso2.toUpperCase(),
    //   );
    //   console.log("FormattedNumber", formattedNumber);
    //   props.onPhoneNumberUpdate(formattedNumber, phoneNumberInputData);
    // }
    props.onPhoneNumberUpdate(
      phoneNumberInputData,
      "+" + (selectedCountry?.dialCode ?? "91") + phoneNumberInputData,
      (selectedCountry?.iso2 ?? "IN").toUpperCase()
    );
  }, [phoneNumberInputData, selectedCountry]);
  return (
    <>
      <View style={[styles.container, { width: "100%" }, props.outerContainerStyle]}>
        <Pressable
          onPress={() => {
            props.onFlagButtonPress && props.onFlagButtonPress();
            !props.disableModal && setModalOpen((curr) => !curr);
          }}
        >
          <View style={[styles.container, styles.flagButton, StyleSheet.compose({}, props.countryFlagButtonStyle)]}>
            <Text>{countryCodeEmoji(selectedCountry?.iso2)}</Text>
            <Text style={StyleSheet.compose({}, props.countryFlagTextStyle)}>{`+${selectedCountry?.dialCode}`}</Text>
          </View>
        </Pressable>
        <View style={{ alignSelf: "stretch", width: "80%" }}>
          <TextInput
            {...props.textInputProps}
            style={{ flex: 1 }}
            placeholder="Phone Number"
            value={phoneNumberInputData}
            returnKeyType="done"
            onChangeText={(newValue) => setPhoneNumberInputData(newValue)}
          />
        </View>
      </View>
      <CountryModal
        countryList={props.countryList}
        modalVisible={modalOpen}
        onDismiss={() => setModalOpen(false)}
        selectedCountryItem={selectedCountry}
        onCountrySelected={(selectedCountry) => {
          setSelectedCountry(selectedCountry);
          setModalOpen(false);
        }}
      />
    </>
  );
};
