export declare const ScreenBounds: {
    xs: number[];
    sm: number[];
    md: number[];
    lg: number[];
};
export type IScreenTypes = keyof typeof ScreenBounds;
export declare const getScreenType: (width: number) => IScreenTypes;
declare const useGridStyles: () => {
    row: {
        flexDirection: "row";
        flexWrap: "wrap";
        marginRight: number;
    };
    col_1: {
        width: string;
        paddingRight: number;
    };
    col_2: {
        width: string;
        paddingRight: number;
    };
    col_3: {
        width: string;
        paddingRight: number;
    };
    col_4: {
        width: string;
        paddingRight: number;
    };
    col_5: {
        width: string;
        paddingRight: number;
    };
    col_6: {
        width: string;
        paddingRight: number;
    };
    col_7: {
        width: string;
        paddingRight: number;
    };
    col_8: {
        width: string;
        paddingRight: number;
    };
    col_9: {
        width: string;
        paddingRight: number;
    };
    col_10: {
        width: string;
        paddingRight: number;
    };
    col_11: {
        width: string;
        paddingRight: number;
    };
    col_12: {
        width: string;
        paddingRight: number;
    };
    col_sm_1?: undefined;
    col_sm_2?: undefined;
    col_sm_3?: undefined;
    col_sm_4?: undefined;
    col_sm_5?: undefined;
    col_sm_6?: undefined;
    col_sm_7?: undefined;
    col_sm_8?: undefined;
    col_sm_9?: undefined;
    col_sm_10?: undefined;
    col_sm_11?: undefined;
    col_sm_12?: undefined;
    col_md_1?: undefined;
    col_md_2?: undefined;
    col_md_3?: undefined;
    col_md_4?: undefined;
    col_md_5?: undefined;
    col_md_6?: undefined;
    col_md_7?: undefined;
    col_md_8?: undefined;
    col_md_9?: undefined;
    col_md_10?: undefined;
    col_md_11?: undefined;
    col_md_12?: undefined;
    col_lg_1?: undefined;
    col_lg_2?: undefined;
    col_lg_3?: undefined;
    col_lg_4?: undefined;
    col_lg_5?: undefined;
    col_lg_6?: undefined;
    col_lg_7?: undefined;
    col_lg_8?: undefined;
    col_lg_9?: undefined;
    col_lg_10?: undefined;
    col_lg_11?: undefined;
    col_lg_12?: undefined;
} | {
    row: {
        flexDirection: "row";
        flexWrap: "wrap";
        marginRight: number;
    };
    col_sm_1: {
        width: string;
        paddingRight: number;
    };
    col_sm_2: {
        width: string;
        paddingRight: number;
    };
    col_sm_3: {
        width: string;
        paddingRight: number;
    };
    col_sm_4: {
        width: string;
        paddingRight: number;
    };
    col_sm_5: {
        width: string;
        paddingRight: number;
    };
    col_sm_6: {
        width: string;
        paddingRight: number;
    };
    col_sm_7: {
        width: string;
        paddingRight: number;
    };
    col_sm_8: {
        width: string;
        paddingRight: number;
    };
    col_sm_9: {
        width: string;
        paddingRight: number;
    };
    col_sm_10: {
        width: string;
        paddingRight: number;
    };
    col_sm_11: {
        width: string;
        paddingRight: number;
    };
    col_sm_12: {
        width: string;
        paddingRight: number;
    };
    col_1?: undefined;
    col_2?: undefined;
    col_3?: undefined;
    col_4?: undefined;
    col_5?: undefined;
    col_6?: undefined;
    col_7?: undefined;
    col_8?: undefined;
    col_9?: undefined;
    col_10?: undefined;
    col_11?: undefined;
    col_12?: undefined;
    col_md_1?: undefined;
    col_md_2?: undefined;
    col_md_3?: undefined;
    col_md_4?: undefined;
    col_md_5?: undefined;
    col_md_6?: undefined;
    col_md_7?: undefined;
    col_md_8?: undefined;
    col_md_9?: undefined;
    col_md_10?: undefined;
    col_md_11?: undefined;
    col_md_12?: undefined;
    col_lg_1?: undefined;
    col_lg_2?: undefined;
    col_lg_3?: undefined;
    col_lg_4?: undefined;
    col_lg_5?: undefined;
    col_lg_6?: undefined;
    col_lg_7?: undefined;
    col_lg_8?: undefined;
    col_lg_9?: undefined;
    col_lg_10?: undefined;
    col_lg_11?: undefined;
    col_lg_12?: undefined;
} | {
    row: {
        flexDirection: "row";
        flexWrap: "wrap";
        marginRight: number;
    };
    col_md_1: {
        width: string;
        paddingRight: number;
    };
    col_md_2: {
        width: string;
        paddingRight: number;
    };
    col_md_3: {
        width: string;
        paddingRight: number;
    };
    col_md_4: {
        width: string;
        paddingRight: number;
    };
    col_md_5: {
        width: string;
        paddingRight: number;
    };
    col_md_6: {
        width: string;
        paddingRight: number;
    };
    col_md_7: {
        width: string;
        paddingRight: number;
    };
    col_md_8: {
        width: string;
        paddingRight: number;
    };
    col_md_9: {
        width: string;
        paddingRight: number;
    };
    col_md_10: {
        width: string;
        paddingRight: number;
    };
    col_md_11: {
        width: string;
        paddingRight: number;
    };
    col_md_12: {
        width: string;
        paddingRight: number;
    };
    col_1?: undefined;
    col_2?: undefined;
    col_3?: undefined;
    col_4?: undefined;
    col_5?: undefined;
    col_6?: undefined;
    col_7?: undefined;
    col_8?: undefined;
    col_9?: undefined;
    col_10?: undefined;
    col_11?: undefined;
    col_12?: undefined;
    col_sm_1?: undefined;
    col_sm_2?: undefined;
    col_sm_3?: undefined;
    col_sm_4?: undefined;
    col_sm_5?: undefined;
    col_sm_6?: undefined;
    col_sm_7?: undefined;
    col_sm_8?: undefined;
    col_sm_9?: undefined;
    col_sm_10?: undefined;
    col_sm_11?: undefined;
    col_sm_12?: undefined;
    col_lg_1?: undefined;
    col_lg_2?: undefined;
    col_lg_3?: undefined;
    col_lg_4?: undefined;
    col_lg_5?: undefined;
    col_lg_6?: undefined;
    col_lg_7?: undefined;
    col_lg_8?: undefined;
    col_lg_9?: undefined;
    col_lg_10?: undefined;
    col_lg_11?: undefined;
    col_lg_12?: undefined;
} | {
    row: {
        flexDirection: "row";
        flexWrap: "wrap";
        marginRight: number;
    };
    col_lg_1: {
        width: string;
        paddingRight: number;
    };
    col_lg_2: {
        width: string;
        paddingRight: number;
    };
    col_lg_3: {
        width: string;
        paddingRight: number;
    };
    col_lg_4: {
        width: string;
        paddingRight: number;
    };
    col_lg_5: {
        width: string;
        paddingRight: number;
    };
    col_lg_6: {
        width: string;
        paddingRight: number;
    };
    col_lg_7: {
        width: string;
        paddingRight: number;
    };
    col_lg_8: {
        width: string;
        paddingRight: number;
    };
    col_lg_9: {
        width: string;
        paddingRight: number;
    };
    col_lg_10: {
        width: string;
        paddingRight: number;
    };
    col_lg_11: {
        width: string;
        paddingRight: number;
    };
    col_lg_12: {
        width: string;
        paddingRight: number;
    };
    col_1?: undefined;
    col_2?: undefined;
    col_3?: undefined;
    col_4?: undefined;
    col_5?: undefined;
    col_6?: undefined;
    col_7?: undefined;
    col_8?: undefined;
    col_9?: undefined;
    col_10?: undefined;
    col_11?: undefined;
    col_12?: undefined;
    col_sm_1?: undefined;
    col_sm_2?: undefined;
    col_sm_3?: undefined;
    col_sm_4?: undefined;
    col_sm_5?: undefined;
    col_sm_6?: undefined;
    col_sm_7?: undefined;
    col_sm_8?: undefined;
    col_sm_9?: undefined;
    col_sm_10?: undefined;
    col_sm_11?: undefined;
    col_sm_12?: undefined;
    col_md_1?: undefined;
    col_md_2?: undefined;
    col_md_3?: undefined;
    col_md_4?: undefined;
    col_md_5?: undefined;
    col_md_6?: undefined;
    col_md_7?: undefined;
    col_md_8?: undefined;
    col_md_9?: undefined;
    col_md_10?: undefined;
    col_md_11?: undefined;
    col_md_12?: undefined;
};
interface IuseDevideResolution {
    currentScreenType: IScreenTypes;
    minWidth: number;
    maxWidth: number;
    width: number;
    height: number;
    isLandscapeMode: boolean;
}
export declare const useDeviceResolution: () => IuseDevideResolution;
export default useGridStyles;
