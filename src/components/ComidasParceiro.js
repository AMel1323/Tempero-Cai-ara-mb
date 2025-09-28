import React, { useState } from "react";
import { Image } from "expo-image";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Menu() {
  // dados de exemplo
  const pratos = [
    {
      id: 1,
      img: require("../../assets/img/pratosfeitos1.png"),
      title: "Feijoada completa",
      desc: "A clássica combinação brasileira com feijão preto, carnes, arroz, couve, farofa, vinagrete, torresmo e laranja.",
      price: "R$ 25,00",
    },
    {
      id: 2,
      img: require("../../assets/img/pratosfeitos2.png"),
      title: "Feijoada completa",
      desc: "A clássica combinação brasileira com feijão preto, carnes, arroz, couve, farofa, vinagrete, torresmo e laranja.",
      price: "R$ 25,00",
    },
    {
      id: 3,
      img: require("../../assets/img/pratosfeitos3.png"),
      title: "Feijoada completa",
      desc: "A clássica combinação brasileira com feijão preto, carnes, arroz, couve, farofa, vinagrete, torresmo e laranja.",
      price: "R$ 25,00",
    },
  ];

  const bebidas = [
    {
      id: 4,
      img: require("../../assets/img/bebidas1.png"),
      title: "Feijoada completa",
      desc: "A clássica combinação brasileira com feijão preto, carnes, arroz, couve, farofa, vinagrete, torresmo e laranja.",
      price: "R$ 25,00",
    },
    {
      id: 5,
      img: require("../../assets/img/bebidas2.png"),
      title: "Feijoada completa",
      desc: "A clássica combinação brasileira com feijão preto, carnes, arroz, couve, farofa, vinagrete, torresmo e laranja.",
      price: "R$ 25,00",
    },
    {
      id: 6,
      img: require("../../assets/img/bebidas3.png"),
      title: "Feijoada completa",
      desc: "A clássica combinação brasileira com feijão preto, carnes, arroz, couve, farofa, vinagrete, torresmo e laranja.",
      price: "R$ 25,00",
    },
  ];

  const acais = [
    {
      id: 7,
      img: require("../../assets/img/acai1.png"),
      title: "Feijoada completa",
      desc: "A clássica combinação brasileira com feijão preto, carnes, arroz, couve, farofa, vinagrete, torresmo e laranja.",
      price: "R$ 25,00",
    },
    {
      id: 8,
      img: require("../../assets/img/acai2.png"),
      title: "Feijoada completa",
      desc: "A clássica combinação brasileira com feijão preto, carnes, arroz, couve, farofa, vinagrete, torresmo e laranja.",
      price: "R$ 25,00",
    },
    {
      id: 9,
      img: require("../../assets/img/acai3.png"),
      title: "Feijoada completa",
      desc: "A clássica combinação brasileira com feijão preto, carnes, arroz, couve, farofa, vinagrete, torresmo e laranja.",
      price: "R$ 25,00",
    },
  ];

  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((prev) => [...prev, item]);
    console.log("Adicionado ao carrinho:", item.title);
  };

  const renderSection = (title, data) => (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{title}</Text>
       <View style={styles.line} />
      {data.map((item) => (
        <View key={item.id} style={styles.card}>
          <Image source={item.img} style={styles.image} />
          <View style={styles.info}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.desc}>{item.desc}</Text>
            <Text style={styles.price}>{item.price}</Text>
          </View>
          <TouchableOpacity
            style={styles.addBtn}
            onPress={() => addToCart(item)}
          >
            <Ionicons name="add-circle-outline" size={28} color="#B8860B" />
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      {renderSection("PRATOS FEITOS", pratos)}
      {renderSection("BEBIDAS", bebidas)}
      {renderSection("AÇAÍ", acais)}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
    marginTop:40,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#B8860B",
    marginBottom: 10,
  },
  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 8,
    marginBottom: 12,
    padding: 8,
    elevation: 2,
    alignItems: "center",
  },
  line: {
    borderBottomColor: "black",
    borderBottomWidth: 1,    
    marginVertical: 10,     
    width: "35%",            
},
  image: {
    width: 70,
    height: 70,
    borderRadius: 8,
  },
  info: {
    flex: 1,
    marginHorizontal: 10,
  },
  title: {
    fontWeight: "bold",
    fontSize: 14,
  },
  desc: {
    fontSize: 12,
    color: "#555",
    marginVertical: 4,
  },
  price: {
    fontWeight: "bold",
    color: "green",
  },
  addBtn: {
    padding: 5,
  },
});
