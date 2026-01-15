import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { Alert, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { container } from '../../core/Container';
import { TYPES } from '../../core/Types';
import { PersonasViewModel } from '../viewmodels/PersonasViewModel';

const EditarInsertarPersona = observer(() => {
    const vm = container.get<PersonasViewModel>(TYPES.PersonasViewModel);
    const router = useRouter();

    const handleSave = async () => {
        try {
            await vm.savePersona();
            router.back();
        } catch (error: any) {
            Alert.alert("Error", error.message || "Hubo un problema al guardar la persona.");
        }
    };

    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
            <View style={styles.formCard}>
                <Text style={styles.headerTitle}>{vm.personaSeleccionada ? 'Editar Persona' : 'Nueva Persona'}</Text>
                
                {vm.foto ? (
                    <Image source={{ uri: vm.foto }} style={styles.image} resizeMode="cover" />
                ) : (
                    <View style={styles.imagePlaceholder}>
                        <Ionicons name="person" size={50} color="#BDC3C7" />
                    </View>
                )}

                <View style={styles.inputGroup}>
                    <Text style={styles.label}>Nombre</Text>
                    <TextInput 
                        style={styles.input} 
                        value={vm.nombre} 
                        onChangeText={(t) => vm.setNombre(t)} 
                        placeholder="Nombre" 
                    />
                </View>

                <View style={styles.inputGroup}>
                    <Text style={styles.label}>Apellido</Text>
                    <TextInput 
                        style={styles.input} 
                        value={vm.apellido} 
                        onChangeText={(t) => vm.setApellido(t)} 
                        placeholder="Apellido" 
                    />
                </View>

                <View style={styles.row}>
                    <View style={[styles.inputGroup, { flex: 1, marginRight: 10 }]}>
                         <Text style={styles.label}>Fecha Nacimiento</Text>
                         <TextInput 
                            style={styles.input} 
                            value={vm.fechaNacimiento} 
                            onChangeText={(t) => vm.setFechaNacimiento(t)} 
                            placeholder="YYYY-MM-DD" 
                        />
                    </View>
                    <View style={[styles.inputGroup, { flex: 1 }]}>
                         <Text style={styles.label}>Teléfono</Text>
                         <TextInput 
                            style={styles.input} 
                            value={vm.telefono} 
                            onChangeText={(t) => vm.setTelefono(t)} 
                            placeholder="600000000" 
                            keyboardType="phone-pad" 
                        />
                    </View>
                </View>

                <View style={styles.inputGroup}>
                    <Text style={styles.label}>Dirección</Text>
                    <TextInput 
                        style={styles.input} 
                        value={vm.direccion} 
                        onChangeText={(t) => vm.setDireccion(t)} 
                        placeholder="Calle Ejemplo 123" 
                    />
                </View>

                <View style={styles.inputGroup}>
                    <Text style={styles.label}>URL Foto</Text>
                    <TextInput 
                        style={styles.input} 
                        value={vm.foto} 
                        onChangeText={(t) => vm.setFoto(t)} 
                        placeholder="https://..." 
                    />
                </View>

                <View style={styles.inputGroup}>
                    <Text style={styles.label}>ID Departamento</Text>
                    <TextInput 
                        style={styles.input} 
                        value={vm.departamentoId} 
                        onChangeText={(t) => vm.setDepartamentoId(t)} 
                        keyboardType="numeric" 
                        placeholder="0" 
                    />
                </View>

                <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
                    <Text style={styles.saveButtonText}>Guardar Cambios</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F7FA',
    },
    contentContainer: {
        padding: 20,
    },
    formCard: {
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 25,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 8,
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#2C3E50',
        marginBottom: 20,
        textAlign: 'center',
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50,
        alignSelf: 'center',
        marginBottom: 25,
        borderWidth: 3,
        borderColor: '#4A90E2',
    },
    imagePlaceholder: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: '#ECF0F1',
        alignSelf: 'center',
        marginBottom: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputGroup: {
        marginBottom: 15,
    },
    row: {
        flexDirection: 'row',
    },
    label: {
        fontSize: 14,
        color: '#7F8C8D',
        marginBottom: 5,
        fontWeight: '600',
    },
    input: {
        backgroundColor: '#F8F9F9',
        borderRadius: 10,
        paddingHorizontal: 15,
        paddingVertical: 12,
        fontSize: 16,
        color: '#2C3E50',
        borderWidth: 1,
        borderColor: '#E5E8E8',
    },
    saveButton: {
        backgroundColor: '#4A90E2',
        borderRadius: 12,
        paddingVertical: 16,
        alignItems: 'center',
        marginTop: 20,
        shadowColor: "#4A90E2",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 5,
    },
    saveButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default EditarInsertarPersona;
