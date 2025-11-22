import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import Ionicons from '@expo/vector-icons/Ionicons';

export default function CamaraoModal() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        
        {/* --- IMAGEM DO PRATO --- */}
        <Image
          source={require("../../assets/img/camarao.png")} // coloque sua imagem
          style={styles.image}
        />

        {/* --- CONTEÚDO --- */}
        <View style={styles.content}>
          
          {/* Nome e descrição */}
          <Text style={styles.titlespace}><Ionicons name="storefront-outline" size={22} color="#8F2929" /> Nome do espaço</Text>
          <Text style={styles.title}>Camarão</Text>
          <Text style={styles.description}>
            descrição.....
          </Text>

          {/* Preço */}
          <Text style={styles.price}>R$ 49,90</Text>

          {/* Informações do restaurante */}
          <View style={styles.infoBox}>
            <Text style={styles.infoText}>1,6 KM • 50 - 60 min • Grátis</Text>
            <Text style={styles.rating}>★ 4,5</Text>
          </View>

  
        </View>
      </ScrollView>

      {/* --- FOOTER FIXO --- */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>Adicionar ao Carrinho</Text>
        </TouchableOpacity>
      </View>

      {/* Botão fechar */}
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
  content: {
    padding: 20,
  },

  titlespace: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 8,
    marginRight: 4,
    color: "#8F2929"
  },

  title: {
    fontSize: 18,
    fontWeight: "600",
  },
  description: {
    marginTop: 5,
    fontSize: 15,
    color: "#666",
    lineHeight: 20,
  },
  price: {
    marginTop: 10,
    fontSize: 22,
    fontWeight: "700",
    color: "#008000",
  },
  infoBox: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  infoText: {
    color: "#555",
  },
  rating: {
    color: "#f4a000",
    fontWeight: "700",
  },
  separator: {
    marginTop: 25,
    height: 1,
    backgroundColor: "#eee",
  },

  footer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 15,
    borderTopWidth: 1,
    borderColor: "#eee",
    alignItems: "center",
    justifyContent: "center",
  },
  counterBox: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  counterBtn: {
    width: 32,
    height: 32,
    borderRadius: 8,
    backgroundColor: "#eee",
    justifyContent: "center",
    alignItems: "center",
  },
  counterText: {
    fontSize: 22,
    fontWeight: "700",
  },
  addButton: {
    backgroundColor: "#8F2929",
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  addButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
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
    fontSize: 25,
    fontWeight: "700",
    color: "#8F2929",
    marginBottom: 2,
  },
});
