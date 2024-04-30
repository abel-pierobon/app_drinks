import { useState } from "react";
import { StyleSheet, Text, View,TextInput,Pressable } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const AllSearch = ({busquedaGeneral,setBusquedaGeneral}) => {

    return (
        <View style={styles.container}>
            <TextInput
                placeholder="Busca tu bebida"
                value={busquedaGeneral}
                onChangeText={setBusquedaGeneral}
                style={styles.input}
            />
            <Pressable onPress={() => setBusquedaGeneral("")}>
                    <MaterialIcons name="cancel" size={36} color="black" />
                </Pressable>
        </View>
    );
};
export default AllSearch;
const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginHorizontal: 10,
        marginVertical: 10,
    },
    input: {
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 10,
        padding: 10,
        width: "80%",
    }
});
