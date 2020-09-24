import { StyleSheet } from "react-native";

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    marginTop: 20,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    display: "flex",
    justifyContent: "flex-start",
  },
  inputWrapper: {
    // width: "100%",
    marginTop: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  inputImageBox: {
    width: 50,
    height: 50,
    backgroundColor: "#f9bf0f",
    borderBottomRightRadius: 3,
    borderTopRightRadius: 3,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  inputImage: {
    width: 25,
    height: 25,
  },
  input: {
    width: "75%",
    height: 50,
    borderColor: "#8D9097",
    borderWidth: 1,
    borderRightWidth: 0,
    borderTopLeftRadius: 3,
    padding: 15,
    fontSize: 16,
    color: "#868992",
  },
  btn: {
    width: "10%",
  },
  currBtn: {
    width: "80%",
    height: 40,
    backgroundColor: "#f9bf0f",
    flex: 1,
    margin: 10,
    borderRadius: 3,
    alignItems: "center",
    justifyContent: "center",
  },
  currBtnText: {
    color: "#FFF",
  },
  sunText: {
    color: "gray",
    fontSize: 18,
  },
  sunRiseText: {
    fontWeight: "bold",
    color: "#CFA22B",
  },
  sunSetText: {
    fontWeight: "bold",
    color: "#CE2C27",
  },
  text: {
    fontSize: 18,
  },
});
