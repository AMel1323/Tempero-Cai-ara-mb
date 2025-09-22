import { Tabs } from "expo-router"
import Foundation from '@expo/vector-icons/Foundation'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5'
import Ionicons from '@expo/vector-icons/Ionicons';
import Entypo from '@expo/vector-icons/Entypo'
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';


export default function RootLayout() {
    return(
        <Tabs
  screenOptions={{
    tabBarShowLabel: false,
    tabBarActiveTintColor: '#fff', // cor ativa (laranja)
    tabBarInactiveTintColor: '#fff',  // cor inativa (branca)
   
    tabBarStyle: {
     
      position: 'absolute',
      bottom: 40,       // espaçamento da borda inferior
      left: 20,
      right: 20,
      borderRadius: 25, // bordas arredondadas
      height: 60,       // altura da TabBar
      backgroundColor: '#2c6e91', // azul da sua tela
      borderTopWidth: 0, // tira borda padrão
      elevation: 5,      // sombra no Android
      shadowColor: '#000', // sombra no iOS
      shadowOpacity: 0.4,
      shadowRadius: 5,
    
    },
    tabBarHideOnKeyboard: true, // esconde quando teclado abre
    headerShown: false,
  }}
>
  <Tabs.Screen
    name="home"
    options={{
     
      tabBarIcon: ({ color }) => (
        <Ionicons name="home-outline" size={25} color={color} style={{ marginTop: 15 }}/>
      ),
    }}
  />



<Tabs.Screen
    name="pedido"
    options={{
     
      tabBarIcon: ({ color }) => (
        <SimpleLineIcons name="book-open" size={25} color={color} style={{ marginTop: 15 }}/>
      ),
    }}
  />

  <Tabs.Screen
    name="parceiros"
    options={{
     
      tabBarIcon: ({ color }) => (
        <FontAwesome name="handshake-o" size={25} color={color} style={{ marginTop: 15 }}/>
      ),
    }}
  />

  <Tabs.Screen
    name="carrinho"
    options={{
     
      tabBarIcon: ({ color }) => (
        <Ionicons name="cart-outline" size={25} color={color} style={{ marginTop: 15 }}/>
      ),
    }}
  />

  <Tabs.Screen
    name="editPerfil"
    options={{
     
      tabBarIcon: ({ color }) => (
        <Ionicons name="person-outline" size={25} color={color} style={{ marginTop: 15 }}/>
      ),
    }}
  />

 

</Tabs>

    )
}
