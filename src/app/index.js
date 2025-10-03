import {Image} from 'expo-image'

import { View, Text, StyleSheet, TouchableOpacity, Button } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from 'expo-router';


export default function LoginScreen() {

     const router = useRouter()

     return (

   
    <LinearGradient
      colors={["#236F92", "#0E3547"]} // azul topo → azul escuro embaixo
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.container}
    >
      {/* Logo */}
      <View style={styles.logoContainer}>
        <Image
            style={styles.image}
            source={require('../../assets/img/logo.png')}
        />
       
      </View>

      {/* Botões */}
      <TouchableOpacity style={styles.button} 
      title='Login'
       onPress={() => router.navigate('login')}>

        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}
       title='Cadastro'
       onPress={() => router.navigate('/cadastrar')}>
        <Text style={styles.buttonText}>Cadastre-se</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
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
