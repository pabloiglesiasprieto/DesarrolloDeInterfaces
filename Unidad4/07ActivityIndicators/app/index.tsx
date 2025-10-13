import React, { useState } from 'react';
import { View, Text, Pressable, ActivityIndicator, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; // Para el ícono "Reload"

export default function App() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleReload = () => {
    setLoading(true);
    setSuccess(false);

    // Simulamos una carga de 2 segundos
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 2000);
  };

  return (
    <View style={styles.container}>
      <Pressable style={styles.button} onPress={handleReload}>
        <MaterialIcons name="refresh" size={32} color="white" />
      </Pressable>

      {loading && <ActivityIndicator size="large" color="#007AFF" style={styles.loader} />}

      {success && <Text style={styles.successText}>Cargado con éxito</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 50,
    marginBottom: 20,
  },
  loader: {
    marginTop: 20,
  },
  successText: {
    marginTop: 20,
    fontSize: 18,
    color: 'green',
  },
});
