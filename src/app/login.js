import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons, Entypo } from "@expo/vector-icons";
import Topo from "../components/Topo";
import { BlurView } from 'expo-blur';

export default function Login() {
  const router = useRouter();

  return (

    <LinearGradient
          colors={["rgb(219, 213, 183)", "rgb(202, 176, 57)"]} // azul topo → azul escuro embaixo
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          style={styles.container}
        >
        <BlurView intensity={100} style={styles.blur} tint="light" />

    <View style={styles.container}>
        
        <Topo/>
      <View style={styles.topSection}>

        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <Ionicons name="chevron-back-outline" size={24} color="#fff" />
        </TouchableOpacity>

      </View>

         <Text style={styles.welcome}>Seja bem vindo{"\n"} de volta!</Text>
      {/* Formulário amarelo */}
      <View style={styles.bottomSection}>
        <BlurView intensity={100} style={styles.blur} tint="light" />

        <Text style={styles.label}>Entre com seu e-mail:</Text>
        <TextInput style={styles.input} placeholder="Digite o seu e-mail:" />

        <Text style={styles.label}>Senha:</Text>
        <TextInput style={styles.input} placeholder="Digite sua senha:" secureTextEntry />

        <TouchableOpacity style={styles.loginButton} onPress={() => router.push("/home")}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>

         <View style={styles.line} />

        {/* Ícones sociais */}
        <View style={styles.socialIcons} >
          <Entypo name="instagram" size={20} color="#fff" />
          <Ionicons name="logo-whatsapp" size={20} color="#fff" />
        </View>

        <TouchableOpacity onPress={() => router.push("/cadastrar")}>
          <Text style={styles.signupText}>
            Não tem uma conta? <Text style={{ fontWeight: "bold", color: "#8F2929"  }}>Cadastre-se</Text>
          </Text>
        </TouchableOpacity>
      </View>

    </View>
     </LinearGradient>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  
  },
  topSection: {
    zIndex: 2000,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 150,
    position: "relative",
  },
  backButton: {
    position: "absolute",
    top: 50,
    left: 20,
    zIndex: 2000,
  },


  bottomSection: {
    borderRadius: 10,
    width: 330,
    justifyContent: "center",
    backgroundColor: "#C7C3C3",
    marginLeft: "auto",
    marginRight: "auto",
    padding: 30,

     // sombra centralizada
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.4,
    shadowRadius: 10,
    elevation: 10, // necessário no Android
   
  },

  welcome: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 20,
    marginTop: 20,
    color: "#fff",
    fontStyle: "italic",
    textAlign: "center",
    textShadowColor: "#303030ff",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    opacity: 0.8,
    letterSpacing: 0.2,
  },
  label: {
    fontSize: 15,
    marginBottom: 5,
    color: "#296D8C",
    fontWeight: 700,
  },
  input: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
    marginTop: 5,
    border: "1px solid #404040",
    fontStyle: "italic",
    color: "#5D5757",
     outlineStyle: "none"
   
  },



  loginButton: {
    backgroundColor: "#296D8C",
    padding: 10,
    borderRadius: 20,
    alignItems: "center",
    marginBottom: 20,
   
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
});
