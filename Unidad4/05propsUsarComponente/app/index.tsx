import { Text, View } from "react-native";
import BotonTexto from "../components/BotonTexto"

export default function Index() {
  return (
    <View>
      <BotonTexto texto="probar" />
      <BotonTexto texto="si"/>
      <BotonTexto texto="Julian pelele"/>
    </View>
  );
}
