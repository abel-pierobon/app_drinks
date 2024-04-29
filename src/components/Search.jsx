import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons,MaterialCommunityIcons } from "@expo/vector-icons";
const Search = ({onSearch=()=>{},error='',goBack=()=>{}}) => {
    const [busqueda, setBusqueda] = useState("");
    return (
        <View style={styles.container}>
            <TextInput
                placeholder="Busca tu bebida"
                value={busqueda}
                onChangeText={setBusqueda}
                style={styles}
            />
            <View style={{ flexDirection: "row" }}>
                <Pressable onPress={() => onSearch(busqueda)}>
                    <FontAwesome5 name="search" size={24} color="black" />
                </Pressable>
                <Pressable onPress={goBack}>
                    <Ionicons
                        name="arrow-back-circle-outline"
                        size={24}
                        color="black"
                    />
                </Pressable>
                <Pressable onPress={() => setBusqueda("")}>
                    <MaterialCommunityIcons name="broom" size={24} color="black" />
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
});
