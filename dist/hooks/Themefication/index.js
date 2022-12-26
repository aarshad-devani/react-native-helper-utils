"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useTheme = exports.registerThemes = void 0;
function registerThemes(themes, appearanceProvider) {
    return (fn) => {
        const styles = {};
        for (const [name, theme] of Object.entries(themes)) {
            styles[name] = fn(theme);
        }
        return { styles, themes, appearanceProvider };
    };
}
exports.registerThemes = registerThemes;
function useTheme(data, name) {
    const resolvedName = name || data.appearanceProvider();
    const theme = data.themes[resolvedName];
    if (!theme) {
        throw new Error(`Theme not defined: ${resolvedName}`);
    }
    const styles = data.styles[resolvedName];
    return [styles, theme, resolvedName];
}
exports.useTheme = useTheme;
//# sourceMappingURL=index.js.map