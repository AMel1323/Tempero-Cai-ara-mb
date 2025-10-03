import { View, Text, Button } from "react-native";
import { useRouter } from "expo-router";

export default function ModalScreen() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 20, marginBottom: 20 }}>Esse é o Modal 🎉</Text>
      <Button title="Fechar" onPress={() => router.back()} />
    </View>
  );
}
