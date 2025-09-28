import React, { useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Topo from '../../components/Topo'


export default function MeusPedidos() {
  // Exemplo de estado do pedido
  const [pedido] = useState({
    nome: "Nome do pedido:",
    descricao: "descrição....................................",
    valor: 30.0,
    status: "Pedido a caminho",
    imagem: require("../../../assets/img/acai.png"), // substituir pela imagem real
  });

  return (
    <View style={styles.tela}>
         <Topo/>
    <View style={styles.container}>
       
      <Text style={styles.titulo}>Meus pedidos:</Text>

      <View style={styles.card}>
        {/* Header */}
        <View style={styles.header}>
          <Ionicons name="ticket-outline" size={20} color="#B49721" />
          <Text style={styles.nomePedido}>{pedido.nome}</Text>

         
        </View>

        {/* Corpo */}
        <View style={styles.body}>
          <Image source={pedido.imagem} style={styles.imagem} />
          <Text style={styles.descricao}>{pedido.descricao}</Text>
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
          <Text style={styles.status}>{pedido.status}</Text>

           <View style={styles.valorPedido}>
            Total do pedido:{" "}
            <Text style={styles.valor}>R${pedido.valor},00</Text>
          </View>
        </View>
      </View>
    </View>

    </View>
  );
}

const styles = StyleSheet.create({

     tela: {
        flex: 1,
        backgroundColor:"#fff"

    },

  container: {
    padding: 16,
    backgroundColor: "#fff",
    flex: 1,
    marginTop:150,
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
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  nomePedido: {
    flex: 1,
    marginLeft: 6,
    fontWeight: "bold",
    fontSize: 14,
    
  },
 
  body: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  imagem: {
    width: 60,
    height: 60,
    borderRadius: 6,
    marginRight: 10,
  },
  descricao: {
    flex: 1,
    fontSize: 12,
    color: "#444",
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 6,
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
    color: "green",
  },

   valorPedido: {
    fontSize: 12,
    color: "#333",
    textAlign:"center",
    marginLeft:110,
  },
  valor: {
    fontWeight: "bold",
    color: "green",
    textAlign:"center",
  },
});
