import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Topo from "../../components/Topo";
import { useAuthStore } from "../../stores/useAuthStore";

export default function MeusPedidos() {
  const { token } = useAuthStore();
  const [pedidos, setPedidos] = useState([]);

  useEffect(() => {
    const fetchPedidos = async () => {
      try {
        const res = await fetch("http://localhost:3333/api/orders/my-orders", {
          headers: { Authorization: `Bearer ${token}` },
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data.message || "Erro ao buscar pedidos");
        setPedidos(data);
      } catch (err) {
        console.error("Erro ao carregar pedidos:", err);
      }
    };
    fetchPedidos();
  }, [token]);

  const renderPedido = ({ item }) => (
    <View style={styles.card}>
      {/* Header */}
      <View style={styles.header}>
        <Ionicons name="ticket-outline" size={20} color="#B49721" />
        <Text style={styles.nomePedido}>Pedido #{item.id_order}</Text>
        <Text style={styles.valorPedido}>
          Valor: R$
          {item.order_has_pratos
            .reduce((acc, p) => acc + p.pratos.preco * p.quantidade, 0)
            .toFixed(2)}
        </Text>
      </View>

      {/* Corpo */}
      <View style={styles.body}>
        <Image
          source={{
            uri:
              item.order_has_pratos[0]?.pratos?.imagem ||
              "https://via.placeholder.com/60",
          }}
          style={styles.imagem}
        />
        <View style={styles.descricao}>
          {item.order_has_pratos.map((p) => (
            <Text key={p.pratos_id}>
              {p.quantidade}x {p.pratos.nome}
            </Text>
          ))}
        </View>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <View style={styles.linha} />
        <Ionicons
          name="checkmark-circle"
          size={18}
          color="green"
          style={{ marginRight: 6 }}
        />
        <Text style={styles.status}>{item.status || "Pedido a caminho"}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.tela}>
      <Topo />
      <View style={styles.container}>
        <Text style={styles.titulo}>Meus pedidos:</Text>
        {pedidos.length > 0 ? (
          <FlatList
            data={pedidos}
            keyExtractor={(item) => item.id_order.toString()}
            renderItem={renderPedido}
          />
        ) : (
          <Text style={{ textAlign: "center", marginTop: 40, color: "#777" }}>
            Você ainda não tem pedidos.
          </Text>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  tela: { 
    flex: 1, 
    backgroundColor: "#fff" 
  },
  container: { 
    padding: 16, 
    backgroundColor: "#fff", 
    flex: 1, marginTop: 150 
  },
  titulo: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#8B0000",
    marginBottom: 12,
  },
  card: {
    backgroundColor: "#E8ECEF",
    borderRadius: 10,
    padding: 12,
    elevation: 3,
    marginBottom: 12,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  nomePedido: { 
    fontWeight: "bold", 
    fontSize: 14 
  },
  valorPedido: { 
    fontSize: 12, 
    color: "#333" 
  },
  body: { 
    flexDirection: "row", 
    alignItems: "center", 
    marginBottom: 8 
  },
  imagem: { 
    width: 60, 
    height: 60, 
    borderRadius: 6, 
    marginRight: 10 
  },
  descricao: { 
    flex: 1, 
    fontSize: 12, 
    color: "#444"
   },
  footer: { 
    flexDirection: "row", 
    alignItems: "center", 
    marginTop: 6 
  },
  linha: {
    position: "absolute",
    top: -8,
    left: 0,
    right: 0,
    height: 1,
    backgroundColor: "#A52A2A",
  },
  status: { 
    fontSize: 12, 
    color: "green" 
  },
});
