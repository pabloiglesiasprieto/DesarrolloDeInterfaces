import { View } from "react-native";
import Bienvenida from "./views/Bienvenida";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Bienvenida />
    </View>
  );
}
