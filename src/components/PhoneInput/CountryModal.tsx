import React, { FC, useEffect, useRef } from "react";
import {
  Modal,
  FlatList,
  ViewStyle,
  TextStyle,
  View,
  Text,
  Pressable,
  useWindowDimensions,
  StyleProp,
  StyleSheet,
} from "react-native";
import { countryCodeEmoji } from "./CountryCodeEmoji";
import AllCountryList from "./countries.json";
import { modalStyles as styles } from "./styles";

export interface ICountryItem {
  name: string;
  iso2: string;
  dialCode: string;
  priority: number;
  areaCodes: string[] | null;
}

export const CountryList: ICountryItem[] = AllCountryList as ICountryItem[];

interface ICountryModal {
  countryList?: ICountryItem[];
  onCountrySelected: (selectedCountry: ICountryItem) => void;
  selectedCountryItem?: ICountryItem;
  modalVisible: boolean;
  onDismiss?: () => void;
  itemContainerStyle?: StyleProp<ViewStyle>;
  listItemTextStyle?: StyleProp<TextStyle>;
}

interface ICountryModalItem {
  onItemPress: (itemSelected: ICountryItem) => void;
  countryItem: ICountryItem;
  itemContainerStyle?: StyleProp<ViewStyle>;
  listItemTextStyle?: StyleProp<TextStyle>;
}
const CountryModalItem: FC<ICountryModalItem> = (props) => {
  return (
    <Pressable
      onPress={() => {
        props.onItemPress(props.countryItem);
      }}
    >
      <View style={[styles.listItem, StyleSheet.compose({}, props.itemContainerStyle)]}>
        <Text>{countryCodeEmoji(props.countryItem.iso2)}</Text>
        <Text
          style={StyleSheet.compose({}, props.listItemTextStyle)}
        >{`+${props.countryItem.dialCode}  ${props.countryItem.name}`}</Text>
      </View>
    </Pressable>
  );
};

export const CountryModal: FC<ICountryModal> = (props) => {
  const flatListRef = useRef<FlatList<ICountryItem>>();
  const { width, height } = useWindowDimensions();
  useEffect(() => {
    if (props.selectedCountryItem) {
      flatListRef.current?.scrollToItem({
        item: props.selectedCountryItem,
        animated: true,
        viewPosition: 1,
      });
    }
  }, [props.selectedCountryItem]);
  return (
    <Modal
      visible={props.modalVisible}
      transparent
      supportedOrientations={["landscape", "portrait"]}
      onRequestClose={props.onDismiss}
      animationType="slide"
    >
      <FlatList
        ref={() => flatListRef}
        style={[
          styles.flastListStyle,
          { width: width * (width > height ? 0.5 : 0.8) }, // if portrait then we will occupy 80% of screen and if landscape then we use 50% of screen
        ]}
        data={props.countryList ?? CountryList}
        keyExtractor={(item) => item.iso2}
        renderItem={({ item, index }) => (
          <CountryModalItem
            key={index}
            onItemPress={props.onCountrySelected}
            countryItem={item}
            itemContainerStyle={props.itemContainerStyle}
            listItemTextStyle={props.listItemTextStyle}
          />
        )}
      />
    </Modal>
  );
};
