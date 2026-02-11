import { LinearGradient } from "expo-linear-gradient";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export default function Modal() {
  const local = useLocalSearchParams();
  const id = local.id;

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchCharacter = async () => {
    try {
      const response = await fetch(
        `https://dragonball-api.com/api/characters/${id}`,
      );
      const responseData = await response.json();
      setData(responseData);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) {
      fetchCharacter();
    }
  }, [id]);

  if (loading) {
    return (
      <View style={s.wrapLoading}>
        <Image
          source={{ uri: data?.image }}
          resizeMode="cover"
          style={s.image}
        ></Image>
      </View>
    );
  }

  return (
    <View style={s.content}>
      <View style={s.container}>
        <LinearGradient
          colors={["#dee3ee", "#adb0bb", "#85878d"]}
          style={s.background}
        >
          <Text style={s.dados}>{data?.name}</Text>
          <Text style={s.dados}>{data?.race}</Text>
          <Text style={s.dados}>{data?.maxKi}</Text>
          <Text style={s.dados}>{data?.gender}</Text>
          <Text style={s.dados}>{data?.affiliation}</Text>
          <Image source={{ uri: data?.image }} style={s.image} />
        </LinearGradient>
      </View>
    </View>
  );
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: 300,
    borderRadius: 20,
    backgroundColor: "#4b4b4b41",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
  },
  image: {
    width: 220,
    height: 500,
  },
  wrapLoading: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: 200,
    height: 200,
  },
  loading: {
    width: 100,
    height: 100,
  },
  content: {
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    borderRadius: 20,
    borderWidth: 2,
  },
  dados: {
    width: 90,
    height: 30,
  },
});
