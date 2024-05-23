import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import React from "react";
import Card from "./Card";
import { colors } from "../constants/colors";
import { useDispatch } from "react-redux";
import { useDeleteFavoriteMutation } from "../services/services";

const TopTenFavorites = ({ setItemIdSelected = () => {}, navigation, favorites }) => {
    const [triggerDeleteFavorite, response] = useDeleteFavoriteMutation();
    const dispatch = useDispatch();
    
    const deleteFavorite = async () => {
    const localId = response;
        console.log(localId);
        try {
            await triggerDeleteFavorite(favorites[0].id);
            console.log("Deleted favorite with ID:", favorites[0].id);
        } catch (error) {
            console.log("Error deleting favorite:", error);
        }
    }

    const handleItemSelected = () => {
        navigation.navigate('ItemSelected', { itemIdSelected: favorites[0].id });
        dispatch(setItemIdSelected(favorites[0].id));
        console.log("Selected item ID:", favorites[0].id);
    }

    return (
        <Card style={styles.container}>
            <Pressable onPress={handleItemSelected}>
                <Image source={{ uri: favorites[0].imagen }} style={styles.imagen} />
                <Text style={styles.titulo}>{favorites[0].nombre}</Text>
            </Pressable>
            <Pressable onPress={deleteFavorite} style={styles.eliminar}> 
                <Text style={styles.titulo}>Quitar</Text>
            </Pressable>
        </Card>
    );
};

export default TopTenFavorites;

const styles = StyleSheet.create({
    container: {
        maxWidth: 300,
        maxHeight: 300,
        borderColor: "black",
        borderWidth: 1,
        backgroundColor: colors.color2,
    },
    titulo: {
        fontSize: 20,
        fontWeight: "900",
        textAlign: "center",
        marginTop: 5,
        color: "black",
        justifyContent: "center",
    },
    imagen: {
        width: 200,
        height: 200,
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
