import { Pressable, StyleSheet, Text } from "react-native";
import React from "react";
import Card from "./Card";
import { Image } from "react-native";
import { colors } from "../constants/colors";
const DrinkItem = ({ drink, setItemIdSelected = () => {},setCategorySelected = () => {} }) => {

    return (
        <Card style={styles.container}>
            <Pressable onPress={() => {setItemIdSelected(drink.id);setCategorySelected('')}}>
                <Image source={{ uri: drink.imagen }} style={styles.imagen} />
                <Text style={styles.titulo}>{drink.nombre}</Text>
            </Pressable>
        </Card>
    );
};

export default DrinkItem;

const styles = StyleSheet.create({
    container: {
        maxWidth: 500,
        maxHeight: 400,
    },
    titulo: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
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
});
