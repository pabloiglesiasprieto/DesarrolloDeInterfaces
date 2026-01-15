import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Bienvenida() {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <View style={styles.contentContainer}>
                <Ionicons name="people-circle-outline" size={100} color="#4A90E2" style={styles.icon} />
                <Text style={styles.title}>Gestión de Personal</Text>
                <Text style={styles.subtitle}>Administra departamentos y empleados de forma eficiente.</Text>
                
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button} onPress={() => router.push('/listado-personas')}>
                        <Text style={styles.buttonText}>Ver Personas</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, styles.buttonSecondary]} onPress={() => router.push('/listado-departamentos')}>
                        <Text style={[styles.buttonText, styles.buttonTextSecondary]}>Ver Departamentos</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F7FA',
        justifyContent: 'center',
        alignItems: 'center',
    },
    contentContainer: {
        backgroundColor: 'white',
        padding: 40,
        borderRadius: 20,
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 10,
        width: '90%',
        maxWidth: 400,
    },
    icon: {
        marginBottom: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#2C3E50',
        marginBottom: 10,
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 16,
        color: '#7F8C8D',
        textAlign: 'center',
        marginBottom: 40,
        lineHeight: 24,
    },
    buttonContainer: {
        width: '100%',
        gap: 15,
    },
    button: {
        backgroundColor: '#4A90E2',
        paddingVertical: 15,
        borderRadius: 12,
        alignItems: 'center',
        width: '100%',
    },
    buttonSecondary: {
        backgroundColor: 'transparent',
        borderWidth: 2,
        borderColor: '#4A90E2',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '600',
    },
    buttonTextSecondary: {
        color: '#4A90E2',
    }
});
