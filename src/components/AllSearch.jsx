import { useState } from "react";
import { StyleSheet, Text, View, TextInput, Pressable } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "../constants/colors";

const AllSearch = ({ busquedaGeneral, setBusquedaGeneral }) => {
    return (
        <View style={styles.container}>
            <TextInput
                placeholder="Toca aquí para buscar tu bebida preferida..."
                value={busquedaGeneral}
                onChangeText={setBusquedaGeneral}
                style={styles.input}
                fontWeight="900"
                fontSize={15}
                placeholderTextColor="black"
            />
            {busquedaGeneral ? (
                <Pressable onPress={() => setBusquedaGeneral("")}>
                    <MaterialIcons name="cancel" size={36} color="black" />
                </Pressable>
            ) : null}
        </View>
    );
};
export default AllSearch;
const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
        backgroundColor: colors.color2,
        padding: 1,
        opacity: 0.9,
        width: "100%",
    },
    input: {
        alignItems: "center",
        padding: 10,
        width: "80%",
        textAlign: "center",
    },
});
