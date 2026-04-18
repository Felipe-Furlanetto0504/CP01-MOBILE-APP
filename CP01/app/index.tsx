import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Form from "../components/form";
import { Link } from "expo-router";

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Link href="/informa">
          <Text style={styles.link}>Informações</Text>
        </Link>
      </View>

      <Text style={styles.title}>Coloque suas informações</Text>

      <Form />

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    paddingTop: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 20,
  },
  link: {
    color: "#0077ff",
    fontSize: 16,
    fontWeight: "600",
    textDecorationLine: "underline",
    marginBottom: 15,
  },
});
