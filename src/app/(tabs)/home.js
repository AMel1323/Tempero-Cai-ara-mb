import { Image } from "expo-image";
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native'
import { useRouter } from 'expo-router'
import Topo from '../../components/Topo'
import { ScrollView } from 'react-native-web'
import Parceiros from "../../components/Parceiros";
import CategoriaCarrossel from "../../components/CardapioHome"
import Rodape from "../../components/Ropape";



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
                
                <TouchableOpacity
                                 title='Camarao'
                                 onPress={() => router.navigate('/camaraopage')}>
                <View style={styles.bannerPublicitario}>
                    <Image
                        style={styles.image_publicitario}
                        source={require('../../../assets/img/bannerwelcome.png')}
                    />
                </View>
                </TouchableOpacity>


                </View>



                <View>
                    <CategoriaCarrossel/>
                </View>


                <View>
                    <Parceiros />
                </View>


                <TouchableOpacity
                                 title='Camarao'
                                 onPress={() => router.navigate('/camaraopage')}>
                <View style={styles.bannerPublicitario}>
                    <Image
                        style={styles.image_publicitario}
                        source={require('../../../assets/img/pequeno_banner.png')}
                    />
                </View>
                </TouchableOpacity>


                <View>
                    <Rodape />
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
        height: 120
      },

      banner:{
        alignItems: "center",
        gap: 10
      },

      image_publicitario:{
        width: 337, 
        height: 154.37
      },

      bannerPublicitario: {
        alignItems: "center",
        gap: 10,
        marginTop: 40
      }




})