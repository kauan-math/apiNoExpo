import { Image } from "expo-image";
import { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import Personagem from "./personagem";

export default function List() {
  const [personagens, setPersonagens] = useState([] as any);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  const fechtCharacters = async () => {
    try {
      const response = await fetch(
        "https://dragonball-api.com/api/characters?page=" + page,
      );
      const data = await response.json();
      setPersonagens((prev: any) => [...(prev || []), ...data.items]);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (page > 0 && page < 7) {
      fechtCharacters();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  return (
    <View style={s.screen}>
      <Text style={s.titulo}>Lista de personagens</Text>
      {loading ? (
        <View style={s.wrapImage}>
          <Image style={s.loading} source={require("../assets/loading2.gif")} />
        </View>
      ) : (
        <FlatList
          data={personagens}
          renderItem={({ item }) => {
            return <Personagem item={item} />;
          }}
          onEndReached={loading ? null : () => setPage((prev) => prev + 1)}
        />
      )}
    </View>
  );
}

const s = StyleSheet.create({
  titulo: {
    alignSelf: "center",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 32,
    textShadowColor: "#181818",
    textShadowOffset: { width: 10, height: 10 },
    textShadowRadius: 10,
    color: "#ffd000",
  },

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

  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e8ecec",
  },

  wrapImage: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: 200,
    height: 200,
  },

  imageContainer: {
    width: 150,
    height: 330,
  },

  input: {
    borderWidth: 1,
    borderRadius: 5,
    width: 350,
    marginVertical: 20,
    padding: 5,
  },
});
