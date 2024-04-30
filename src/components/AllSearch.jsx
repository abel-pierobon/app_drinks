import { useState } from "react";
import { StyleSheet, Text, View,TextInput,Pressable } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "../constants/colors";

const AllSearch = ({busquedaGeneral,setBusquedaGeneral}) => {

    return (
        <View style={styles.container}>
            <TextInput
                placeholder="Busca tu bebida"
                value={busquedaGeneral}
                onChangeText={setBusquedaGeneral}
                style={styles.input}
                fontWeight="900"
                fontSize={15}
                placeholderTextColor="black"
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
        alignItems: "space-evenly",
        justifyContent: "center",
        marginHorizontal: 10,
        marginVertical: 10,
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 10,
    },
    input: {
        padding: 10,
        width: "60%",
        height: 35,
    }
});
