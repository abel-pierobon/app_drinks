import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import Card from "./Card";
import { colors } from "../constants/colors";

const RecetsCommunity = ({ drink }) => {
    return (
        <View style={styles.container}>
            <Card style={styles.card}>
                <Image source={{ uri: drink.image }} style={styles.imagen} />
                <Text style={{ fontWeight: "bold", fontSize: 25, margin: 10 }}>
                    {drink.nombre}
                </Text>
                <Text style={styles.title}>Ingredientes</Text>
                <Text style={styles.text}>{drink.ingredientes}</Text>
                <Text style={styles.title}>Preparación</Text>
                <Text style={styles.text}>{drink.instruciones}</Text>
            </Card>
        </View>
    );
};
export default RecetsCommunity;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    imagen: {
        width: 200,
        height: 200,
        margin: 10,
        alignSelf: "center",
        borderRadius: 10,
    },
    card: {
        width: 250,
        height: "80%",
        margin: 10,
        alignSelf: "center",
        borderRadius: 10,
        backgroundColor: colors.color2,
        borderWidth: 2,
        borderColor: "black",
    },
    title: {
        fontWeight: "bold",
        fontSize: 20,
        backgroundColor: colors.color2,
        width: "100%",
        textAlign: "left",
    },
    text: {
        color: "black",
        fontSize: 15,
        textAlign: "justify",
    },
});
