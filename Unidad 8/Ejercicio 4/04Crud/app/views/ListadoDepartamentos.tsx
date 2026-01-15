import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ListadoDepartamentosScreen() {
    return (
        <View style={styles.container}>
            <Text>Listado de Departamentos</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});