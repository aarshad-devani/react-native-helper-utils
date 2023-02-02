import { useMemo } from "react";
import { StyleSheet, useWindowDimensions } from "react-native";

// const COL_WIDTH = 100 / 12;

export const ScreenBounds = {
  xs: [0, 418],
  sm: [417, 768],
  md: [767, 1024],
  lg: [1023, -1],
};

export type IScreenTypes = keyof typeof ScreenBounds;

export const getScreenType = (width: number): IScreenTypes => {
  let currentType: IScreenTypes = "xs";
  Object.entries(ScreenBounds).forEach((entry) => {
    if (width > entry[1][0] && entry[1][1] === -1 ? true : width < entry[1][1]) {
      currentType = entry[0] as IScreenTypes;
    }
  });

  return currentType;
};

// const screenMultiplyMap = {
//   xs: 5,
//   sm: 6,
//   md: 7,
//   lg: 8,
// };

// const getStyles = (width: number) => {
//   const screenType = getScreenType(width);
//   return StyleSheet.create({
//     row: {
//       flexDirection: "row",
//       flexWrap: "wrap",
//       marginRight: -1 & screenMultiplyMap[screenType],
//     },
//     ["col" + (screenType === "xs" ? "" : "_" + screenType) + "_1"]: {
//       width: COL_WIDTH * 1 + "%",
//       paddingRight: screenMultiplyMap[screenType],
//     },
//     ["col" + (screenType === "xs" ? "" : "_" + screenType) + "_2"]: {
//       width: COL_WIDTH * 2 + "%",
//       paddingRight: screenMultiplyMap[screenType],
//     },
//     ["col" + (screenType === "xs" ? "" : "_" + screenType) + "_3"]: {
//       width: COL_WIDTH * 3 + "%",
//       paddingRight: screenMultiplyMap[screenType],
//     },
//     ["col" + (screenType === "xs" ? "" : "_" + screenType) + "_4"]: {
//       width: COL_WIDTH * 4 + "%",
//       paddingRight: screenMultiplyMap[screenType],
//     },
//     ["col" + (screenType === "xs" ? "" : "_" + screenType) + "_5"]: {
//       width: COL_WIDTH * 5 + "%",
//       paddingRight: screenMultiplyMap[screenType],
//     },
//     ["col" + (screenType === "xs" ? "" : "_" + screenType) + "_6"]: {
//       width: COL_WIDTH * 6 + "%",
//       paddingRight: screenMultiplyMap[screenType],
//     },
//     ["col" + (screenType === "xs" ? "" : "_" + screenType) + "_7"]: {
//       width: COL_WIDTH * 7 + "%",
//       paddingRight: screenMultiplyMap[screenType],
//     },
//     ["col" + (screenType === "xs" ? "" : "_" + screenType) + "_8"]: {
//       width: COL_WIDTH * 8 + "%",
//       paddingRight: screenMultiplyMap[screenType],
//     },
//     ["col" + (screenType === "xs" ? "" : "_" + screenType) + "_9"]: {
//       width: COL_WIDTH * 9 + "%",
//       paddingRight: screenMultiplyMap[screenType],
//     },
//     ["col" + (screenType === "xs" ? "" : "_" + screenType) + "_10"]: {
//       width: COL_WIDTH * 10 + "%",
//       paddingRight: screenMultiplyMap[screenType],
//     },
//     ["col" + (screenType === "xs" ? "" : "_" + screenType) + "_11"]: {
//       width: COL_WIDTH * 11 + "%",
//       paddingRight: screenMultiplyMap[screenType],
//     },
//     ["col" + (screenType === "xs" ? "" : "_" + screenType) + "_12"]: {
//       width: COL_WIDTH * 12 + "%",
//       paddingRight: screenMultiplyMap[screenType],
//     },
//   });
// };

const generateStyles = (width: number) => {
  const colWidth = 100 / 12;

  const xs = getScreenType(width) === "xs";
  const sm = getScreenType(width) === "sm";
  const md = getScreenType(width) === "md";
  //   const lg = width > 1023;

  return StyleSheet.create(
    xs
      ? {
          row: {
            flexDirection: "row",
            flexWrap: "wrap",
            marginRight: -5,
          },
          col_1: {
            width: colWidth * 1 + "%",
            paddingRight: 5,
          },
          col_2: {
            width: colWidth * 2 + "%",
            paddingRight: 5,
          },
          col_3: {
            width: colWidth * 3 + "%",
            paddingRight: 5,
          },
          col_4: {
            width: colWidth * 4 + "%",
            paddingRight: 5,
          },
          col_5: {
            width: colWidth * 5 + "%",
            paddingRight: 5,
          },
          col_6: {
            width: colWidth * 6 + "%",
            paddingRight: 5,
          },
          col_7: {
            width: colWidth * 7 + "%",
            paddingRight: 5,
          },
          col_8: {
            width: colWidth * 8 + "%",
            paddingRight: 5,
          },
          col_9: {
            width: colWidth * 9 + "%",
            paddingRight: 5,
          },
          col_10: {
            width: colWidth * 10 + "%",
            paddingRight: 5,
          },
          col_11: {
            width: colWidth * 11 + "%",
            paddingRight: 5,
          },
          col_12: {
            width: colWidth * 12 + "%",
            paddingRight: 5,
          },
        }
      : sm
      ? {
          row: {
            flexDirection: "row",
            flexWrap: "wrap",
            marginRight: -6,
          },
          col_sm_1: {
            width: colWidth * 1 + "%",
            paddingRight: 6,
          },
          col_sm_2: {
            width: colWidth * 2 + "%",
            paddingRight: 6,
          },
          col_sm_3: {
            width: colWidth * 3 + "%",
            paddingRight: 6,
          },
          col_sm_4: {
            width: colWidth * 4 + "%",
            paddingRight: 6,
          },
          col_sm_5: {
            width: colWidth * 5 + "%",
            paddingRight: 6,
          },
          col_sm_6: {
            width: colWidth * 6 + "%",
            paddingRight: 6,
          },
          col_sm_7: {
            width: colWidth * 7 + "%",
            paddingRight: 6,
          },
          col_sm_8: {
            width: colWidth * 8 + "%",
            paddingRight: 6,
          },
          col_sm_9: {
            width: colWidth * 9 + "%",
            paddingRight: 6,
          },
          col_sm_10: {
            width: colWidth * 10 + "%",
            paddingRight: 6,
          },
          col_sm_11: {
            width: colWidth * 11 + "%",
            paddingRight: 6,
          },
          col_sm_12: {
            width: colWidth * 12 + "%",
            paddingRight: 6,
          },
        }
      : md
      ? {
          row: {
            flexDirection: "row",
            flexWrap: "wrap",
            marginRight: -7,
          },
          col_md_1: {
            width: colWidth * 1 + "%",
            paddingRight: 7,
          },
          col_md_2: {
            width: colWidth * 2 + "%",
            paddingRight: 7,
          },
          col_md_3: {
            width: colWidth * 3 + "%",
            paddingRight: 7,
          },
          col_md_4: {
            width: colWidth * 4 + "%",
            paddingRight: 7,
          },
          col_md_5: {
            width: colWidth * 5 + "%",
            paddingRight: 7,
          },
          col_md_6: {
            width: colWidth * 6 + "%",
            paddingRight: 7,
          },
          col_md_7: {
            width: colWidth * 7 + "%",
            paddingRight: 7,
          },
          col_md_8: {
            width: colWidth * 8 + "%",
            paddingRight: 7,
          },
          col_md_9: {
            width: colWidth * 9 + "%",
            paddingRight: 7,
          },
          col_md_10: {
            width: colWidth * 10 + "%",
            paddingRight: 7,
          },
          col_md_11: {
            width: colWidth * 11 + "%",
            paddingRight: 7,
          },
          col_md_12: {
            width: colWidth * 12 + "%",
            paddingRight: 7,
          },
        }
      : {
          row: {
            flexDirection: "row",
            flexWrap: "wrap",
            marginRight: -8,
          },
          col_lg_1: {
            width: colWidth * 1 + "%",
            paddingRight: 8,
          },
          col_lg_2: {
            width: colWidth * 2 + "%",
            paddingRight: 8,
          },
          col_lg_3: {
            width: colWidth * 3 + "%",
            paddingRight: 8,
          },
          col_lg_4: {
            width: colWidth * 4 + "%",
            paddingRight: 8,
          },
          col_lg_5: {
            width: colWidth * 5 + "%",
            paddingRight: 8,
          },
          col_lg_6: {
            width: colWidth * 6 + "%",
            paddingRight: 8,
          },
          col_lg_7: {
            width: colWidth * 7 + "%",
            paddingRight: 8,
          },
          col_lg_8: {
            width: colWidth * 8 + "%",
            paddingRight: 8,
          },
          col_lg_9: {
            width: colWidth * 9 + "%",
            paddingRight: 8,
          },
          col_lg_10: {
            width: colWidth * 10 + "%",
            paddingRight: 8,
          },
          col_lg_11: {
            width: colWidth * 11 + "%",
            paddingRight: 8,
          },
          col_lg_12: {
            width: colWidth * 12 + "%",
            paddingRight: 8,
          },
        }
  );
};

const useGridStyles = () => {
  const { width } = useWindowDimensions();
  const gridStyles = useMemo(() => generateStyles(width), [width]);

  return gridStyles;
};

interface IuseDevideResolution {
  currentScreenType: IScreenTypes;
  minWidth: number;
  maxWidth: number;
  width: number;
  height: number;
  isLandscapeMode: boolean;
}

export const useDeviceResolution = (): IuseDevideResolution => {
  const { width, height } = useWindowDimensions();
  const currentScreenType = useMemo(() => getScreenType(width), [width]);

  return {
    currentScreenType,
    minWidth: ScreenBounds[currentScreenType][0],
    maxWidth: ScreenBounds[currentScreenType][1] === -1 ? width : ScreenBounds[currentScreenType][1],
    width,
    height,
    isLandscapeMode: width > height,
  };
};

export default useGridStyles;
