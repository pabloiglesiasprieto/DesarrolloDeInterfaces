import { useState } from "react";
import { Text, View, Image } from "react-native";
import { TarjetaProducto } from "./ui/componentes/carta";

export default function Index() {
  const [counter, setCounter] = useState(0);
  return (
    <View style={{ flex: 1, flexDirection: "row", flexWrap: "wrap" }}>
      <Image
        source={{
          uri: "https://e7.pngegg.com/pngimages/833/426/png-clipart-shopping-cart-shopping-cart.png",
        }}
        style={{ width: 50, height: 50, position: "absolute", left: "97%" }}
      />
      <Image
        source={{
          uri: "data:image/webp;base64,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",
        }}
        style={{ width: 20, height: 20, position: "absolute", left: "98.7%" }}
      />
      <Text style={{ left: "99%", position: "absolute" }}>{counter}</Text>

      
      
      
      
      
      
      
      
      
      
      
      
      
      <TarjetaProducto
        name="Producto de Ejemplo"
        price={19.99}
        image="https://th.bing.com/th/id/OIP.ma4Y0VqWIJWYACdZvvK48AHaFj?w=232&h=180&c=7&r=0&o=7&pid=1.7&rm=3"
        onAddToCart={() => {
          setCounter((c) => c + 1);
          console.log("Producto agregado al carrito");
        }}
      />
      <TarjetaProducto
        name="Producto de Ejemplo"
        price={19.99}
        image="https://th.bing.com/th/id/OIP.ma4Y0VqWIJWYACdZvvK48AHaFj?w=232&h=180&c=7&r=0&o=7&pid=1.7&rm=3"
        onAddToCart={() => {
          setCounter((c) => c + 1);
          console.log("Producto agregado al carrito");
        }}
      />
      <TarjetaProducto
        name="Producto de Ejemplo"
        price={19.99}
        image="https://th.bing.com/th/id/OIP.ma4Y0VqWIJWYACdZvvK48AHaFj?w=232&h=180&c=7&r=0&o=7&pid=1.7&rm=3"
        onAddToCart={() => {
          setCounter((c) => c + 1);
          console.log("Producto agregado al carrito");
        }}
      />
      <TarjetaProducto
        name="Producto de Ejemplo"
        price={19.99}
        image="https://th.bing.com/th/id/OIP.ma4Y0VqWIJWYACdZvvK48AHaFj?w=232&h=180&c=7&r=0&o=7&pid=1.7&rm=3"
        onAddToCart={() => {
          setCounter((c) => c + 1);
          console.log("Producto agregado al carrito");
        }}
      />
      <TarjetaProducto
        name="Producto de Ejemplo"
        price={19.99}
        image="https://th.bing.com/th/id/OIP.ma4Y0VqWIJWYACdZvvK48AHaFj?w=232&h=180&c=7&r=0&o=7&pid=1.7&rm=3"
        onAddToCart={() => {
          setCounter((c) => c + 1);
          console.log("Producto agregado al carrito");
        }}
      />
      <TarjetaProducto
        name="Producto de Ejemplo"
        price={19.99}
        image="https://th.bing.com/th/id/OIP.ma4Y0VqWIJWYACdZvvK48AHaFj?w=232&h=180&c=7&r=0&o=7&pid=1.7&rm=3"
        onAddToCart={() => {
          setCounter((c) => c + 1);
          console.log("Producto agregado al carrito");
        }}
      />
      <TarjetaProducto
        name="Producto de Ejemplo"
        price={19.99}
        image="https://th.bing.com/th/id/OIP.ma4Y0VqWIJWYACdZvvK48AHaFj?w=232&h=180&c=7&r=0&o=7&pid=1.7&rm=3"
        onAddToCart={() => {
          setCounter((c) => c + 1);
          console.log("Producto agregado al carrito");
        }}
      />
      <TarjetaProducto
        name="Producto de Ejemplo"
        price={19.99}
        image="https://th.bing.com/th/id/OIP.ma4Y0VqWIJWYACdZvvK48AHaFj?w=232&h=180&c=7&r=0&o=7&pid=1.7&rm=3"
        onAddToCart={() => {
          setCounter((c) => c + 1);
          console.log("Producto agregado al carrito");
        }}
      />
      <TarjetaProducto
        name="Producto de Ejemplo"
        price={19.99}
        image="https://th.bing.com/th/id/OIP.ma4Y0VqWIJWYACdZvvK48AHaFj?w=232&h=180&c=7&r=0&o=7&pid=1.7&rm=3"
        onAddToCart={() => {
          setCounter((c) => c + 1);
          console.log("Producto agregado al carrito");
        }}
      />
    </View>
  );
}
