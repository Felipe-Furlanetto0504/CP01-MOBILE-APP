import { Stack } from "expo-router";

export default function () {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: "#0077ff" },
        headerTintColor: "#fff",
      }}
    >
      <Stack.Screen name="informa" options={{ title: "Informações" }} />

      <Stack.Screen name="index" options={{ title: "Cadastro" }} />
    </Stack>
  );
}
