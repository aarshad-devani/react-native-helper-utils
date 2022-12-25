import React, { FC, useState, useEffect } from "react";
import { TextInput, TextInputProps, ViewStyle, TextStyle, Pressable, View, Text } from "react-native";
import { PhoneNumberUtil, PhoneNumberFormat } from "google-libphonenumber";

import { styles } from "./styles";
import { countryCodeEmoji } from "./CountryCodeEmoji";
import { ICountryItem, CountryModal, CountryList } from "./CountryModal";

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

const phoneNumberUtil = PhoneNumberUtil.getInstance();

export const isValidNumber = (phoneString: string, countryCode: string = "IN") => {
  try {
    const number1 = phoneNumberUtil.parseAndKeepRawInput(phoneString, countryCode);
    return phoneNumberUtil.isValidNumber(number1);
  } catch (err) {
    return false;
  }
};
export const GetRawNumber = (phoneString: string, countryCode: string = "IN"): string => {
  // if(phoneString === "") return ""
  // console.log("Params", phoneString, countryCode);
  if (phoneString.length < 12) return phoneString;
  try {
    const mainNumber = phoneNumberUtil.parseAndKeepRawInput(phoneString, countryCode);
    const rawNumber =
      phoneNumberUtil.isValidNumber(mainNumber) && mainNumber.getNationalNumber()
        ? mainNumber.getNationalNumber()?.toString()
        : phoneString;
    return rawNumber && Boolean(rawNumber) ? rawNumber : phoneString;
  } catch (err) {
    console.warn("Error Returning", err);
    return phoneString;
  }
};
export const GetFormattedNumber = (phoneString: string, countryCode: string = "IN"): string => {
  const mainNumber = phoneNumberUtil.parseAndKeepRawInput(phoneString, countryCode);
  return phoneNumberUtil.format(mainNumber, PhoneNumberFormat.E164);
};

export const PhoneInput: FC<IPhoneInput> = (props) => {
  const initialCountryCode = props.initialCountryCode ?? "in";
  const [selectedCountry, setSelectedCountry] = useState<ICountryItem | undefined>(
    CountryList.find((x) => x.iso2.toLowerCase() === initialCountryCode.toLowerCase())
  );

  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [phoneNumberInputData, setPhoneNumberInputData] = useState<string>(
    GetRawNumber(props.value ?? "", selectedCountry?.iso2)
  );

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
            !props.disableModal && setModalOpen(!modalOpen);
          }}
        >
          <View style={[styles.container, styles.flagButton, props.countryFlagButtonStyle]}>
            <Text>{countryCodeEmoji(selectedCountry?.iso2)}</Text>
            <Text style={[props.countryFlagTextStyle]}>{`+${selectedCountry?.dialCode}`}</Text>
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
