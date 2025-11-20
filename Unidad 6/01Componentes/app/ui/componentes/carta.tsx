import { Image } from "expo-image";
import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { BotonAddToCart } from "./boton";

type Props = {
  name: string;
  price: number;
  image: string;
  onAddToCart: () => void;
};

export function TarjetaProducto({ name, price, image, onAddToCart }: Props) {
  return (
    <View style={styles.View}>
      <Image source={{ uri: image }} style = {styles.image} />
      <Text style={styles.text}>{name}</Text>
      <Text style={styles.text}>{price}€</Text>
      <BotonAddToCart label="Añadir al carrito" onPress={onAddToCart} />
      
    </View>
  );
}

const styles = StyleSheet.create({
  View: {
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#ffffffff",
    borderRadius: 8,
    margin: 20,
  },

  text: {
    color: "#000000ff",
    fontWeight: "bold",
    fontSize: 16, 
  },
  image: {
    width: 200,
    height: 150,
    marginBottom: 10,
  }
});
