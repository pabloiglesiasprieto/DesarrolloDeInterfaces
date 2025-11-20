import { Pressable, StyleSheet, Text } from "react-native";
type BotonProps = {
  label: string;
  onPress?: () => void;
};

export function BotonAddToCart({ label, onPress }: BotonProps) {
  return (
    <Pressable
      onPress={() => {
        onPress?.();
      }}
      style={styles.boton}
    >
      <Text style={styles.textoBoton}>{label}</Text>
    </Pressable>
  );
}
const styles = StyleSheet.create({
  boton: {
    backgroundColor: "#2176bcff",
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
  },
  textoBoton: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
