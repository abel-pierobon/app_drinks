import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const Search = ({ busqueda, setBusqueda,setCategorySelected,categorySelected }) => {
    const goBack = () => {
        setCategorySelected("");
    }
    return (
        <View style={styles.container}>
            <TextInput
                placeholder="Busca tu bebida"
                value={busqueda}
                onChangeText={setBusqueda}
                style={styles.input}
                fontWeight="900"
                fontSize={15}
                placeholderTextColor="black"
            />
            <View style={{ flexDirection: "row", gap: 10 }}>
                <Pressable onPress={() => setBusqueda("")}>
                    <MaterialIcons name="cancel" size={36} color="black" />
                </Pressable>
                <Pressable onPress={goBack} >
                    <AntDesign name="back" size={36} color="black" />
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
        justifyContent: "center",
        gap: 10,
    },
    input: {
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 10,
        padding: 10,
        width: "65%",
    }
});
