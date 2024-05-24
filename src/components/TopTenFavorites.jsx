import React from "react";
import { StyleSheet, Text, View, Pressable, Image, FlatList } from "react-native";
import Card from "./Card";
import { colors } from "../constants/colors";
import { useDispatch } from "react-redux";
import { useDeleteFavoriteMutation } from "../services/services";

const TopTenFavorites = ({
    favorites,
    setDrinkId=()=>{},
    navigation,
    route
}) => {

    const [triggerDeleteFavorite, response] = useDeleteFavoriteMutation();
    const dispatch = useDispatch();

    // const deleteFavorite = async (key) => {
    //     console.log("Deleting favorite with ID:", key);
    //     try {
    //         await triggerDeleteFavorite(id);
    //         console.log("Deleted favorite with ID:", key);
    //     } catch (error) {
    //         console.log("Error deleting favorite:", error);
    //     }
    // };

    return (
        <Card style={styles.container}>
            <Image
                source={{ uri: favorites[0].imagen }}
                style={styles.imagen}
            />
            <Text style={styles.tituloPrincipal}>{favorites[0].nombre}</Text>
            <View style={{ padding: 10 }}>
                <Text style={styles.titulo}>Ingredientes:</Text>
                <FlatList
                    data={favorites[0].ingredientes}
                    renderItem={({ item }) => (
                        <Text style={styles.descripcion}>{item}</Text>
                    )}
                />
                <Text style={styles.titulo}>
                    Instrucciones de preparación:{" "}
                </Text>
                <Text style={styles.instrucciones}>
                    {favorites[0].instrucciones
                        ? favorites[0].instrucciones
                        : favorites[0].instruccionesIngles}
                </Text>
            </View>
        </Card>
    );
};

export default TopTenFavorites;

const styles = StyleSheet.create({
    container: {
        maxWidth: 350,
        borderColor: "black",
        borderWidth: 1,
        backgroundColor: colors.color2,
        marginTop: 25,
        opacity: 0.95,
    },
    tituloPrincipal: {
        fontSize: 30,
        fontWeight: "900",
        textAlign: "center",
        marginTop: 5,
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
        width: 300,
        height: 300,
        marginHorizontal: 10,
        borderRadius: 10,
    },
    eliminar: {
        backgroundColor: colors.color2,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "black",
        width: 200,
        fontWeight: "900",
        marginHorizontal: 10,
    },
});
