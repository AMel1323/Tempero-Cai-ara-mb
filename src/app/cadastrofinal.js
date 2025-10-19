import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from "react-native";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons, Entypo } from "@expo/vector-icons";
import { BlurView } from 'expo-blur';
import { useCadastroStore } from "../stores/useCadastroStore";

export default function Localizacao() {
  const router = useRouter();
  const { name, email, pass, setEndereco, limpar } = useCadastroStore();

  const [bairro, setBairro] = useState("");
  const [rua, setRua] = useState("");
  const [numero, setNumero] = useState("");

  const handleRegister = async () => {
    if (!bairro || !rua || !numero) {
      return Alert.alert("Atenção", "Preencha todos os campos!");
    }

    setEndereco({ bairro, rua, numero });

    try {
      // Se estiver testando em celular físico com Expo, troque 'localhost' pelo IP do seu PC
      const response = await fetch("http://localhost:3333/user/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, pass, bairro, rua, numero }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Erro ao cadastrar");
      }

      Alert.alert("Sucesso", "Cadastro realizado com sucesso!");
      limpar();
      router.push("/login");
    } catch (error) {
      Alert.alert("Erro", error.message);
    }
  };

  return (
    <View style={styles.container}>
      {/* Top azul */}
      <View style={styles.topBackground}>
        <Text style={styles.title}>Localização</Text>

        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <Ionicons name="chevron-back-outline" size={24} color="#fff" />
        </TouchableOpacity>

        {/* Bolinha amarela */}
        <View style={styles.circle} ></View>
      </View>

      {/* Formulário amarelo */}
      <View style={styles.bottomSection}>
        <BlurView intensity={100} style={styles.blur} tint="light" />

        <Text style={styles.label}>Bairro:
          <Entypo name="location" size={15} color="#C3A31B" style={{
            textShadowColor: 'rgba(207, 199, 199, 0.75)',
            textShadowOffset: { width: 1, height: 1 },
            textShadowRadius: 1,
            marginLeft: 6
          }} />
        </Text>
        <TextInput style={styles.input} placeholder="Digite o Bairro:" value={bairro} onChangeText={setBairro} />

        <Text style={styles.label}>Digite o seu endereço:
          <Entypo name="location" size={15} color="#C3A31B" style={{
            textShadowColor: 'rgba(207, 199, 199, 0.75)',
            textShadowOffset: { width: 1, height: 1 },
            textShadowRadius: 1,
            marginLeft: 6
          }} />
        </Text>
        <TextInput style={styles.input} placeholder="Digite o nome da sua Rua:" value={rua} onChangeText={setRua} />

        <Text style={styles.label}>Número da residência:
          <Entypo name="location" size={15} color="#C3A31B" style={{
            textShadowColor: 'rgba(207, 199, 199, 0.75)',
            textShadowOffset: { width: 1, height: 1 },
            textShadowRadius: 1,
            marginLeft: 6
          }} />
        </Text>
        <TextInput style={styles.input} placeholder="Exemplo: Casa 108" value={numero} onChangeText={setNumero} />

        <View style={styles.img}>
          <Image
            style={styles.image}
            source={require('../../assets/img/manCadastro.png')}
          />
        </View>

        <TouchableOpacity style={styles.loginButton} onPress={handleRegister}>
          <Text style={styles.loginText}>Finalizar</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push("/login")}>
          <Text style={styles.signupText}>
            Já tem uma conta? <Text style={{ fontWeight: "bold", color: "#8F2929"  }}>Faça Login</Text>
          </Text>
        </TouchableOpacity>

         <View style={styles.line} />

        {/* Ícones sociais */}
        <View style={styles.socialIcons} >
          <Entypo name="instagram" size={20} color="#8F2929" />
          <Ionicons name="logo-whatsapp" size={20} color="#8F2929" />
        </View>

        <Text style={styles.termos}>Ao entrar, você concorda com nossos Termos de{"\n"}Uso e Política de Privacidade.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  topBackground: {
    backgroundColor: "#2A647F", // azul
    height: 200,
    borderBottomLeftRadius: 200,
    borderBottomRightRadius: 200,
    alignItems: "center",
    justifyContent: "center",
    bottom: 25,
    // sombra centralizada
    shadowColor: "#000",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 10,
  },
  title: {
    fontSize: 32,
    color: "#fff",
    fontWeight: "bold",
    fontStyle: "italic",
    letterSpacing: 1.2,
    textShadowColor: "#0008",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
  },
  circle: {
    position: "absolute",
    right: -30,
    bottom: 12,
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#C3A31B",
    shadowColor: "#000",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 10,
  },

  backButton: {
    position: "absolute",
    top: 90,
    left: 30,
    zIndex: 2000,
  },

  bottomSection: {
    borderRadius: 10,
    width: 330,
    justifyContent: "center",
    marginLeft: "auto",
    marginRight: "auto",
    padding: 30,
  },

  label: {
    fontSize: 15,
    marginBottom: 5,
    color: "#8F2929",
    fontWeight: "700",
  },
  input: {
    backgroundColor: "#fff",
    borderRadius: 22,
    padding: 8,
    marginBottom: 15,
    marginTop: 5,
    borderWidth: 1,
    borderColor: "#404040",
    fontStyle: "italic",
    color: "#5D5757",
  },

  loginButton: {
    backgroundColor: "#C3A31B",
    width: 200,
    padding: 8,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
    marginLeft: "auto",
    marginRight: "auto",
    shadowColor: "#000",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 10,
  },
  loginText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
    fontStyle: "italic",
  },

  line: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    marginVertical: 10,
    width: "100%",
  },

  socialIcons: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
    marginBottom: 20,
  },
  signupText: {
    textAlign: "center",
    color: "#333",
  },

  termos:{
    fontSize: 10,
    textAlign:"center",
    fontStyle: "italic",
  },

  image: {
    top: -150,
    width: "100%",
    marginLeft: -53,
    height: 340,
    zIndex: -50,
    position: "absolute",
    opacity: 0.4,
  },


});
