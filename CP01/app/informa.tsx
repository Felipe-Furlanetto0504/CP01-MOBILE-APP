import { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";


export default function Informa() {
  const [dados, setDados] = useState(null);

  useEffect(() => {
    async function carregar() {
      const dadosSalvos = await AsyncStorage.getItem("INFORMACOES");
      if (dadosSalvos) {
        setDados(JSON.parse(dadosSalvos));
      }
    }
    carregar();
  }, []);

  if (!dados) return <Text style={styles.loading}>Carregando</Text>;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Informações</Text>

      <Image
        source={require("../img/ff.jpeg")} 
        style={styles.image}
      />

      <View style={styles.card}>
        <Text style={styles.label}>Nome</Text>
        <Text style={styles.value}>{dados.nome}</Text>

        <Text style={styles.label}>Curso</Text>
        <Text style={styles.value}>{dados.curso}</Text>

        <Text style={styles.label}>Disciplina</Text>
        <Text style={styles.value}>{dados.disciplina}</Text>

        <Text style={styles.label}>Sobre</Text>
        <Text style={styles.value}>{dados.apresentacao}</Text>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f7fa",
    alignItems: "center",
    paddingTop: 30,
  },

  loading: {
    marginTop: 50,
    textAlign: "center",
    fontSize: 16,
  },

  title: {
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 20,
    color: "#333",
  },

  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: "#0077ff",
  },

  card: {
    width: "85%",
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },

  label: {
    fontSize: 14,
    color: "#888",
    marginTop: 10,
  },

  value: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },
});