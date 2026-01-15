import { Drawer } from 'expo-router/drawer';

export default function DrawerLayout() {
  return (
    <Drawer screenOptions={{ headerShown: true }}>
      <Drawer.Screen 
        name="index" 
        options={{ 
            title: 'Bienvenida',
            drawerLabel: 'Inicio'
        }} 
      />
      <Drawer.Screen 
        name="listado-personas" 
        options={{ 
            title: 'Listado de Personas',
            drawerLabel: 'Personas'
        }} 
      />
      <Drawer.Screen 
        name="listado-departamentos" 
        options={{ 
            title: 'Listado de Departamentos',
            drawerLabel: 'Departamentos'
        }} 
      />
    </Drawer>
  );
}
