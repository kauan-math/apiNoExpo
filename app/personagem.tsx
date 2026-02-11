import { Image } from "expo-image";
import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Personagem({ item }) {
  return (
    <>
      <Link href={`/modal/${item.id}`} style={s.link}>
        <View style={s.wrap2}>
          <View style={s.content}>
            <Text style={s.name}>{item.name}</Text>
          </View>
          <View style={s.imageContainer}>
            <Image
              source={{ uri: item.image }}
              resizeMode="cover"
              style={s.image}
            ></Image>
          </View>
        </View>
      </Link>
    </>
  );
}

const s = StyleSheet.create({
  wrap2: {
    alignItems: "center",
    justifyContent: "center",
    padding: 100,
    top: 20,
    margin: 10,
    borderRadius: 20,
    borderWidth: 2,
    backgroundColor: "#bdbdbd3d",
  },
  name: {
    borderWidth: 1,
    borderRadius: 10,
    zIndex: 500,
    top: -20,
    padding: 5,
    backgroundColor: "#bdbdbd7e",
  },

  image: {
    flex: 1,
    width: 150,
    height: 330,
  },

  content: {},

  loading: {
    width: 100,
    height: 100,
  },
  imageContainer: {
    width: 150,
    height: 330,
  },
  link: {},
});
