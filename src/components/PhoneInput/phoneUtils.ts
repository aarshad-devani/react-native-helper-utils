import { PhoneNumberUtil, PhoneNumberFormat } from "google-libphonenumber";
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
