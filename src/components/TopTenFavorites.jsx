import { StyleSheet, Text, View,Pressable, Image } from "react-native";
import React from "react";
import Card from "./Card";
import { colors } from "../constants/colors";
const TopTenFavorites = ({navigation,favorites}) => {
    return (
        <Card style={styles.container}>
            <Pressable onPress={() => {navigation.navigate('ItemSelected',{itemIdSelected:favorites.id})}}>
                <Image source={{ uri: favorites[0].imagen }} style={styles.imagen} />
                <Text style={styles.titulo}>{favorites[0].nombre}</Text>
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
});
