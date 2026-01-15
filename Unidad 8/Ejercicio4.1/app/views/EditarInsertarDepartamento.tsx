import { useLocalSearchParams, useRouter } from 'expo-router';
import { observer } from 'mobx-react-lite';
import React, { useEffect, useState } from 'react';
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { container } from '../../core/Container';
import { TYPES } from '../../core/Types';
import { Departamento } from '../../domain/entities/Departamento';
import { DepartamentosViewModel } from '../viewmodels/DepartamentosViewModel';

const EditarInsertarDepartamento = observer(() => {
    const vm = container.get<DepartamentosViewModel>(TYPES.DepartamentosViewModel);
    const router = useRouter();
    const params = useLocalSearchParams();
    const [nombre, setNombre] = useState('');

    useEffect(() => {
        if (params.id && params.id !== 'null') {
            setNombre(params.nombre as string);
        } else {
            setNombre('');
        }
    }, [params]);

    const handleSave = async () => {
        if (!nombre) {
            Alert.alert("Error", "El nombre es obligatorio.");
            return;
        }

        const id = params.id && params.id !== 'null' ? parseInt(params.id as string) : 0;
        const d = new Departamento(id, nombre);

        try {
            if (id !== 0) {
                await vm.updateDepartamento(d);
            } else {
                await vm.addDepartamento(d);
            }
            router.back();
        } catch (error) {
            Alert.alert("Error", "Hubo un problema al guardar el departamento.");
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.formCard}>
                <Text style={styles.headerTitle}>
                    {params.id && params.id !== 'null' ? 'Editar Departamento' : 'Nuevo Departamento'}
                </Text>
                
                <View style={styles.inputGroup}>
                    <Text style={styles.label}>Nombre del Departamento</Text>
                    <TextInput 
                        style={styles.input} 
                        value={nombre} 
                        onChangeText={setNombre} 
                        placeholder="Ej. Recursos Humanos" 
                    />
                </View>

                <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
                    <Text style={styles.saveButtonText}>Guardar Cambios</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F7FA',
        padding: 20,
        justifyContent: 'center',
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
        marginBottom: 25,
        textAlign: 'center',
    },
    inputGroup: {
        marginBottom: 20,
    },
    label: {
        fontSize: 14,
        color: '#7F8C8D',
        marginBottom: 8,
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
        marginTop: 10,
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

export default EditarInsertarDepartamento;
