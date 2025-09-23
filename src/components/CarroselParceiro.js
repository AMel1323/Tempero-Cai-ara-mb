import React, { useRef } from "react";
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import { Image } from "expo-image";

const produtos = [
  { id: 1, nome: "Açaí no copo - 400ml", preco: "R$ 30,00", img: require('../../assets/img/porcoes.png') },
  { id: 2, nome: "Açaí no copo - 400ml", preco: "R$ 25,00", img: require('../../assets/img/porcoes.png') },
  { id: 3, nome: "Açaí no copo - 400ml", preco: "R$ 25,00", img: require('../../assets/img/porcoes.png') },
  { id: 4, nome: "Açaí no copo - 500ml", preco: "R$ 35,00", img: require('../../assets/img/porcoes.png') },
  { id: 5, nome: "Açaí com granola - 400ml", preco: "R$ 28,00", img: require('../../assets/img/porcoes.png') },
];

const Carrossel = () => {
  const scrollRef = useRef(null);
  const { width } = Dimensions.get("window");

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        x: direction === "left" ? 0 : width,
        animated: true,
      });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Destaques</Text>
      
      <View style={styles.carouselContainer}>
        <TouchableOpacity style={styles.arrow} onPress={() => scroll("left")}>
          <Text style={styles.arrowText}>◀</Text>
        </TouchableOpacity>

        <ScrollView
          ref={scrollRef}
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.scrollView}
        >
          {produtos.map((produto) => (
            <View key={produto.id} style={styles.card}>
              <Image source={produto.img} style={styles.img} />
              <Text style={styles.nome}>{produto.nome}</Text>
              <Text style={styles.preco}>{produto.preco}</Text>
            </View>
          ))}
        </ScrollView>

        <TouchableOpacity style={styles.arrow} onPress={() => scroll("right")}>
          <Text style={styles.arrowText}>▶</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 10 },
  titulo: { fontSize: 18, fontWeight: "bold", marginBottom: 10 },
  carouselContainer: { flexDirection: "row", alignItems: "center" },
  scrollView: { flexGrow: 0 },
  card: {
    width: 150,
    marginHorizontal: 5,
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 5,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 5,
    elevation: 3,
  },
  img: { width: 140, height: 100, borderRadius: 8 },
  nome: { marginTop: 5, textAlign: "center" },
  preco: { marginTop: 2, fontWeight: "bold", color: "green" },
  arrow: { padding: 5 },
  arrowText: { fontSize: 24 },
});

export default Carrossel;
