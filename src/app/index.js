import { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useAuthStore } from "../stores/useAuthStore";

export default function LoginScreen() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkLogin = async () => {
    try {
      const logged = await AsyncStorage.getItem("userLogged");
      if (logged) {
        const parsed = JSON.parse(logged);
        if (parsed?.token) {
        useAuthStore.getState().login({
          profile: parsed.profile,
          token: parsed.token,
        });
        router.replace("/home");
      }
      }
    } catch (error) {
      console.log("Erro ao verificar login:", error);
    } finally {
      setLoading(false);
    }
  };
    checkLogin();
  }, [router]);

  if (loading) {
    
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#C3A31B" />
      </View>
    );
  }

  return (
    <LinearGradient
      colors={["#236F92", "#0E3547"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.container}
    >
      {/* Logo */}
      <View style={styles.logoContainer}>
        <Image style={styles.image} source={require("../../assets/img/logo.png")} />
      </View>

      {/* Botões */}
      <TouchableOpacity
        style={styles.button}
        title="Login"
        onPress={() => router.navigate("/login")}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        title="Cadastro"
        onPress={() => router.navigate("/cadastrar")}
      >
        <Text style={styles.buttonText}>Cadastre-se</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0E3547",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logoContainer: {
    marginBottom: 60,
    alignItems: "center",
  },
  image: {
    width: 250,
    height: 100,
  },
  button: {
    backgroundColor: "#e0e0e0",
    width: "80%",
    paddingVertical: 15,
    borderRadius: 25,
    marginVertical: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#333",
    fontSize: 16,
    fontWeight: "bold",
  },
});
