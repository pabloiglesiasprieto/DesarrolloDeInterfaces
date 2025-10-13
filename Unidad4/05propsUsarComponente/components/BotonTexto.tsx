import { Pressable, Text, View, StyleSheet } from "react-native";
import { useState } from "react"
import { TextInput } from "react-native-gesture-handler";

const BotonTexto = () => {
  const [texto, setTexto] = useState('');
  return (
    <View>
      <TextInput placeholder="Introduce algo:" value={texto} onChangeText={setTexto}></TextInput>
      <Pressable style={styles.boton}><Text style={styles.texto}>{texto}</Text></Pressable>
    </View >
  );
}
const styles = StyleSheet.create({

  vista: {
    flex: 1
  },

  boton: {
    flex: 1,
    backgroundColor: "#007AFF",
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
    alignSelf: "center",
  },
  texto: {
    color: "white",
    fontSize: 15
  }





})

export default BotonTexto