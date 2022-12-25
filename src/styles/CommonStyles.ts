import { StyleSheet, PixelRatio } from "react-native";

export const CommonStyles = StyleSheet.create({
  flex: { flex: 1 },
  flexGrow: { flexGrow: 1 },

  centeredContent: { justifyContent: "center", alignItems: "center" },

  verticalAlignFlex: { justifyContent: "center" },

  horizontalAlignFlex: { alignItems: "center" },

  debug: { borderWidth: 1, borderColor: "red" },

  row: { flexDirection: "row" },

  fullWidth: { width: "100%" },

  spacedOutRow: { justifyContent: "space-between" },

  overflowHidden: { overflow: "hidden" },
  flexWrap: { flexWrap: "wrap" },
  underlineText: { textDecorationLine: "underline" },

  margin2: { margin: PixelRatio.roundToNearestPixel(2) },
  marginVertical2: { marginVertical: PixelRatio.roundToNearestPixel(2) },
  marginHorizontal2: { marginHorizontal: PixelRatio.roundToNearestPixel(2) },

  margin3: { margin: PixelRatio.roundToNearestPixel(3) },
  marginVertical3: { marginVertical: PixelRatio.roundToNearestPixel(3) },
  marginHorizontal3: { marginHorizontal: PixelRatio.roundToNearestPixel(3) },

  margin5: { margin: PixelRatio.roundToNearestPixel(5) },
  marginVertical5: { marginVertical: PixelRatio.roundToNearestPixel(5) },
  marginHorizontal5: { marginHorizontal: PixelRatio.roundToNearestPixel(5) },

  margin10: { margin: PixelRatio.roundToNearestPixel(10) },
  marginVertical10: { marginVertical: PixelRatio.roundToNearestPixel(10) },
  marginHorizontal10: { marginHorizontal: PixelRatio.roundToNearestPixel(10) },

  margin15: { margin: PixelRatio.roundToNearestPixel(15) },
  marginVertical15: { marginVertical: PixelRatio.roundToNearestPixel(15) },
  marginHorizontal15: { marginHorizontal: PixelRatio.roundToNearestPixel(15) },

  margin20: { margin: PixelRatio.roundToNearestPixel(20) },
  marginVertical20: { marginVertical: PixelRatio.roundToNearestPixel(20) },
  marginHorizontal20: { marginHorizontal: PixelRatio.roundToNearestPixel(20) },

  padding2: { padding: PixelRatio.roundToNearestPixel(2) },
  paddingVertical2: { paddingVertical: PixelRatio.roundToNearestPixel(2) },
  paddingHorizontal2: { paddingHorizontal: PixelRatio.roundToNearestPixel(2) },

  padding3: { padding: PixelRatio.roundToNearestPixel(3) },
  paddingVertical3: { paddingVertical: PixelRatio.roundToNearestPixel(3) },
  paddingHorizontal3: { paddingHorizontal: PixelRatio.roundToNearestPixel(3) },

  padding5: { padding: PixelRatio.roundToNearestPixel(5) },
  paddingVertical5: { paddingVertical: PixelRatio.roundToNearestPixel(5) },
  paddingHorizontal5: { paddingHorizontal: PixelRatio.roundToNearestPixel(5) },

  padding10: { padding: PixelRatio.roundToNearestPixel(10) },
  paddingVertical10: { paddingVertical: PixelRatio.roundToNearestPixel(10) },
  paddingHorizontal10: {
    paddingHorizontal: PixelRatio.roundToNearestPixel(10),
  },

  padding15: { padding: PixelRatio.roundToNearestPixel(15) },
  paddingVertical15: { paddingVertical: PixelRatio.roundToNearestPixel(15) },
  paddingHorizontal15: {
    paddingHorizontal: PixelRatio.roundToNearestPixel(15),
  },

  padding20: { padding: PixelRatio.roundToNearestPixel(20) },
  paddingVertical20: { paddingVertical: PixelRatio.roundToNearestPixel(20) },
  paddingHorizontal20: {
    paddingHorizontal: PixelRatio.roundToNearestPixel(20),
  },
});
