import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  flagButton: {
    padding: 3,
    alignItems: "stretch",
    justifyContent: "center",
  },
});

export const modalStyles = StyleSheet.create({
  listItem: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc8",
  },
  flastListStyle: {
    margin: 10,
    alignSelf: "center",
    backgroundColor: "#FFFFFF99",
  },
});
