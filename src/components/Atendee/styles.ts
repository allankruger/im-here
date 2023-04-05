import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 16,
  },
  name: {
    flex: 1,
    height: 56,
    fontSize: 16,
    color: "#fff",
    backgroundColor: "#1f1e25",
    borderRadius: 5,
    padding: 16,
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: "#e23c44",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 8,
  },
  buttonText: {
    color: "#fff",
    fontSize: 24,
  },
});
