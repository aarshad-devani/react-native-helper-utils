import type { ImageStyle, TextStyle, ViewStyle } from "react-native";
type AppearanceProvider<T> = () => T;
type NamedStyles<T> = {
    [P in keyof T]: ViewStyle | TextStyle | ImageStyle;
};
interface StyleSheetData<N extends string, T, S> {
    styles: Record<N, S>;
    themes: Record<N, T>;
    appearanceProvider: AppearanceProvider<N>;
}
export declare function registerThemes<N extends string, T, R extends N>(themes: Record<N, T>, appearanceProvider: AppearanceProvider<R>): <S extends NamedStyles<S> | NamedStyles<any>>(fn: (theme: T) => S) => StyleSheetData<N, T, S>;
export declare function useTheme<T, N extends string, S extends NamedStyles<S> | NamedStyles<any>>(data: StyleSheetData<N, T, S>, name?: N): [NamedStyles<S>, T, N];
export {};
