import React, { useState, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

// --- Componente Interno (Lógica de UI) ---
const ListaConFab = () => {
  const insets = useSafeAreaInsets();

  // 1. Referencia al FlatList
  const flatListRef = useRef(null);

  // 2. Estado para mostrar/ocultar botón
  const [showButton, setShowButton] = useState(false);

  // 3. Generamos 100 elementos de prueba
  const data = Array.from({ length: 100 }, (_, index) => ({
    id: index.toString(),
    title: `Elemento número ${index + 1}`,
  }));

  // 4. Función para volver al inicio
  const scrollToTop = () => {
    flatListRef.current?.scrollToOffset({ offset: 0, animated: true });
  };

  // 5. Detectar scroll
  const handleScroll = (event) => {
    const offsetY = event.nativeEvent.contentOffset.y;

    // Mostrar botón si bajamos más de 300px
    if (offsetY > 300) {
      if (!showButton) setShowButton(true);
    } else {
      if (showButton) setShowButton(false);
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.text}>{item.title}</Text>
    </View>
  );

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <StatusBar barStyle="dark-content" backgroundColor="#f5f5f5" />

      <View style={styles.header}>
        <Text style={styles.headerTitle}>Lista Infinita</Text>
      </View>

      <FlatList
        ref={flatListRef}
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        onScroll={handleScroll}
        scrollEventThrottle={16} // 16ms para 60fps
        contentContainerStyle={{
          paddingBottom: 100 + insets.bottom,
          paddingHorizontal: 15,
        }}
      />

      {showButton && (
        <TouchableOpacity
          style={[styles.fab, { bottom: 30 + insets.bottom }]}
          onPress={scrollToTop}
          activeOpacity={0.8}
        >
          <Text style={styles.fabText}>↑</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

// --- Componente Principal (Export Default) ---
const ScrollToTopList = () => {
  return (
    // SafeAreaProvider es necesario para que useSafeAreaInsets funcione
    <SafeAreaProvider>
      <ListaConFab />
    </SafeAreaProvider>
  );
};

export default ScrollToTopList;

// --- Estilos ---
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  header: {
    padding: 15,
    backgroundColor: "#fff",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    marginBottom: 10,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },
  card: {
    backgroundColor: "white",
    padding: 20,
    marginVertical: 6,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#eee",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  text: {
    fontSize: 16,
    color: "#444",
  },
  fab: {
    position: "absolute",
    right: 20,
    width: 56,
    height: 56,
    backgroundColor: "#007AFF",
    borderRadius: 28,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    zIndex: 10,
  },
  fabText: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: -2,
  },
});
