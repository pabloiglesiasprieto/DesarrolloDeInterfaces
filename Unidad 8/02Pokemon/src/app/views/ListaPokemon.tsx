import { container } from "@/src/core/container";
import { TYPES } from "@/src/core/types";
import { observer } from "mobx-react-lite";
import { useEffect, useMemo } from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ListaPokemonVM } from "../viewmodels/ListaPokemonVM";
import Pokemon from "@/src/domain/entities/Pokemon";
import { Ionicons } from "@expo/vector-icons";

const PokemonList = observer(() => {
  const viewModel = useMemo(
    () => container.get<ListaPokemonVM>(TYPES.ListaPokemonVM),
    []
  );

  useEffect(() => {
    viewModel.cargarPokemons();
  }, [viewModel]);

  const renderItem = ({ item }: { item: Pokemon }) => (
    <TouchableOpacity style={styles.card} activeOpacity={0.7}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: item.Url }}
          style={styles.pokemonImage}
          resizeMode="contain"
        />
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.idText}>
          #{item.Id.toString().padStart(3, "0")}
        </Text>
        <Text style={styles.pokemonName}>{item.Nombre}</Text>

        <View style={styles.badgeContainer}>
          <View style={styles.typeBadge}>
            <Text style={styles.typeText}>Explorar</Text>
          </View>
        </View>
      </View>

      <Ionicons
        name="chevron-forward"
        size={20}
        color="#CCC"
        style={styles.chevron}
      />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      {/* HEADER */}
      <View style={styles.header}>
        <View>
          <Text style={styles.titulo}>Pokédex</Text>
          <View style={styles.underline} />
        </View>
        <Ionicons name="filter" size={24} color="#333" />
      </View>

      {/* FLATLIST SIEMPRE RENDERIZADA */}
      <FlatList
        style={styles.list}
        data={viewModel.pokemonList}
        renderItem={renderItem}
        keyExtractor={(item) => item.Id.toString()}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator
        ListEmptyComponent={
          <View style={styles.centerContainer}>
            {viewModel.isLoading ? (
              <>
                <ActivityIndicator size="large" color="#E3350D" />
                <Text style={styles.loadingText}>Buscando Pokémons...</Text>
              </>
            ) : viewModel.error ? (
              <>
                <Ionicons name="alert-circle" size={50} color="#D32F2F" />
                <Text style={styles.errorText}>{viewModel.error}</Text>
                <TouchableOpacity
                  style={styles.retryButton}
                  onPress={() => viewModel.cargarPokemons()}
                >
                  <Text style={styles.retryText}>Reintentar</Text>
                </TouchableOpacity>
              </>
            ) : (
              <Text style={styles.textoVacio}>No hay pokémons registrados</Text>
            )}
          </View>
        }
      />

      {/* FAB */}
      <TouchableOpacity
        style={[styles.fab, viewModel.isLoading && styles.fabDisabled]}
        onPress={() => viewModel.cargarPokemons()}
        disabled={viewModel.isLoading}
        activeOpacity={0.8}
      >
        {viewModel.isLoading ? (
          <ActivityIndicator color="white" />
        ) : (
          <Ionicons name="refresh" size={28} color="white" />
        )}
      </TouchableOpacity>
    </SafeAreaView>
  );
});

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F8F9FA" },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 24,
    paddingVertical: 20,
  },
  titulo: { fontSize: 34, fontWeight: "900", color: "#1A1A1A" },
  underline: {
    height: 5,
    width: 45,
    backgroundColor: "#E3350D",
    borderRadius: 10,
    marginTop: -2,
  },
  list: { flex: 1 },
  listContent: { paddingHorizontal: 20, paddingBottom: 120 },
  card: {
    backgroundColor: "#FFF",
    borderRadius: 20,
    marginBottom: 16,
    flexDirection: "row",
    padding: 15,
    alignItems: "center",
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  imageContainer: { backgroundColor: "#F2F2F2", borderRadius: 15, padding: 10 },
  pokemonImage: { width: 70, height: 70 },
  infoContainer: { flex: 1, paddingLeft: 15 },
  idText: { fontSize: 12, fontWeight: "800", color: "#BDC3C7" },
  pokemonName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#2C3E50",
    textTransform: "capitalize",
  },
  badgeContainer: { marginTop: 5 },
  typeBadge: {
    backgroundColor: "#49D0B0",
    alignSelf: "flex-start",
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 6,
  },
  typeText: { color: "#FFF", fontSize: 10, fontWeight: "700" },
  chevron: { marginLeft: 5 },
  centerContainer: { flex: 1, justifyContent: "center", alignItems: "center" },
  loadingText: { marginTop: 10, color: "#7F8C8D" },
  errorText: { color: "#E74C3C", textAlign: "center", marginVertical: 10 },
  retryButton: {
    backgroundColor: "#333",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
  },
  retryText: { color: "#FFF", fontWeight: "700" },
  textoVacio: { color: "#BDC3C7" },
  fab: {
    position: "absolute",
    width: 60,
    height: 60,
    right: 20,
    bottom: 30,
    backgroundColor: "#E3350D",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    elevation: 6,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 4 },
  },
  fabDisabled: { backgroundColor: "#CCC" },
});

export default PokemonList;
