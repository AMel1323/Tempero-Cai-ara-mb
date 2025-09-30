import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import Topo from "../../components/Topo";


const screenWidth = Dimensions.get("window").width;

// Dados de exemplo
const quiosques = [
  {
    id: 1,
    nome: "Quiosque Intermares",
    logo: require("../../../assets/img/acai.png"),
    avaliacao: 4.5,
    tempo: "50-60 MIN",
    entrega: "Grátis",
    produtos: [
      { id: 1, img: require("../../../assets/img/acai.png"), title: "Açaí no copo - 400ml", price: "R$ 25,00" },
      { id: 2, img: require("../../../assets/img/acai.png"), title: "Açaí no copo - 400ml", price: "R$ 25,00" },
      { id: 3, img: require("../../../assets/img/acai.png"), title: "Açaí no copo - 400ml", price: "R$ 25,00" },
      { id: 4, img: require("../../../assets/img/acai.png"), title: "Açaí no copo - 400ml", price: "R$ 25,00" },
    ],
  },
  {
    id: 2,
    nome: "Quiosque do Sol",
    logo: require("../../../assets/img/acai.png"),
    avaliacao: 4.5,
    tempo: "50-60 MIN",
    entrega: "Grátis",
    produtos: [
      { id: 1, img: require("../../../assets/img/acai.png"), title: "Açaí no copo - 400ml", price: "R$ 25,00" },
      { id: 2, img: require("../../../assets/img/acai.png"), title: "Açaí no copo - 400ml", price: "R$ 25,00" },
      { id: 3, img: require("../../../assets/img/acai.png"), title: "Açaí no copo - 400ml", price: "R$ 25,00" },
      { id: 4, img: require("../../../assets/img/acai.png"), title: "Açaí no copo - 400ml", price: "R$ 25,00" },
    ],
  },
];

export default function CamaraoPage() {
  return (
    <ScrollView style={styles.container}>
      {/* Banner */}
      <View style={styles.banner}>
        <Image
          source={require("../../../assets/img/bannercamarao.png")}
          style={styles.bannerImage}
        />
        <Text style={styles.bannerText}>Camarão</Text>
          <View style={styles.line} />
      </View>

      {/* Lista de Quiosques */}
      {quiosques.map((q) => (
        <CardQuiosque key={q.id} data={q} />
      ))}

        <View style={styles.margin}>

          </View>

    </ScrollView>
  );
}

function CardQuiosque({ data }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const getVisibleItems = () => {
    const visible = [];
    const itemsToShow = Math.min(4, data.produtos.length);
    for (let i = 0; i < itemsToShow; i++) {
      visible.push(data.produtos[(currentIndex + i) % data.produtos.length]);
    }
    return visible;
  };



  return (
    <View style={styles.quiosque}>
      <Topo />
      {/* Header Quiosque */}
      <View style={styles.header}>
        <Image source={data.logo} style={styles.logo} />
        <View style={styles.info}>
          <Text style={styles.nome}>{data.nome}</Text>
          <Text style={styles.detalhes}>
            ⭐ {data.avaliacao} • {data.tempo} • {data.entrega}
          </Text>
        </View>
       
      </View>

      {/* Carrossel */}
      <View style={styles.carousel}>
       

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.carouselWrapper}
        >
          {getVisibleItems().map((item) => (
            <TouchableOpacity
              key={item.id}
              style={styles.carouselItem}
              onPress={() => console.log("Abrir modal de:", item.title)}
            >
              <Image source={item.img} style={styles.produtoImg} />
              <Text style={styles.produtoTitulo}>{item.title}</Text>
              <Text style={styles.produtoPreco}>{item.price}</Text>
            </TouchableOpacity>
          ))}


           

        </ScrollView>

      </View>

         
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  banner: {
    position: "relative",
    width: "100%",
    height: 100,
    marginBottom: 20,
    marginTop:125,
  },
  bannerImage: {
    width: "100%",
    height: "100%",
  },
  bannerText: {
    position: "absolute",
    bottom: 33,
    left: "38%",
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    textShadowColor: "rgba(0,0,0,0.9)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4,
  },

     line: {
      position: "absolute",
    borderBottomColor: "white",
    left: "37%",
    borderBottomWidth: 1,    
   bottom: 30,
    width: 90,            
},

  quiosque: {
    marginBottom: 30,
    
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    paddingHorizontal: 30,
  },
  logo: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  info: {
    flex: 1,
  },
  nome: {
    fontSize: 16,
    fontWeight: "600",
  },
  detalhes: {
    fontSize: 12,
    color: "#666",
  },
  carousel: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 30,
    
  },
  carouselWrapper: {
    flexDirection: "row",
  },
  carouselItem: {
    width: screenWidth * 0.3,
    marginHorizontal: 5,
    alignItems: "center",
  },
  produtoImg: {
    width: "100%",
    height: 80,
    borderRadius: 8,
    marginBottom: 6,
  },
  produtoTitulo: {
    fontSize: 12,
    textAlign: "center",
  },
  produtoPreco: {
    fontSize: 12,
    fontWeight: "bold",
    color: "green",
  },

  margin: {
   marginTop: 90,
  },
});
