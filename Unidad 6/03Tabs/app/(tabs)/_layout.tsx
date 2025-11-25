import { Ionicons } from '@expo/vector-icons';
import { Tabs } from "expo-router";


export default function TabsLayout() {
  return(
    <Tabs screenOptions={{headerShown:true, tabBarStyle:{backgroundColor:'#222', borderTopColor:'#222'}, tabBarActiveTintColor:'#fff', tabBarInactiveTintColor:'#888'}} >
      <Tabs.Screen
        name="index"
        options={{title:'Home',
          tabBarIcon: ({size, color}) => <Ionicons name="home" size={size} color={color} />,
        }}/>
      <Tabs.Screen
        name="perfil"
        options={{title:'Perfil',
        tabBarIcon:({size,color}) => <Ionicons name="person" size={size} color={color}/>}}/>
      <Tabs.Screen
        name="search"
        options={{title:'Busqueda',
          tabBarIcon:({size,color}) => <Ionicons name="search" size={size} color={color}/>
        }}/>
    </Tabs>
  )
}
