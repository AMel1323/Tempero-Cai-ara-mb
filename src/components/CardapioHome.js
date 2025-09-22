import { Image } from "expo-image";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from "react-native";

const screenWidth = Dimensions.get('window').width;

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
    


 <View style={styles.titleWrapper}>
  <View style={styles.linha} />
  <Text style={styles.title}>CARDÁPIO</Text>
  <View style={styles.linha} />
</View>


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

  titleWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: screenWidth * 0.95,
    marginVertical: 20,
    marginBottom: 40,
  },

  linha: {
    flex: 1,
    height: 1,
    backgroundColor: '#000000ff',
    marginHorizontal: 7,
  },

  title: {
    fontSize: screenWidth * 0.05, 
    fontWeight: 'bold',
    fontStyle: 'italic',
    color: '#3B7798',
    textShadowColor: '#528aa8',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
    letterSpacing: screenWidth * 0.02, 
    marginHorizontal: 10,
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
    marginHorizontal: 17,
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
