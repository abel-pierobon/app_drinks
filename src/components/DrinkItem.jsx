import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Card from "./Card";
import { Image } from "react-native";
import { colors } from "../constants/colors";
const DrinkItem = ({drink}) => {
    return (
        <Card style={styles.container}>
            <Image  source={{ uri: drink.imagen }} style={styles.imagen} />
            <Text style={styles.titulo}>{drink.nombre}</Text>
        </Card>
    );
};

export default DrinkItem;

const styles = StyleSheet.create({
    container: {
        maxWidth: 300,
    },
    titulo: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        marginTop: 5,
        color: 'black',
        justifyContent: "center",
    },
    imagen: {
        width: 200, 
        height: 200,
        marginHorizontal: 10,
        borderRadius: 10
    }
});
