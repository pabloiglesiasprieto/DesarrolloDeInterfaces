import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import PersonaListVM from "../../app/ViewModels/PersonaListVM";
import { container } from "../../core/container";
import { TYPES } from "../../core/types";
import Persona from "../../domain/entities/Persona";

const viewModel = container.get<PersonaListVM>(TYPES.IndexVM);


const PeopleList = observer(() => {
  
  

  useEffect(() => {
viewModel.cargarPersonas();
}, []);

  


  const renderItem = ({ item }: { item: Persona }) => (
    <Pressable
      onPress={() => {
        viewModel.personaSeleccionada = item;
      }}
    >
      <Text style={styles.itemText}>
        {item.Nombre} {item.Apellido}
      </Text>
    </Pressable>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>Listado de Personas</Text>
      <Text style={styles.titulo}>
        Persona seleccionada: {viewModel.personaSeleccionada.nombre}{" "}
        {viewModel.personaSeleccionada.Apellido}
      </Text>

      <FlatList
        data={viewModel.personasList}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        ListEmptyComponent={() => (
          <Text style={styles.textoVacio}>No hay personas registradas</Text>
        )}
      />
    </SafeAreaView>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    paddingHorizontal: 16,
    paddingTop: 30,
  },
  titulo: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
  },
  item: {
    backgroundColor: "#FFFFFF",
    padding: 16,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  itemPresionado: {
    backgroundColor: "#D0E8FF",
  },
  itemText: {
    fontSize: 16,
  },
  separator: {
    height: 10,
  },
  input: {
    width: "80%",
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  textoVacio: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 16,
    color: "#888",
  },
});

export default PeopleList;
