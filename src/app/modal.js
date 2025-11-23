import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function PratoModal() {
  const router = useRouter();
  const { id, quiosqueId } = useLocalSearchParams();
  const [prato, setPrato] = useState(null);
  const [quiosque, setQuiosque] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const resPrato = await fetch(`http://localhost:3333/api/pratos/${id}`);
        const pratoData = await resPrato.json();

        const resQuiosque = await fetch(
          `http://localhost:3333/api/estabelecimentos/${quiosqueId}`
        );
        const quiosqueData = await resQuiosque.json();

        setPrato(pratoData);
        setQuiosque(quiosqueData);
      } catch (err) {
        console.error("Erro ao carregar dados:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [id, quiosqueId]);

  if (loading)
    return (
      <Text style={{ textAlign: "center", marginTop: 20 }}>Carregando...</Text>
    );
  if (!prato || !quiosque)
    return (
      <Text style={{ textAlign: "center", marginTop: 20 }}>
        Dados não encontrados.
      </Text>
    );

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image source={{ uri: prato.imagem }} style={styles.image} />

        <View style={styles.content}>
          <Text style={styles.titlespace}>
            <Ionicons name="storefront-outline" size={22} color="#8F2929" />{" "}
            {quiosque.nome}
          </Text>

          <Text style={styles.title}>{prato.nome}</Text>
          <Text style={styles.description}>
            {prato.descricao || "Sem descrição disponível."}
          </Text>
          <Text style={styles.price}>R$ {prato.preco}</Text>

          <View style={styles.infoBox}>
            <Text style={styles.infoText}>
              {quiosque.distancia || "1 km"} • {quiosque.tempo || "40-50 min"} •{" "}
              {quiosque.entrega || "Grátis"}
            </Text>
            <Text style={styles.rating}>★ {quiosque.avaliacao || "4.5"}</Text>
          </View>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>Adicionar ao Carrinho</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.closeBtn} onPress={() => router.back()}>
        <Text style={styles.closeText}>×</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 260,
    borderBottomLeftRadius: 18,
    borderBottomRightRadius: 18,
  },
  content: { padding: 20 },
  titlespace: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 8,
    color: "#8F2929",
  },
  title: { 
    fontSize: 18, fontWeight: "600", color: "#3B7798" 
  },
  description: { 
    marginTop: 5, fontSize: 15, color: "#666", lineHeight: 20 
  },
  price: { 
    marginTop: 10, fontSize: 22, fontWeight: "700", color: "#008000" 
  },
  infoBox: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  infoText: { 
    color: "#555" 
  },
  rating: { 
    color: "#f4a000", fontWeight: "700" 
  },
  footer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "#fff",
    padding: 15,
    borderTopWidth: 1,
    borderColor: "#eee",
    alignItems: "center",
    justifyContent: "center",
  },
  addButton: {
    backgroundColor: "#8F2929",
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 10,
  },
  addButtonText: { 
    color: "#fff", fontSize: 16, fontWeight: "700"
   },
  closeBtn: {
    position: "absolute",
    top: 30,
    right: 20,
    backgroundColor: "#ffffffcc",
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
  },
  closeText: { 
    fontSize: 25, fontWeight: "700", color: "#8F2929" 
  },
});
