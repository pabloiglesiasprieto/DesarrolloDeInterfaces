import { router } from "expo-router";
import { Button, StyleSheet, Text, View } from "react-native";

export default function Bienvenida() {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Bienvenido</Text>

            <View style={styles.botonera}>
                <Text style={styles.subtitulo}>¿Qué acción quieres realizar?</Text>

                <View style={styles.buttonWrapper}>
                    <Button
                        title="Listado de personas"
                        onPress={() => router.push("/views/ListadoPersonas")}
                    />
                </View>

                <View style={styles.buttonWrapper}>
                    <Button
                        title="Listado de departamentos"
                        color="#6200ee"
                        onPress={() => router.push("/views/ListadoDepartamentos")}
                    />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5f5f5",
        padding: 20,
    },
    titulo: {
        fontSize: 28,
        fontWeight: "bold",
        marginBottom: 10,
        color: "#333",
    },
    subtitulo: {
        fontSize: 16,
        marginBottom: 20,
        textAlign: "center",
        color: "#666",
    },
    botonera: {
        width: "100%",
        paddingHorizontal: 20,
    },
    buttonWrapper: {
        marginVertical: 10, // Crea espacio entre los botones
    },
});