import { Image } from "expo-image";
import { View, Text, StyleSheet, ScrollView, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const CARD_WIDTH = width / 3;
const CARD_HEIGHT = 130;
const CARD_MARGIN = 12;

const categories = [
  { id: "1", name: "Pratos Feitos", image: require("../../assets/img/pratos_feitos.png") },
  { id: "2", name: "Porções", image: require("../../assets/img/porcoes.png") },
  { id: "3", name: "Camarão", image: require("../../assets/img/camarao.png") },
  { id: "4", name: "Bebidas", image: require("../../assets/img/bebidas.png") },
  { id: "5", name: "Sorvetes", image: require("../../assets/img/sorvetes.png") },
  { id: "6", name: "Peixes", image: require("../../assets/img/peixes.png") },
  { id: "7", name: "Açaí", image: require("../../assets/img/acai.png") },
];

export default function CategoriaCarrossel() {
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: CARD_MARGIN }}
      >
        {categories.map((item) => (
          <View key={item.id} style={styles.card}>
            <Image
              source={item.image}
              style={styles.image}
              contentFit="cover"
              transition={300}
            />
            <Text style={styles.text}>{item.name}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  card: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    marginHorizontal: CARD_MARGIN,
    backgroundColor: "#5c1212",
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    padding: 12,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 12,
    marginBottom: 10,
  },
  text: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 14,
    textAlign: "center",
  },
});

















