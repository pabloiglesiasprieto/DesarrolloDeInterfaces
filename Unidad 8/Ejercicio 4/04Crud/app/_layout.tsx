import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#f4511e",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      {/* IMPORTANTE: 'name' debe coincidir exactamente con el nombre del archivo.
        Si tu archivo se llama 'index.tsx', el name es 'index'.
      */}
      <Stack.Screen name="index" options={{ title: "Inicio" }} />
    </Stack>
  );
}
