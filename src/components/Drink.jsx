import {
    FlatList,
    StyleSheet,
    Text,
    View,
    Image,
    Pressable,
} from "react-native";
import React from "react";
import Card from "./Card";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "../constants/colors";

const Drink = ({ drink, setItemIdSelected }) => {
    const goBack = () => {
        setItemIdSelected("");
    };
    return (
        <Card style={styles.container}>
            <View style={styles.iconos}>
                <Pressable onPress={goBack} style={{ alignSelf: "flex-end" }}>
                    <MaterialIcons name="favorite" size={24} color="white" />
                </Pressable>
                <Pressable onPress={goBack} style={{ alignSelf: "flex-end" }}>
                    <AntDesign name="back" size={36} color="black" />
                </Pressable>
            </View>
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
                <Text style={styles.instrucciones}>{drink.instrucciones}</Text>
            </View>
        </Card>
    );
};

export default Drink;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:colors.color2,
        borderRadius: 10,
        borderWidth: 1,
    },
    imagen: {
        width: 300,
        height: 300,
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
    iconos: {
        flexDirection: "row",
        gap: 10,
        justifyContent: "space-between",
        alignItems: "space-between",
        width   : "80%",
        marginTop: 10
    },
});
