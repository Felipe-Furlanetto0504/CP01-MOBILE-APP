import { useEffect, useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function Form() {
  const [nome, setNome] = useState("");
  const [curso, setCurso] = useState("");
  const [disciplina, setDisciplina] = useState("");
  const [apresentacao, setApresentacao] = useState("");
  const [dadosEnviados, setDadosEnviados] = useState(null);

  useEffect(() => {
    console.log("App Iniciado");
  }, []);

  const handleEnviar = () => {
    const dados = {
      nome,
      curso,
      disciplina,
      apresentacao,
    };
    setDadosEnviados(dados);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nome</Text>
      <TextInput
        placeholder="Digite seu Nome"
        autoCapitalize="words"
        maxLength={30}
        value={nome}
        onChangeText={setNome}
        style={styles.input}
      />

      <Text style={styles.label}>Curso</Text>
      <TextInput
        placeholder="Digite seu Curso"
        autoCapitalize="words"
        maxLength={30}
        value={curso}
        onChangeText={setCurso}
        style={styles.input}
      />

      <Text style={styles.label}>Disciplina</Text>
      <TextInput
        placeholder="Digite sua Disciplina"
        autoCapitalize="words"
        maxLength={30}
        value={disciplina}
        onChangeText={setDisciplina}
        style={styles.input}
      />

      <Text style={styles.label}>Sobre</Text>
      <TextInput
        placeholder="Fale sobre você"
        autoCapitalize="sentences"
        maxLength={100}
        value={apresentacao}
        onChangeText={setApresentacao}
        style={styles.input}
        multiline
      />

      <Button
        title="Enviar"
        style={styles.button}
        color="#0059ff"
        onPress={handleEnviar}
      />

      {dadosEnviados && (
        <View style={styles.resultado}>
          <Text style={styles.tituloResultado}>Dados informados:</Text>

          <Text>Nome: {dadosEnviados.nome}</Text>
          <Text>Curso: {dadosEnviados.curso}</Text>
          <Text>Disciplina: {dadosEnviados.disciplina}</Text>
          <Text>Sobre: {dadosEnviados.apresentacao}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "90%",
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    marginTop: 10,
    fontWeight: "500",
  },
  input: {
    backgroundColor: "#f2f2f2",
    width: "100%",
    borderRadius: 8,
    paddingLeft: 10,
    paddingVertical: 10,
    fontSize: 16,
  },
  button: {
    marginTop: 20,
  },
  resultado: {
    marginTop: 30,
    padding: 15,
    backgroundColor: "#e6f0ff",
    borderRadius: 8,
  },
  tituloResultado: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 10,
  },
});
