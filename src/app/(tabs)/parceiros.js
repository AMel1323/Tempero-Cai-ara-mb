import { Image } from "expo-image";
import { View, Text, Button, StyleSheet } from 'react-native'
import { useRouter } from 'expo-router'
import Topo from '../../components/Topo'
import { ScrollView } from 'react-native-web'
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';


export default function Login() {

    const router = useRouter()

    return (

         <ScrollView style={styles.tela}>
        <View style={styles.container}>

            <Topo />

            <View style={styles.banner}>
                <Image
                    style={styles.image_banner}
                    source={require('../../../assets/img/banner_parceiro.png')}
                />
            </View>

            <Image
                    style={styles.logoP}
                    source={require('../../../assets/img/quiosque2.png')}
                />

            <View style={styles.infoQuiosque}>

                <View style={styles.namequiosque}>
                    <Text style={styles.title}>Quiosque Mar a Vista</Text>
                    <Text style={styles.subtitle}>LANCHONETE DA PRAIA</Text>
                </View>

                <View style={styles.star_km}>
                <AntDesign name="star" size={24} color="black" />
                <Text style={styles.avaliação}>4,5</Text>
                  <Text>° 1,5km</Text>
                </View>

                <View style={styles.horario}>
                <Ionicons name="storefront-outline" size={24} color="black" />
                   <Text style={styles.open}> ° Aberto</Text>
                   <Text style={styles.infohorario}>Abre as 09hrs e fecha ás 21hrs - todos os dias</Text>

                </View>

            </View>


        </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({

    tela: {
        flex: 1,

    },

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        top: 130,
        
    },

    image_banner: { 
        width: 400, 
        height: 70
      },

      banner:{
        alignItems: "center",
      },

      logoP: {
        width: 60,
        height: 60,
        resizeMode: "contain",
        top: -30,
        zIndex: 20,

        shadowColor: "#000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.4,
    shadowRadius: 10,
    borderRadius: 50,
    elevation: 10, // necessário no Android
   
        
      },



})