import { Pressable, Text, View, StyleSheet } from "react-native";


const BotonTexto = ({ texto }) => {
  return (
    <View>
      <Pressable style={styles.boton}>
        <Text style={styles.texto}>{texto}</Text>
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  vista: {
    flex: 1,
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
    fontSize: 15,
  },
});

export default BotonTexto;
