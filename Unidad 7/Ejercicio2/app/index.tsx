import { AuthProvider, useAuth } from "@/context/AuthContext";
import { Button, Text, View } from "react-native";

function AuthStatus() {
  const { isLoggedIn, userName, loginUser, logoutUser } = useAuth();
  
  return (
    <View>
      {isLoggedIn ? (
        <>
          <Text>✅ Conectado</Text>
          <Text>Usuario: {userName}</Text>
          <Button 
            title="Cerrar Sesión" 
            onPress={logoutUser} 
            color="red" 
          />
        </>
      ) : (
        <>
          <Text>❌ Desconectado</Text>
          <Button 
            title="Iniciar Sesión" 
            onPress={() => loginUser("Iván")} 
            color="green" 
          />
        </>
      )}
    </View>
  );
}

export default function Index() {
  return (
    <AuthProvider>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <AuthStatus />
      </View>
    </AuthProvider>
  );
}