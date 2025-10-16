import { FlatList, Text, View } from "react-native";

import ViewModel from "../ViewModel/ViewModel";

const viewModel = new ViewModel();

export default function Vista() {
  return (
    <View>
      <FlatList
        data={viewModel.ListadoPersonas}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View
            style={{ padding: 10, borderBottomWidth: 1, borderColor: "#ccc" }}
          >
            <Text style={{ fontSize: 18 }}>{item.Nombre}</Text>
            <Text style={{ color: "#666" }}>Edad: {item.Edad}</Text>
          </View>
        )}
      />
    </View>
  );
}
