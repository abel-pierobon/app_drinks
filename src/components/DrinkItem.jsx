import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Card from "./Card";
import { Image } from "react-native";
import { colors } from "../constants/colors";
const DrinkItem = ({drink}) => {
    return (
        <Card >
            <Image source={{ uri: drink.imagen }} style={{ width: 200, height: 200 }} />
            <Text style={styles.titulo}>{drink.nombre}</Text>
        </Card>
    );
};

export default DrinkItem;

const styles = StyleSheet.create({
    titulo: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        marginTop: 5,
        color: colors.teel900,
    },
});
