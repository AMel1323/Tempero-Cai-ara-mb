import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Topo from "../../components/Topo";

export default function Carrinho() {
  const [quantidade, setQuantidade] = useState(1);

  const precoUnitario = 30.0;
  const subtotal = precoUnitario * quantidade;

  const aumentar = () => setQuantidade(quantidade + 1);
  const diminuir = () => {
    if (quantidade > 1) setQuantidade(quantidade - 1);
  };

  const removerItem = () => {
    console.log("Item removido do carrinho");
    setQuantidade(0);
  };

  const finalizarPedido = () => {
    console.log("Pedido enviado:", {
      produto: "Açaí no copo - 400ml",
      quantidade,
      subtotal,
    });
  };

  return (
    <View style={styles.tela}>
      <Topo />
      <View style={styles.container}>
        <Text style={styles.titulo}>CARRINHO</Text>

        {quantidade > 0 ? (
          <View style={styles.card}>
            {/* Imagem e infos */}
            <Image
              source={require("../../../assets/img/acai.png")}
              style={styles.imagem}
            />
            <View style={styles.info}>
              <Text style={styles.nome}>Açaí no copo - 400ml</Text>
              <Text style={styles.preco}>R$ {precoUnitario.toFixed(2)}</Text>

              {/* Ações */}
              <View style={styles.acoes}>
                <TouchableOpacity onPress={removerItem} style={styles.botaoIcone}>
                  <Ionicons name="trash-outline" size={18} color="#fff" />
                </TouchableOpacity>

                <TouchableOpacity onPress={diminuir} style={styles.botaoQtd}>
                  <Text style={styles.textoQtd}>-</Text>
                </TouchableOpacity>

                <Text style={styles.qtd}>{quantidade}</Text>

                <TouchableOpacity onPress={aumentar} style={styles.botaoQtd}>
                  <Text style={styles.textoQtd}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ) : (
          <Text style={{ textAlign: "center", marginTop: 40, color: "#777" }}>
            Carrinho vazio
          </Text>
        )}

        {/* Subtotal */}
        <View style={styles.subtotalContainer}>
          <Text style={styles.subtotalLabel}>Subtotal</Text>
          <Text style={styles.subtotalValor}>R$ {subtotal.toFixed(2)}</Text>
        </View>

        {/* Botão Finalizar */}
        <TouchableOpacity
          style={styles.botaoFinalizar}
          onPress={finalizarPedido}
          disabled={quantidade === 0}
        >
          <Text style={styles.textoFinalizar}>Finalizar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  tela: {
    flex: 1,
    backgroundColor: "#F5F0EF",
  },
  container: {
    padding: 16,
    marginTop: 150, // pequena margem pro topo
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
    marginTop: 120,
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
  },
  textoFinalizar: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
