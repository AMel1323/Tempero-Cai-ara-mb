import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Picker,
} from "react-native";
import { ScrollView } from 'react-native-web'


import Topo from '../../components/Topo'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Feather from '@expo/vector-icons/Feather';
import Ionicons from '@expo/vector-icons/Ionicons';


export default function EditProfile() {
  // estados que futuramente vão receber dados do banco
  const [nome, setNome] = useState("User");
  const [email, setEmail] = useState("user@gmail.com");
  const [senha, setSenha] = useState("123456");
  const [endereco, setEndereco] = useState("Rua exemplo, 123");
  const [pagamento, setPagamento] = useState("Débito");

  const handleSalvar = () => {
    // aqui vai sua integração com o backend
    console.log({ nome, email, senha, endereco, pagamento });
  };

  const handleExcluir = () => {
    // integração futura
    console.log("Conta excluída");
  };

  return (

    <ScrollView style={styles.tela}>

     <Topo />
    
    <View style={styles.container}>
    
   

      <Text style={styles.hello}>Olá, {nome} <MaterialCommunityIcons name="bell" size={22} color="#7A1E1E" /></Text>
      <Text style={styles.title}>Alterações:</Text>

      {/* Nome */}
      <Text style={styles.label}>Nome:<Feather name="edit" size={15} color="#48742C" style={{
                    textShadowColor: 'rgba(133, 133, 133, 0.75)',
                    textShadowOffset: { width: 1, height: 1 },
                    textShadowRadius: 1,
                    marginLeft: 6
                }}  /></Text>
      <TextInput
        style={styles.input}
        placeholder="Digite o seu user"
        value={nome}
        onChangeText={setNome}
      />

      {/* Email */}
      <Text style={styles.label}>E-mail: <Feather name="edit" size={15} color="#48742C" style={{
                    textShadowColor: 'rgba(133, 133, 133, 0.75)',
                    textShadowOffset: { width: 1, height: 1 },
                    textShadowRadius: 1,
                    marginLeft: 6
                }}  /></Text>
      <TextInput
        style={styles.input}
        placeholder="Exemplo: User@gmail.com"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      {/* Senha */}
      <Text style={styles.label}>Senha:<Feather name="edit" size={15} color="#48742C" style={{
                    textShadowColor: 'rgba(133, 133, 133, 0.75)',
                    textShadowOffset: { width: 1, height: 1 },
                    textShadowRadius: 1,
                    marginLeft: 6
                }}  /></Text>
      <TextInput
        style={styles.input}
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      />

      {/* Endereço */}
      <Text style={styles.label}>Endereço:<Feather name="edit" size={15} color="#48742C" style={{
                    textShadowColor: 'rgba(133, 133, 133, 0.75)',
                    textShadowOffset: { width: 1, height: 1 },
                    textShadowRadius: 1,
                    marginLeft: 6
                }}  /></Text>
      <TextInput
        style={styles.input}
        placeholder="Altere o seu endereço"
        value={endereco}
        onChangeText={setEndereco}
      />

      {/* Pagamento */}
      <Text style={styles.label}>Pagamento:</Text>
      <View style={styles.selectBox}>
        <Picker selectedValue={pagamento} onValueChange={setPagamento}>
          <Picker.Item label="Débito" value="Débito" />
          <Picker.Item label="Crédito" value="Crédito" />
          <Picker.Item label="Pix" value="Pix" />
        </Picker>
      </View>

      {/* Botões */}
      <View style={styles.buttons}>
        <TouchableOpacity style={[styles.btn, styles.exit]}>
          <Text style={styles.btnText}>Sair<Ionicons name="exit-outline" size={20} color="#F1F1F1" /></Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.btn, styles.save]} onPress={handleSalvar}>
          <Text style={styles.btnTextSalvar}>Salvar Alteração<Ionicons name="refresh-circle-outline" size={20} color="#8F2929" /></Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.btn, styles.delete]} onPress={handleExcluir}>
        <View style={styles.btnContent}>
          <Text style={styles.btnText}>Excluir<Ionicons name="trash" size={18} color="#FFFFFF" /></Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({

    tela: {
        flex: 1,
        backgroundColor:"#FFFFFF"

    },

  container: {
    flex: 1,
    padding: 20,
    marginBottom: 130
  
  },
  hello: {
    fontSize: 19,
    fontWeight: "bold",
    color: "#7A1E1E",
    marginBottom: 10,
    marginTop: 140,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#7A1E1E",
    marginBottom: 8,
  },
  label: {
    fontSize: 13,
    marginTop: 10,
    fontWeight: "bold",
    marginLeft: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 7,
    marginTop: 5,
    height: 40
  },
  selectBox: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    marginTop: 4,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  btn: {
    padding: 10,
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    justifyContent:"center",
  },
  exit: {
    backgroundColor: "#B5A36E",
  },
  save: {
    backgroundColor: "#D9D9D9",
  },
  delete: {
    backgroundColor: "#A22C2C",
  },
  btnText: {
    color: "#fff",
    fontWeight: "bold",
  },

  btnTextSalvar:{
    color: "#8F2929",
    fontWeight: "bold",
  },

  // 👇 esse é o que faltava
  btnContent: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6, // se não tiver suporte, tira e usa marginLeft no ícone
  },
});