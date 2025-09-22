import { Image } from "expo-image";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from "react-native";

export default function CategoriaCarrossel() {
  const categories = [
    { id: "1", name: "Pratos Feitos", image: require("../../assets/img/pratos_feitos.png") },
    { id: "2", name: "Porções", image: require("../../assets/img/porcoes.png") },
    { id: "3", name: "Camarão", image: require("../../assets/img/camarao.png") },
    { id: "4", name: "Bebidas", image: require("../../assets/img/bebidas.png") },
    { id: "5", name: "Sorvetes", image: require("../../assets/img/sorvetes.png") },
    { id: "6", name: "Peixes", image: require("../../assets/img/peixes.png") },
    { id: "7", name: "Açaí", image: require("../../assets/img/acai.png") },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>CATEGORIAS</Text>

      <View style={styles.carouselContainer}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          {categories.map((item) => (
            <TouchableOpacity key={item.id} onPress={() => console.log(item.name)}>
              <View style={styles.card}>
                <View style={styles.cardContent}>
                  <Image
                    source={item.image}
                    style={styles.image}
                    contentFit="cover"
                    transition={300}
                  />
                  
                  <Text style={styles.text}>{item.name}</Text>
                  <View style={styles.line} />
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    alignItems: "center",
  },
  title: {
    color: "#3B7798",
    fontStyle: "italic",
    textShadowColor: "#528aa8",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
    textAlign: "center",
    marginBottom: 30,
    fontSize: 24,
  },
  carouselContainer: {
    maxWidth: 400,
    width: "100%",
  },
  scrollContent: {
    alignItems: "center",
    paddingHorizontal: 5,
  },
  card: {
    width: 120,
    height: "auto",
    borderRadius: 25,
    borderWidth: 2,
    borderColor: "#8F2929",
    marginHorizontal: 16,
    padding: 10,
    backgroundColor: "#5c1212",
  },
  cardContent: {
    alignItems: "center",
  justifyContent: "center", 
  },
  image: {
    width: 70,
    height: 70,
    resizeMode: "contain",
    marginBottom:10,
  },

   line: {
    borderBottomColor: "white",
    borderBottomWidth: 1,    
    marginVertical: 10,     
    width: 80,            
},

  text: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 12,
    flexShrink: 1,
  },
});
