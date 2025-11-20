import {
    Image,
    Pressable,
    StyleSheet,
    Text,
    TextInput,
    View,
} from "react-native";

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <Text style={{ margin: 20, fontSize: 20, fontWeight: "bold" }}>
        Ingresar
      </Text>
      <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 12 }}>
        <Image
          source={require("../../assets/images/user.png")}
          style={styles.image}
        />
        <TextInput style={styles.input} placeholder="Usuario" autoCapitalize="none" />
      </View>
      <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 12 }}>
        <Image
          source={require("../../assets/images/email.png")}
          style={styles.image}
        />
        <TextInput style={styles.input} placeholder="Contraseña" secureTextEntry />
      </View>

      <Pressable style={styles.button} onPress={() => { /* manejar inicio de sesión */ }}>
        <Text style={styles.buttonText}>Iniciar Sesión</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  image: { width: 24, height: 24, marginRight: 8, resizeMode: "contain" },
  input: {
    flex: 1,
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 8,
  },
  button: {
    marginTop: 20,
    backgroundColor: "#007AFF",
    paddingVertical: 12,
    alignItems: "center",
    borderRadius: 6,
  },
  buttonText: { color: "#fff", fontWeight: "600" },
});

