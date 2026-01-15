import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { observer } from 'mobx-react-lite';
import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { container } from '../../core/Container';
import { TYPES } from '../../core/Types';
import { PersonasViewModel } from '../viewmodels/PersonasViewModel';

const ListadoPersonas = observer(() => {
    const vm = container.get<PersonasViewModel>(TYPES.PersonasViewModel);
    const router = useRouter();
    const [filtro, setFiltro] = useState('');

    useEffect(() => {
        vm.getPersonas();
    }, []);

    const handleAdd = () => {
        vm.setPersonaSeleccionada(null);
        router.push('/editar-insertar-persona');
    };

    const handleEdit = (persona: any) => {
        vm.setPersonaSeleccionada(persona);
        router.push('/editar-insertar-persona');
    };

    const handleDelete = async (id: number) => {
        try {
            await vm.deletePersona(id);
        } catch (e) {
            // Error handled in VM
        }
    };

    const personasFiltradas = vm.personas.filter(p =>
        p.nombre.toLowerCase().includes(filtro.toLowerCase()) ||
        p.apellido.toLowerCase().includes(filtro.toLowerCase())
    );

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerTitle}>Personas</Text>
                <TouchableOpacity style={styles.addButton} onPress={handleAdd}>
                    <Ionicons name="add" size={24} color="white" />
                </TouchableOpacity>
            </View>

            <View style={styles.searchContainer}>
                <Ionicons name="search" size={20} color="#95A5A6" style={styles.searchIcon} />
                <TextInput
                    style={styles.searchInput}
                    placeholder="Buscar persona..."
                    placeholderTextColor="#95A5A6"
                    value={filtro}
                    onChangeText={setFiltro}
                />
            </View>

            <FlatList
                data={personasFiltradas}
                keyExtractor={(item) => item.id.toString()}
                contentContainerStyle={styles.listContent}
                renderItem={({ item }) => (
                    <View style={styles.card}>
                        <View style={styles.cardHeader}>
                             <View style={styles.avatarPlaceholder}>
                                    <Text style={styles.avatarText}>{item.nombre.charAt(0)}{item.apellido ? item.apellido.charAt(0) : ''}</Text>
                             </View>
                             <View style={styles.cardInfo}>
                                <Text style={styles.cardName}>{item.nombre} {item.apellido}</Text>
                                <Text style={styles.cardSubtitle}>{item.telefono || 'Sin teléfono'}</Text>
                             </View>
                        </View>

                        <View style={styles.cardActions}>
                            <TouchableOpacity style={styles.actionButtonEdit} onPress={() => handleEdit(item)}>
                                <Ionicons name="create-outline" size={20} color="#4A90E2" />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.actionButtonDelete} onPress={() => handleDelete(item.id)}>
                                <Ionicons name="trash-outline" size={20} color="#E74C3C" />
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
            />
        </View>
    );
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F7FA',
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    headerTitle: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#2C3E50',
    },
    addButton: {
        backgroundColor: '#4A90E2',
        width: 44,
        height: 44,
        borderRadius: 22,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "#4A90E2",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 5,
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 12,
        paddingHorizontal: 15,
        marginBottom: 20,
        height: 50,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 5,
        elevation: 2,
    },
    searchIcon: {
        marginRight: 10,
    },
    searchInput: {
        flex: 1,
        fontSize: 16,
        color: '#2C3E50',
    },
    listContent: {
        paddingBottom: 20,
    },
    card: {
        backgroundColor: 'white',
        borderRadius: 16,
        padding: 15,
        marginBottom: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 5,
        elevation: 2,
    },
    cardHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
    },
    avatarPlaceholder: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#E8F0FE',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 15,
    },
    avatarText: {
        color: '#4A90E2',
        fontWeight: 'bold',
        fontSize: 18,
    },
    cardInfo: {
        flex: 1,
    },
    cardName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#2C3E50',
        marginBottom: 4,
    },
    cardSubtitle: {
        fontSize: 14,
        color: '#95A5A6',
    },
    cardActions: {
        flexDirection: 'row',
        gap: 10,
    },
    actionButtonEdit: {
        padding: 8,
        backgroundColor: '#F0F8FF',
        borderRadius: 8,
    },
    actionButtonDelete: {
        padding: 8,
        backgroundColor: '#FEF2F2',
        borderRadius: 8,
    }
});

export default ListadoPersonas;
