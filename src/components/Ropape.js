import { View, Text, StyleSheet, Dimensions } from "react-native";

const screenWidth = Dimensions.get('window').width;

export default function Rodape() {
  return (
   <View style={styles.footer}>
  <Text style={styles.headline}>Deseja trabalhar conosco?</Text>
  <Text style={styles.subheadline}>
    Junte-se ao time de quem valoriza o tempero caiçara!
  </Text>
  <Text style={styles.slogan}>
    Se é do Litoral Norte, tem que ter Tempero Caiçara!
  </Text>

  <View style={styles.ctaBox}>
    <Text style={styles.ctaText}>Saiba mais</Text>
  </View>
</View>
  );
}



const styles = StyleSheet.create({
  footer: {
    backgroundColor: '#3B7798', 
    paddingVertical: 30,
    paddingHorizontal: 25,
    alignItems: 'center',
    marginTop: 35
  },

  headline: {
    color: '#fff',
    fontSize: screenWidth * 0.06,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },

  subheadline: {
    color: '#fff',
    fontSize: screenWidth * 0.030, 
    textAlign: 'center',
    marginBottom: 10,
  },

  slogan: {
    color: '#fff',
    fontSize: screenWidth * 0.040,
    fontStyle: 'italic',
    textAlign: 'center',
    marginBottom: 20,
  },

  ctaBox: {
    backgroundColor: '#B3920B', 
    paddingVertical: 6,
    paddingHorizontal: 15,
    borderRadius: 15,
    marginBottom: 95
  },

  ctaText: {
    color: '#FFFFFF', 
    fontWeight: 'bold',
    fontSize: screenWidth * 0.040,
    textAlign: 'center',
  },
});