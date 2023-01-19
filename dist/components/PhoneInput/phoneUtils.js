"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetFormattedNumber = exports.GetRawNumber = exports.isValidNumber = void 0;
const google_libphonenumber_1 = require("google-libphonenumber");
const phoneNumberUtil = google_libphonenumber_1.PhoneNumberUtil.getInstance();
const isValidNumber = (phoneString, countryCode = "IN") => {
    try {
        const number1 = phoneNumberUtil.parseAndKeepRawInput(phoneString, countryCode);
        return phoneNumberUtil.isValidNumber(number1);
    }
    catch (err) {
        return false;
    }
};
exports.isValidNumber = isValidNumber;
const GetRawNumber = (phoneString, countryCode = "IN") => {
    // if(phoneString === "") return ""
    // console.log("Params", phoneString, countryCode);
    if (phoneString.length < 12)
        return phoneString;
    try {
        const mainNumber = phoneNumberUtil.parseAndKeepRawInput(phoneString, countryCode);
        const rawNumber = phoneNumberUtil.isValidNumber(mainNumber) && mainNumber.getNationalNumber()
            ? mainNumber.getNationalNumber()?.toString()
            : phoneString;
        return rawNumber && Boolean(rawNumber) ? rawNumber : phoneString;
    }
    catch (err) {
        console.warn("Error Returning", err);
        return phoneString;
    }
};
exports.GetRawNumber = GetRawNumber;
const GetFormattedNumber = (phoneString, countryCode = "IN") => {
    const mainNumber = phoneNumberUtil.parseAndKeepRawInput(phoneString, countryCode);
    return phoneNumberUtil.format(mainNumber, google_libphonenumber_1.PhoneNumberFormat.E164);
};
exports.GetFormattedNumber = GetFormattedNumber;
//# sourceMappingURL=phoneUtils.js.map