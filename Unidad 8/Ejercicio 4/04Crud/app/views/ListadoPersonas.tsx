import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { router } from 'expo-router';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import container from '../../core/Container';
import { TYPES } from '../../core/Types';
import PersonasViewModel from "../viewModel/PersonasViewModel";

const ListadoPersonasView: React.FC<{ viewModel: PersonasViewModel }> = observer(({ viewModel }) => {
  useEffect(() => {
    viewModel.getPersonas();
  }, [viewModel]);

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <FlatList
        data={viewModel.personas}
        keyExtractor={(item) => item.id.toString()}
        ListHeaderComponent={<Text style={styles.title}>Personas</Text>}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Pressable onPress={() => {
              viewModel.setPersonaSeleccionada(item)
              router.push('/views/EditarInsertarPersonas');
            }}>
              <Text style={styles.name}>{item.nombre} {item.apellido}</Text>
              <Text style={styles.details}>ID: {item.id} • Dpto: {item.departamentoId}</Text>
            </Pressable>
          </View>
        )}
      />
    </SafeAreaView>
  );
});

export default function ListadoPersonasScreen() {
  // Al ser Singleton en el container, solo obtenemos la instancia
  const viewModel = container.get<PersonasViewModel>(TYPES.PersonasViewModel);
  return <ListadoPersonasView viewModel={viewModel} />;
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  list: { paddingHorizontal: 20, paddingBottom: 20 },
  title: { fontSize: 26, fontWeight: '700', marginVertical: 16, color: '#1a1a1a' },
  item: {
    paddingVertical: 12,
    borderBottomWidth: 0.5,
    borderBottomColor: '#eee',
  },
  name: { fontSize: 16, fontWeight: '500', color: '#333' },
  details: { fontSize: 13, color: '#888', marginTop: 2 },
});