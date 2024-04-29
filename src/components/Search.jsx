import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
const Search = ({ goBack, busqueda, setBusqueda }) => {
    return (
        <View style={styles.container}>
            <TextInput
                placeholder="Busca tu bebida"
                value={busqueda}
                onChangeText={setBusqueda}
            />
            <View style={{ flexDirection: "row", gap: 10 }}>
                <Pressable onPress={() => setBusqueda("")}>
                    <MaterialIcons name="cancel" size={24} color="black" />
                </Pressable>
            </View>
        </View>
    );
};

export default Search;

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 10,
    },
});
