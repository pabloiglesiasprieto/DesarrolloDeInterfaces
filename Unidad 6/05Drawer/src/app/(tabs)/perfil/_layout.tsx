import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { withLayoutContext } from 'expo-router';

const {Navigator} = createMaterialTopTabNavigator();
const MaterialTopTabs = withLayoutContext(Navigator);

export default function MaterialTopBar() {
  return (
    <MaterialTopTabs screenOptions={{tabBarActiveTintColor:'purple', tabBarInactiveTintColor:'grey'}}>

        <MaterialTopTabs.Screen name="posts" options={{ title: "Posts" }} />
        <MaterialTopTabs.Screen name="galeria" options={{ title: "Galería" }} />
    </MaterialTopTabs>)}