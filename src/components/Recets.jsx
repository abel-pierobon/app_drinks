import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React from "react";
import Card from "./Card";
import { colors } from "../constants/colors";
import cerrar from "../Icons/cerrar.png";
import { useDeleteNewDrinkMutation } from "../services/services";

const Recets = ({ drink }) => {
    const [triggerDeleteNewDrink,response]=useDeleteNewDrinkMutation()
    
    const deleteNewDrink = async (key) => {
        try {
            await triggerDeleteNewDrink(key)
        } catch (error) {
        }
    };
    return (
        <View style={styles.container}>
            <Card style={styles.card}>
            <Pressable
                style={styles.eliminar}
                onPress={() => deleteNewDrink(drink.key)}
            >
                <Image
                        source={cerrar}
                        style={{ width: 30, height: 30 }}
                    />
            </Pressable>
                <Image source={{ uri: drink.image }} style={styles.imagen} />
                <Text style={{ fontWeight: "bold", fontSize: 25, margin: 10 }}>
                    {drink.nombre}
                </Text>
                <Text style={styles.title}>Ingredientes</Text>
                <Text style={styles.text}>{drink.ingredientes}</Text>
                <Text style={styles.title}>Preparación</Text>
                <Text style={styles.text}>{drink.instruciones}</Text>
                    <Text style={{...styles.title,marginRight:10}}>Usuario</Text>
                    <Text style={styles.text}>{drink.user}</Text>
            </Card>
        </View>
    );
};

export default Recets;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    imagen: {
        width: 250,
        height: 250,
        margin: 10,
        alignSelf: "center",
        borderRadius: 10,
    },
    card: {
        width: 300,
        height: '80%',
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
