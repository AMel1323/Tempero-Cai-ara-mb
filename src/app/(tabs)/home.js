import { Image } from "expo-image";
import { View, Text, Button, StyleSheet } from 'react-native'
import { useRouter } from 'expo-router'
import Topo from '../../components/Topo'
import { ScrollView } from 'react-native-web'
import Parceiros from "../../components/Parceiros";
import CategoriaCarrossel from "../../components/CardapioHome"


export default function Login() {

    const router = useRouter()

    return (

        <ScrollView style={styles.tela}>
            <View style={styles.container}>

                <Topo />

                <View style={styles.banner}>
                    <Image
                        style={styles.image_banner}
                        source={require('../../../assets/img/banner.png')}
                    />
                </View>



                <View style={styles.welcome}>




                </View>



                <View>
                    <CategoriaCarrossel/>
                </View>


                <View>
                    <Parceiros />
                </View>



            </View>
        </ScrollView>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        top: 130,
    },

    tela: {
        flex: 1,

    },

    image_banner: { 
        width: 400, 
        height: 100
      },

      banner:{
        alignItems: "center",
        gap: 10
      },




})