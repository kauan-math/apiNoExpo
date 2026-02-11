import { router } from "expo-router";
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Inicial() {
  return (
    <ImageBackground
      source={require("../assets/gohan.gif")}
      style={s.container}
    >
      <View style={s.wrapInicial}>
        <Text style={s.title}>Dragon Ball API</Text>
      </View>
      <View style={s.wrapInicial}>
        <Image />
      </View>
      <View style={s.wrapInicial}>
        <TouchableOpacity
          style={s.btn}
          onPress={() => {
            router.push("/list");
          }}
        >
          <Text style={s.btnText}>Visitar personagens</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const s = StyleSheet.create({
  wrapInicial: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 20,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    alignSelf: "center",
    textShadowColor: "#181818",
    textShadowOffset: { width: 10, height: 10 },
    textShadowRadius: 10,
    color: "#ffd000",
  },
  img: {
    width: "80%",
    height: "60%",
    top: -10,
  },
  btn: {
    backgroundColor: "#ff990000",
    borderColor: "#090909",
    borderRadius: 100,
    paddingHorizontal: 30,
    paddingVertical: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 6,
      height: 10,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,
  },
  btnText: {
    color: "#ffffff",
    fontSize: 22,
  },
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  link: {},
});
