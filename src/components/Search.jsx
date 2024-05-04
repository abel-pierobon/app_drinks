import { Pressable, StyleSheet, Image, View } from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../constants/colors";
import eliminar from "../Icons/borrar.png";
const Search = ({ busqueda, setBusqueda, goBack }) => {
    return (
        <View style={styles.container}>
            <Pressable onPress={goBack}>
                <Ionicons
                    name="arrow-back-circle-outline"
                    size={36}
                    color="black"
                />
            </Pressable>
            <TextInput
                placeholder="Busca en la categoría .."
                value={busqueda}
                onChangeText={setBusqueda}
                style={styles.input}
                fontWeight="bold"
                fontSize={15}
                placeholderTextColor={"black"}
            />
            {busqueda ? (
                <Pressable onPress={() => setBusqueda("")}>
                    <MaterialIcons name="cancel" size={36} color="black" />
                </Pressable>
            ) : null}
        </View>
    );
};

export default Search;

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
        gap: 5,
        backgroundColor: colors.color2,
        padding: 1,
        opacity: 0.9,
        width: "100%",
    },
    input: {
        borderRadius: 10,
        padding: 10,
        width: "65%",
    },
});
