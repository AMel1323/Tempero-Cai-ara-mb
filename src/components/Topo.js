import { Image } from "expo-image";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import { useRouter } from 'expo-router';

export default function Topo() {

  const router = useRouter()

  return (
    <View style={styles.header}>
      <TouchableOpacity
             title='home'
             onPress={() => router.navigate('/home')}>
      <View style={styles.logotipo}>
        <Image
          style={styles.image}
          source={require("../../assets/img/logo.png")}
        />
      </View>
      </TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({
  header: {
    top: 0,
    width: "100%",
    height: 130,
    backgroundColor: "#296D8C",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    position: "fixed",
    flex:1,
    zIndex:1000,
   

   
  },

  image: { 
    width: 230, 
    height: 90
  },
  logotipo:{
    
    alignItems: "center",
    gap: 10
  },
 
}) 