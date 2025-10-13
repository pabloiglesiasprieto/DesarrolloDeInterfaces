import { Text, View } from "react-native";
import { useState } from 'react'
import { TextInput } from "react-native-gesture-handler";

export default function Index() {
  const [texto, setTexto] = useState('')
  return (
    <View>
      <TextInput placeholder="Introduce algo:" onChangeText={setTexto}></TextInput>
      <Text>{texto}</Text>
    </View>
  );
}
