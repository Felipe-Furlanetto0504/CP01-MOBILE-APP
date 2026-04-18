import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View, TextInput, Button, Alert } from "react-native";
import { MaskedTextInput } from "react-native-mask-text";

export default function Form() {
  const [nome, setNome] = useState("");
  const [curso, setCurso] = useState("");
  const [disciplina, setDisciplina] = useState("");
  const [apresentacao, setApresentacao] = useState("");

  // 🔴 novos campos exigidos no CP2
  const [cpf, setCpf] = useState("");
  const [telefone, setTelefone] = useState("");

  useEffect(() => {
    async function carregar() {
      const dados = await AsyncStorage.getItem("INFORMACOES");
      if (dados) {
        const obj = JSON.parse(dados);
        setNome(obj.nome);
        setCurso(obj.curso);
        setDisciplina(obj.disciplina);
        setApresentacao(obj.apresentacao);
        setCpf(obj.cpf || "");
        setTelefone(obj.telefone || "");
      }
    }
    carregar();
  }, []);

  async function salvar() {
    if (!nome || !curso || !disciplina || !apresentacao || !cpf || !telefone) {
      Alert.alert("Erro", "Preencha todos os campos");
      return;
    }

    const dados = {
      nome,
      curso,
      disciplina,
      apresentacao,
      cpf,
      telefone,
    };

    await AsyncStorage.setItem("INFORMACOES", JSON.stringify(dados));

    Alert.alert("Sucesso", "Dados salvos");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nome</Text>
      <TextInput value={nome} onChangeText={setNome} style={styles.input} />

      <Text style={styles.label}>Curso</Text>
      <TextInput value={curso} onChangeText={setCurso} style={styles.input} />

      <Text style={styles.label}>Disciplina</Text>
      <TextInput
        value={disciplina}
        onChangeText={setDisciplina}
        style={styles.input}
      />

      <Text style={styles.label}>Sobre</Text>
      <TextInput
        value={apresentacao}
        onChangeText={setApresentacao}
        style={styles.input}
        multiline
      />

      <Text style={styles.label}>CPF</Text>
      <MaskedTextInput
        mask="999.999.999-99"
        value={cpf}
        onChangeText={(text) => setCpf(text)}
        style={styles.input}
        keyboardType="numeric"
      />

      <Text style={styles.label}>Telefone</Text>
      <MaskedTextInput
        mask="(99) 99999-9999"
        value={telefone}
        onChangeText={(text) => setTelefone(text)}
        style={styles.input}
        keyboardType="numeric"
      />

      <Button title="Salvar" onPress={salvar} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { width: "90%" },
  label: { marginTop: 10 },
  input: {
    backgroundColor: "#f2f2f2",
    padding: 10,
    borderRadius: 8,
  },
});
