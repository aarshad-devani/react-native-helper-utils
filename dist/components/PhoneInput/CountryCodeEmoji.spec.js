"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-env jest */
const CountryCodeEmoji_1 = require("./CountryCodeEmoji");
const INVALID_INPUTS = [undefined, null, false, true, 100, [], {}, "s", "very long string", "ÀÈ", "ûŝ", "20"];
const VALID_INPUTS = [
    ["AE", "🇦🇪"],
    ["CN", "🇨🇳"],
    ["GB", "🇬🇧"],
    ["UK", "🇺🇰"],
    ["US", "🇺🇸"],
];
describe("countryCodeEmoji", () => {
    describe.each(INVALID_INPUTS.concat("🇺🇸"))("`%p` input", (input) => {
        it("should throw a `TypeError`", () => {
            expect(() => (0, CountryCodeEmoji_1.countryCodeEmoji)(input)).toThrow(TypeError);
        });
    });
    describe.each([...VALID_INPUTS, ["Us", "🇺🇸"], ["uS", "🇺🇸"], ["us", "🇺🇸"]])("`%p` input", (input, expected) => {
        it(`should return '${expected}'`, () => {
            expect((0, CountryCodeEmoji_1.countryCodeEmoji)(input)).toBe(expected);
        });
    });
});
describe("emojiCountryCode", () => {
    describe.each(INVALID_INPUTS.concat("🙃"))("`%p` input", (input) => {
        it("should throw a `TypeError`", () => {
            expect(() => (0, CountryCodeEmoji_1.emojiCountryCode)(input)).toThrow(TypeError);
        });
    });
    describe.each(VALID_INPUTS.map(([cc, flag]) => [flag, cc]))("`%p` input", (input, expected) => {
        it(`should return '${expected}'`, () => {
            expect((0, CountryCodeEmoji_1.emojiCountryCode)(input)).toBe(expected);
        });
    });
});
//# sourceMappingURL=CountryCodeEmoji.spec.js.map