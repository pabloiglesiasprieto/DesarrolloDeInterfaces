import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'reflect-metadata';

export default function RootLayout() {
  return (
    <>
      <StatusBar style="auto" />
      <Stack>
        <Stack.Screen name="(drawer)" options={{ headerShown: false }} />
        <Stack.Screen name="editar-insertar-persona" options={{ title: 'Gestionar Persona' }} />
        <Stack.Screen name="editar-insertar-departamento" options={{ title: 'Gestionar Departamento' }} />
      </Stack>
    </>
  );
}
