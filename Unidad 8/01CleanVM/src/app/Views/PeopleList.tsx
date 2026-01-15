import { observer } from "mobx-react-lite";
import React, { useEffect, useRef } from "react";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import PersonaListVM from "../../app/ViewModels/PersonaListVM";
import { container } from "../../core/container";
import { TYPES } from "../../core/types";
import Persona from "../../domain/entities/Persona";

const PeopleList = observer(() => {
  // useRef mantiene la misma instancia del ViewModel durante todo el ciclo de vida del componente
  const viewModelRef = useRef<PersonaListVM>(
    container.get<PersonaListVM>(TYPES.IndexVM)
  );

  // Acceso más limpio al ViewModel
  const viewModel = viewModelRef.current;

  useEffect(() => {
    // Cargar personas cuando el componente se monta
    viewModel.cargarPersonas();

    // Cleanup opcional: puedes agregar lógica de limpieza si es necesario
    return () => {
      // Aquí podrías limpiar subscripciones, timers, etc.
      console.log("Componente desmontado");
    };
  }, []); // Array vacío = solo se ejecuta al montar

  const renderItem = ({ item }: { item: Persona }) => (
    <Pressable
      style={styles.item}
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

      <View style={styles.selectedContainer}>
        <Text style={styles.subtitulo}>Persona seleccionada:</Text>
        <Text style={styles.selectedText}>
          {viewModel.personaSeleccionada.Nombre}{" "}
          {viewModel.personaSeleccionada.Apellido}
        </Text>
      </View>

      {viewModel.isLoading ? (
        <View style={styles.loadingContainer}>
          <Text style={styles.loadingText}>Cargando personas...</Text>
        </View>
      ) : viewModel.error ? (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>Error: {viewModel.error}</Text>
          <Pressable
            style={styles.retryButton}
            onPress={() => viewModel.cargarPersonas()}
          >
            <Text style={styles.retryText}>Reintentar</Text>
          </Pressable>
        </View>
      ) : (
        <FlatList
          data={viewModel.personasList}
          renderItem={renderItem}
          keyExtractor={(item) => item.Id.toString()}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          ListEmptyComponent={() => (
            <Text style={styles.textoVacio}>No hay personas registradas</Text>
          )}
        />
      )}
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
    color: "#333",
  },
  selectedContainer: {
    backgroundColor: "#E3F2FD",
    padding: 12,
    borderRadius: 8,
    marginBottom: 16,
  },
  subtitulo: {
    fontSize: 14,
    fontWeight: "600",
    color: "#666",
    marginBottom: 4,
  },
  selectedText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1976D2",
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
  itemText: {
    fontSize: 16,
    color: "#333",
  },
  separator: {
    height: 10,
  },
  textoVacio: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 16,
    color: "#888",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loadingText: {
    fontSize: 16,
    color: "#666",
  },
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  errorText: {
    fontSize: 16,
    color: "#D32F2F",
    textAlign: "center",
    marginBottom: 16,
  },
  retryButton: {
    backgroundColor: "#1976D2",
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
  },
  retryText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
});

export default PeopleList;
