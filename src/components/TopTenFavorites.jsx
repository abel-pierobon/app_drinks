import React, { useState } from "react";
import { StyleSheet, Text, View, Pressable, Image, FlatList } from "react-native";
import Card from "./Card";
import { colors } from "../constants/colors";
import cerrar from "../Icons/cerrar.png";
import { useDeleteFavoriteMutation } from "../services/services";

const TopTenFavorites = ({ favorite, navigation, route }) => {
    const [triggerDeleteFavorite, response] = useDeleteFavoriteMutation();
    const [message, setMessage] = useState("");

    const deleteFavorite = async (key) => {
        try {
            setMessage("Favorito eliminado con éxito");
            setTimeout(() => {
                setMessage("");
            },3000)
            await triggerDeleteFavorite(key);
        } catch (error) {
            console.log("Error deleting favorite:", error);
        }
    };

    return (
        <Card style={styles.container}>
            <Pressable
                style={styles.eliminar}
                onPress={() => deleteFavorite(favorite.key)}
            >
                <Image
                        source={cerrar}
                        style={{ width: 30, height: 30 }}
                    />
            </Pressable>
            <Image
                source={{ uri: favorite[0].imagen }}
                style={styles.imagen}
            />
            <Text style={styles.tituloPrincipal}>{favorite[0].nombre}</Text>
            <View style={{ padding: 10 }}>
                <Text style={styles.titulo}>Ingredientes:</Text>
                <FlatList
                    data={favorite[0].ingredientes}
                    renderItem={({ item }) => (
                        <Text style={styles.descripcion}>{item}</Text>
                    )}
                />
                <Text style={styles.titulo}>
                    Instrucciones de preparación:{" "}
                </Text>
                <Text style={styles.instrucciones}>
                    {favorite[0].instrucciones
                        ? favorite[0].instrucciones
                        : favorite[0].instruccionesIngles}
                </Text>
            </View>
        </Card>
    );
};

export default TopTenFavorites;

const styles = StyleSheet.create({
    container: {
        width: 300,
        borderColor: "black",
        borderWidth: 1,
        backgroundColor: colors.color2,
        marginTop: 10,
        opacity: 0.95,
    },
    tituloPrincipal: {
        fontSize: 25,
        fontWeight: "900",
        textAlign: "center",
        marginTop: 1,
        color: "black",
        justifyContent: "center",
    },
    titulo: {
        fontSize: 20,
        fontWeight: "900",
        marginTop: 5,
        color: "black",
        justifyContent: "center",
    },
    imagen: {
        width: 250,
        height: 250,
        marginHorizontal: 10,
        borderRadius: 10,
    },
    eliminar: {
        alignItems: "flex-end",
        marginRight: 10,
        marginBottom: 5,
    },
    instrucciones: {
        fontSize: 12,
        textTransform: "capitalize",
    },
    descripcion: {
        fontSize: 16,
    },
});
