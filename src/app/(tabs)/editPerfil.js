import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Picker,
  Alert,
} from "react-native";
import { ScrollView } from "react-native-web";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";

import Topo from "../../components/Topo";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Feather from "@expo/vector-icons/Feather";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function EditProfile() {
  const router = useRouter();

  const [userId, setUserId] = useState(null);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [bairro, setBairro] = useState("");
  const [rua, setRua] = useState("");
  const [numero, setNumero] = useState("");
  const [pagamento, setPagamento] = useState("Débito");

  // usuário logado
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userData = await AsyncStorage.getItem("user");
        if (!userData) return;
        const parsed = JSON.parse(userData);
        setUserId(parsed.id);

        // Buscar dados atuais do banco
        const response = await fetch(`http://localhost:3333/user/${parsed.id}`);
        if (!response.ok) throw new Error("Erro ao carregar usuário");
        const data = await response.json();

        setNome(data.name || "");
        setEmail(data.email || "");
        setSenha(data.pass || "");
        setBairro(data.bairro || "");
        setRua(data.rua || "");
        setNumero(data.numero || "");
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
        Alert.alert("Erro", "Não foi possível carregar seus dados.");
      }
    };
    fetchUserData();
  }, []);

  // Atualizar usuário
  const handleSalvar = async () => {
    try {
      const response = await fetch(`http://localhost:3333/user/${userId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: nome,
          email,
          pass: senha,
          bairro,
          rua,
          numero,
        }),
      });

      if (!response.ok) throw new Error("Erro ao atualizar usuário");
      Alert.alert("Sucesso", "Dados atualizados com sucesso!");
    } catch (error) {
      console.error("Erro ao salvar:", error);
      Alert.alert("Erro", "Não foi possível salvar as alterações.");
    }
  };

  // Excluir usuário
  const handleExcluir = async () => {
    Alert.alert("Confirmação", "Tem certeza que deseja excluir sua conta?", [
      { text: "Cancelar", style: "cancel" },
      {
        text: "Excluir",
        style: "destructive",
        onPress: async () => {
          try {
            await fetch(`http://localhost:3333/user/${userId}`, {
              method: "DELETE",
            });
            await AsyncStorage.removeItem("user");
            router.replace("/login");
          } catch (error) {
            console.error("Erro ao excluir:", error);
            Alert.alert("Erro", "Não foi possível excluir sua conta.");
          }
        },
      },
    ]);
  };

  // Logout
  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem("user");
      router.replace("/login");
    } catch (error) {
      console.log("Erro ao fazer logout:", error);
    }
  };

  return (
    <ScrollView style={styles.tela}>
      <Topo />

      <View style={styles.container}>
        <Text style={styles.hello}>
          Olá, {nome || "Usuário"}{" "}
          <MaterialCommunityIcons name="bell" size={22} color="#7A1E1E" />
        </Text>
        <Text style={styles.title}>Alterações:</Text>

        {/* Nome */}
        <Text style={styles.label}>
          Nome:
          <Feather name="edit" size={15} color="#48742C" style={styles.icon} />
        </Text>
        <TextInput
          style={styles.input}
          value={nome}
          onChangeText={setNome}
          placeholder="Digite o seu nome"
        />

        {/* Email */}
        <Text style={styles.label}>
          E-mail:
          <Feather name="edit" size={15} color="#48742C" style={styles.icon} />
        </Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          placeholder="Digite seu e-mail"
        />

        {/* Senha */}
        <Text style={styles.label}>
          Senha:
          <Feather name="edit" size={15} color="#48742C" style={styles.icon} />
        </Text>
        <TextInput
          style={styles.input}
          value={senha}
          onChangeText={setSenha}
          secureTextEntry
          placeholder="Digite sua nova senha"
        />

        {/* Endereço */}
        <Text style={styles.label}>Endereço:</Text>
        <TextInput
          style={styles.input}
          value={bairro}
          onChangeText={setBairro}
          placeholder="Bairro"
        />
        <TextInput
          style={styles.input}
          value={rua}
          onChangeText={setRua}
          placeholder="Rua"
        />
        <TextInput
          style={styles.input}
          value={numero}
          onChangeText={setNumero}
          placeholder="Número"
          keyboardType="numeric"
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
          <TouchableOpacity style={[styles.btn, styles.exit]} onPress={handleLogout}>
            <Text style={styles.btnText}>
              Sair <Ionicons name="exit-outline" size={15} color="#F1F1F1" />
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.btn, styles.save]} onPress={handleSalvar}>
            <Text style={styles.btnTextSalvar}>
              Salvar <Ionicons name="refresh-circle-outline" size={15} color="#8F2929" />
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.btn, styles.delete]} onPress={handleExcluir}>
            <Text style={styles.btnText}>
              Excluir <Ionicons name="trash" size={15} color="#FFFFFF" />
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  tela: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  container: {
    flex: 1,
    padding: 20,
    marginBottom: 130,
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
  icon: {
    textShadowColor: "rgba(133, 133, 133, 0.75)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
    marginLeft: 6,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 7,
    marginTop: 5,
    height: 40,
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
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
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
  btnTextSalvar: {
    color: "#8F2929",
    fontWeight: "bold",
  },
});
