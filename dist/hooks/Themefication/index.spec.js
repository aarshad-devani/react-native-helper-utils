"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
const lightTheme = { backgroundColor: "white" };
const darkTheme = { backgroundColor: "black" };
const styleSheetFactory = (0, index_1.registerThemes)({ light: lightTheme, dark: darkTheme }, () => "light");
const themedStyles = styleSheetFactory((theme) => ({
    container: {
        backgroundColor: theme.backgroundColor,
    },
}));
describe("useTheme with explicit theme name", function () {
    it("should return the correct data", function () {
        const [styles, theme, name] = (0, index_1.useTheme)(themedStyles, "dark");
        expect(styles.container.backgroundColor).toEqual("black");
        expect(theme).toEqual(darkTheme);
        expect(name).toEqual("dark");
    });
});
describe("useTheme without explicit theme name", function () {
    it("should return the correct data", function () {
        const [styles, theme, name] = (0, index_1.useTheme)(themedStyles);
        expect(styles.container.backgroundColor).toEqual("white");
        expect(theme).toEqual(lightTheme);
        expect(name).toEqual("light");
    });
});
//# sourceMappingURL=index.spec.js.map