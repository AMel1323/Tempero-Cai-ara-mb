import React, { useEffect } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Topo from "../../components/Topo";
import { useCarrinhoStore } from "../../stores/useCarrinhoStore";
import { useAuthStore } from "../../stores/useAuthStore";
import { useRouter } from "expo-router";

export default function Carrinho() {
  const router = useRouter();
  const { itens, carregarCarrinho, removerItem, atualizarQuantidade, cartId, limparCarrinho } = useCarrinhoStore();
  const { token } = useAuthStore();

  useEffect(() => {
    carregarCarrinho();
  }, []);

  const subtotal = itens.reduce((acc, item) => acc + item.preco * item.quantidade, 0);

const finalizarPedido = async () => {
  if (!token || !cartId) {
    Alert.alert("Erro", "Você precisa estar logada e ter um carrinho válido.");
    return;
  }

  try {
    const response = await fetch(`http://localhost:3333/api/orders/from-cart/${cartId}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Erro ao criar pedido");
    }

    Alert.alert("Sucesso", "Pedido criado com sucesso!");
    limparCarrinho();
    router.replace("/pedido"); 
  } catch (err) {
    Alert.alert("Erro", err.message);
  }
};

  return (
    <ScrollView style={styles.tela}>
      <View style={styles.tela}>
        <Topo />
        <View style={styles.container}>
          <Text style={styles.titulo}>CARRINHO</Text>

          {itens.length > 0 ? (
            itens.map((item) => (
              <View key={item.id} style={styles.card}>
                <Image source={{ uri: item.imagem }} style={styles.imagem} />
                <View style={styles.info}>
                  <Text style={styles.nome}>{item.nome}</Text>
                  <Text style={styles.preco}>R$ {item.preco.toFixed(2)}</Text>

                  <View style={styles.acoes}>
                    <TouchableOpacity onPress={() => removerItem(item.id)} style={styles.botaoIcone}>
                      <Ionicons name="trash-outline" size={18} color="#fff" />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => atualizarQuantidade(item.id, item.quantidade - 1)} style={styles.botaoQtd}>
                      <Text style={styles.textoQtd}>-</Text>
                    </TouchableOpacity>

                    <Text style={styles.qtd}>{item.quantidade}</Text>

                    <TouchableOpacity onPress={() => atualizarQuantidade(item.id, item.quantidade + 1)} style={styles.botaoQtd}>
                      <Text style={styles.textoQtd}>+</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            ))
          ) : (
            <Text style={{ textAlign: "center", marginTop: 40, color: "#777" }}>Carrinho vazio</Text>
          )}

          <View style={styles.subtotalContainer}>
            <Text style={styles.subtotalLabel}>Subtotal</Text>
            <Text style={styles.subtotalValor}>R$ {subtotal.toFixed(2)}</Text>
          </View>

          {/* 👉 Botão de finalizar pedido */}
          <TouchableOpacity
            style={styles.botaoFinalizar}
            disabled={itens.length === 0}
            onPress={finalizarPedido}
          >
            <Text style={styles.textoFinalizar}>Finalizar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  tela: {
    flex: 1,
    backgroundColor: "#F5F0EF",
  },
  container: {
    padding: 16,
    marginTop: 150,
  },
  titulo: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#3C6889",
    marginBottom: 16,
  },
  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    elevation: 3,
    marginBottom: 20,
  },
  imagem: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 12,
  },
  info: {
    flex: 1,
    justifyContent: "space-between",
  },
  nome: {
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 4,
  },
  preco: {
    fontSize: 14,
    fontWeight: "bold",
    color: "green",
    marginBottom: 8,
  },
  acoes: {
    flexDirection: "row",
    alignItems: "center",
  },
  botaoIcone: {
    backgroundColor: "#3C6889",
    borderRadius: 50,
    padding: 6,
    marginRight: 8,
  },
  botaoQtd: {
    backgroundColor: "#3C6889",
    borderRadius: 50,
    paddingHorizontal: 10,
    paddingVertical: 2,
  },
  textoQtd: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  qtd: {
    marginHorizontal: 10,
    fontSize: 16,
    fontWeight: "bold",
  },
  subtotalContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderTopWidth: 1,
    borderColor: "#ccc",
    paddingVertical: 12,
    marginTop: 10,
  },
  subtotalLabel: {
    fontSize: 16,
    fontWeight: "600",
    color: "#B49721",
  },
  subtotalValor: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#8B0000",
  },
  botaoFinalizar: {
    backgroundColor: "#3C6889",
    borderRadius: 10,
    paddingVertical: 12,
    alignItems: "center",
    marginTop: 10,
    marginBottom: 95,
  },
  textoFinalizar: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
