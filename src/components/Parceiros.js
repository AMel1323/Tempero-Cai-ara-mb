import React from "react";
import { Image } from "expo-image";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Dimensions } from "react-native";
import ParceiroC from "../../assets/img/quiosque1.png";
import ParceiroM from "../../assets/img/quiosque2.png";
import ParceiroA from "../../assets/img/quiosque3.png";
import ParceiroI from "../../assets/img/quiosque4.png";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useRouter } from 'expo-router';

export default function Parceiros() {

  const router = useRouter()

  const parceiros = [
    { id: 1, nome: "Quiosque Canoa", tipo: "lanches", img: ParceiroC },
    { id: 2, nome: "Quiosque Mar a Vista", tipo: "lanches", img: ParceiroM },
    { id: 3, nome: "Quiosque do Adriano", tipo: "lanches", img: ParceiroA },
    { id: 4, nome: "Quiosque Intermares", tipo: "lanches", img: ParceiroI },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>CONHEÇA OS NOSSOS PARCEIROS</Text>

      <View style={styles.carouselContainer}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          {parceiros.map((p) => (
            <TouchableOpacity key={p.id} onPress={() => router.navigate('/parceiros')}>
              <View style={styles.parceiro}>

                 <View style={styles.verificado}>
                  <MaterialIcons name="verified" size={15} color="#2e8ec9" />
                </View>
               
                <View style={styles.parceirotext_img}>
                  <Image source={p.img} style={styles.img_quiosque} />
                  
                  <Text style={styles.parceiroNome}>
                    {p.nome}{" "}
                    
                    <Text style={styles.span_parceiros}>{p.tipo}</Text>
                  </Text>
                  
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
    marginTop: 60,
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
    fontSize: 18,
    letterSpacing: 0.5,
    fontWeight: 500
  },
  carouselContainer: {
    maxWidth: 400,       // limite de largura total do carrossel
    width: "100%",       // ocupa 100% da tela até 400px
  },
  scrollContent: {
    alignItems: "center",
    paddingHorizontal: 5,
  },
  parceiro: {
    width: 180,           // largura fixa do card
    borderRadius: 25,
    borderWidth: 2,
    borderColor: "#8F2929",
    marginHorizontal: 16,
    padding: 10,
    backgroundColor: "#fff",
    
  },
  verificado: {
    marginBottom: 2,
    alignSelf: 'flex-start',
    alignItems: "center",

  },
  parceirotext_img: {
    flexDirection: "row",
    alignItems: "center",
  },
  img_quiosque: {
    width: 60,
    height: 60,
    resizeMode: "contain",
    marginRight: 10,
  },
  parceiroNome: {
    fontSize: 16,
    color: "#953636",
    flexShrink: 1,
    fontWeight: 600
  },
  span_parceiros: {
    fontSize: 12,
  },
});
