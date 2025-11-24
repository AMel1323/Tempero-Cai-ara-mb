import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Image } from "expo-image";
import Topo from "../../../components/Topo";

const screenWidth = Dimensions.get("window").width;

// Função utilitária para normalizar slug
function normalizeSlug(str) {
  if (!str) return "";
  return str
    .normalize("NFD") 
    .replace(/[\u0300-\u036f]/g, "") 
    .toLowerCase()
    .replace(/\s+/g, "-"); 
}

// Mapa de banners por categoria
const banners = {
  camarao: require("../../../../assets/img/bannercamarao.png"),
  acai: require("../../../../assets/img/banneracai.png"),
  bebidas: require("../../../../assets/img/bannerbebidas.png"),
  peixes: require("../../../../assets/img/bannerpeixe.png"),
  porcoes: require("../../../../assets/img/bannerporcao.png"),
  sorvetes: require("../../../../assets/img/bannersorvete.png"),
  "pratos-feitos": require("../../../../assets/img/bannerpratofeito.png"),
};

export default function CategoriaPage() {
  const { nome } = useLocalSearchParams();
  const router = useRouter();
  const [quiosques, setQuiosques] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const resEst = await fetch("http://localhost:3333/api/estabelecimentos");
        const estData = await resEst.json();

        const estComPratos = await Promise.all(
          estData.map(async (est) => {
            const resPratos = await fetch(
              `http://localhost:3333/api/pratos?estabelecimentos_id=${est.id}`
            );
            const pratos = await resPratos.json();

            // Filtra apenas os pratos da categoria atual
            const filtrados = pratos.filter((p) => {
              if (!p.categoria) return false;
              const cat = normalizeSlug(p.categoria);
              const slug = normalizeSlug(nome);
              return cat === slug || cat.replace(/s$/, "") === slug.replace(/s$/, "");
            });

            return { ...est, produtos: filtrados };
          })
        );

        setQuiosques(estComPratos.filter((q) => q.produtos.length > 0));
      } catch (err) {
        console.error("Erro ao carregar dados:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [nome]);

  const slug = normalizeSlug(nome);

  return (
    <ScrollView style={styles.container}>
      <Topo />
      {/* Banner dinâmico */}
      <View style={styles.banner}>
        <Image
          source={banners[slug] || banners["pratos-feitos"]}
          style={styles.bannerImage}
        />
        <Text style={styles.bannerText}>
          {nome.charAt(0).toUpperCase() + nome.slice(1)}
        </Text>
        <View style={styles.line} />
      </View>

      {/* Lista de Quiosques */}
      {loading ? (
        <Text style={{ textAlign: "center", marginTop: 20 }}>Carregando...</Text>
      ) : quiosques.length === 0 ? (
        <Text style={{ textAlign: "center", marginTop: 20 }}>
          Nenhum prato encontrado para {nome}.
        </Text>
      ) : (
        quiosques.map((q) => <CardQuiosque key={q.id} data={q} />)
      )}

      <View style={styles.margin} />
    </ScrollView>
  );
}

function CardQuiosque({ data }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const router = useRouter();

  const getVisibleItems = () => {
    const visible = [];
    const itemsToShow = Math.min(4, data.produtos.length);
    for (let i = 0; i < itemsToShow; i++) {
      visible.push(data.produtos[(currentIndex + i) % data.produtos.length]);
    }
    return visible;
  };

  return (
    <View style={styles.quiosque}>
      {/* Header Quiosque */}
      <View style={styles.header}>
        <Image
          source={{ uri: data.logo_url || "https://via.placeholder.com/40" }}
          style={styles.logo}
        />
        <View style={styles.info}>
          <Text style={styles.nome}>{data.nome}</Text>
          <Text style={styles.detalhes}>
            ⭐ {data.avaliacao || "4.5"} • {data.tempo || "40-50 MIN"} •{" "}
            {data.entrega || "Grátis"}
          </Text>
        </View>
      </View>

      {/* Carrossel de produtos */}
      <View style={styles.carousel}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.carouselWrapper}
        >
          {getVisibleItems().map((item) => (
            <TouchableOpacity
              key={item.id}
              style={styles.carouselItem}
              onPress={() =>
                router.push(`/modal?id=${item.id}&quiosqueId=${data.id}`)
              }
            >
              <Image
                source={{ uri: item.imagem || "https://via.placeholder.com/80" }}
                style={styles.produtoImg}
              />
              <Text style={styles.produtoTitulo}>{item.nome}</Text>
              <Text style={styles.produtoPreco}>R$ {item.preco}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  banner: {
    position: "relative",
    width: "100%",
    height: 100,
    marginBottom: 20,
    marginTop:125,
  },
  bannerImage: {
    width: "100%",
    height: "100%",
  },
  bannerText: {
    position: "absolute",
    bottom: 33,
    left: "38%",
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    textShadowColor: "rgba(0,0,0,0.9)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4,
  },

     line: {
      position: "absolute",
    borderBottomColor: "white",
    left: "37%",
    borderBottomWidth: 1,    
   bottom: 30,
    width: 80,            
},

  quiosque: {
    marginBottom: 30,
    
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 22,
    paddingHorizontal: 30,
  },
  logo: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  info: {
    flex: 1,
  },
  nome: {
    fontSize: 16,
    fontWeight: "600",
  },
  detalhes: {
    fontSize: 12,
    color: "#666",
  },
  carousel: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 30,
    
  },
  carouselWrapper: {
    flexDirection: "row",
  },
  carouselItem: {
    width: screenWidth * 0.3,
    marginHorizontal: 5,
    alignItems: "center",
  },
  produtoImg: {
    width: "100%",
    height: 80,
    borderRadius: 8,
    marginBottom: 6,
  },
  produtoTitulo: {
    fontSize: 12,
    textAlign: "center",
  },
  produtoPreco: {
    fontSize: 12,
    fontWeight: "bold",
    color: "green",
  },

  margin: {
   marginTop: 90,
  },
});
