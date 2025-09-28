import React, { useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { Image } from "expo-image";
import PorcaoImg from "../../assets/img/porcoes.png";

import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export default function Carrossel() {
  const produtos = [
    { id: 1, nome: "Açaí no copo - 400ml", preco: "R$ 10,00", img: PorcaoImg },
    { id: 2, nome: "Açaí no copo - 400ml", preco: "R$ 20,00", img: PorcaoImg },
    { id: 3, nome: "Açaí no copo - 400ml", preco: "R$ 30,00", img: PorcaoImg },
    { id: 4, nome: "Açaí no copo - 500ml", preco: "R$ 40,00", img: PorcaoImg },
    { id: 5, nome: "Açaí granola - 400ml", preco: "R$ 50,00", img: PorcaoImg },
  ];

  const scrollRef = useRef(null);
  const [scrollX, setScrollX] = useState(0);
  const cardWidth = 180; // largura do card + margem
  const screenWidth = Dimensions.get("window").width;

  const scroll = (direction) => {
    const maxScroll = cardWidth * produtos.length - screenWidth + 20;
    let newX = direction === "left"
      ? Math.max(scrollX - cardWidth, 0)
      : Math.min(scrollX + cardWidth, maxScroll);

    setScrollX(newX);
    scrollRef.current?.scrollTo({ x: newX, animated: true });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>DESTAQUES</Text>

      <View style={styles.carouselWrapper}>
        <TouchableOpacity style={styles.arrow} onPress={() => scroll("left")}>
          <MaterialIcons name="chevron-left" size={30} color="#3B7798" />
        </TouchableOpacity>

        <ScrollView
          ref={scrollRef}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
          style={styles.scrollView}
        >
          {produtos.map((p) => (
            <View key={p.id} style={styles.card}>
              <Image source={p.img} style={styles.img} />
              <Text style={styles.nome}>{p.nome}</Text>
              <Text style={styles.preco}>{p.preco}</Text>
            </View>
          ))}
        </ScrollView>

        <TouchableOpacity style={styles.arrow} onPress={() => scroll("right")}>
          <MaterialIcons name="chevron-right" size={30} color="#3B7798" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 8,
    alignItems: "center",
    backgroundColor: "#FBF6F6",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 10, 
  },
  title: {
    color: "black",
    marginTop:5,
    textAlign: "center",
    marginBottom: 22,
    fontSize: 18,
    fontWeight: "700",
  },
  carouselWrapper: {
    flexDirection: "row",
    alignItems: "center",
    maxWidth: 400,
    width: "100%",
    marginBottom:2,
    margin:5,
    marginBottom: 20,
  },
  scrollView: {
    flexGrow: 0,
  },
  scrollContent: {
    alignItems: "center",
    paddingHorizontal: 5,
  },
  card: {
    width: 160,
    borderRadius: 20,
   
   
    marginHorizontal: 10,
    padding: 10,
   
    alignItems: "center",
  },
  img: {
    width: 120,
    height: 80,
    resizeMode: "cover",
    borderRadius: 10,
    marginBottom: 8,
  },
  nome: {
    fontSize: 14,
    color: "#333",
    textAlign: "center",
    marginBottom: 4,
  },
  preco: {
    fontSize: 14,
    fontWeight: "bold",
    color: "green",
  },
  arrow: {
    padding: 5,
  },
});
