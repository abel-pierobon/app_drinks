import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import React from "react";
import Card from "./Card";
import { colors } from "../constants/colors";

const ShortList = ({ drink, navigation }) => {
    return (
        <Card style={styles.container}>
            <Image source={{ uri: drink.imagen }} style={styles.imagen} />
            <View style={{ padding: 10 }}>
                <Text style={styles.titulo}>Nombre de bebida: </Text>
                <Text style={styles.descripcion}>{drink.nombre}</Text>
                <Text style={styles.titulo}>Ingredientes:</Text>
                <FlatList
                    data={drink.ingredientes}
                    renderItem={({ item }) => (
                        <Text style={styles.descripcion}>{item}</Text>
                    )}
                />
                <Text style={styles.titulo}>
                    Instrucciones de preparación:{" "}
                </Text>
                <Text style={styles.instrucciones}>
                    {drink.instrucciones ? drink.instrucciones : drink.instruccionesIngles}
                </Text>
            </View>
        </Card>
    );
};

export default ShortList;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 20,
        marginHorizontal: 50,
        borderRadius: 10,
        borderWidth: 1,
        backgroundColor: colors.color2,
    },
    imagen: {
        width: 250,
        height: 250,
        marginHorizontal: 10,
        borderRadius: 10,
    },
    titulo: {
        fontSize: 20,
        fontWeight: "bold",
    },
    descripcion: {
        fontSize: 16,
    },
    instrucciones: {
        fontSize: 12,
    },
});
