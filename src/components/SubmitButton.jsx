import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../constants/colors";

const SubmitButton = ({onPress, title}) => {
    return (
        <Pressable onPress={onPress} style={styles.container}>
            <Text style={{ color: "black", fontWeight: "bold" }}>{title}</Text>
        </Pressable>
    );
};

export default SubmitButton;

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.color1,
        padding: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "black",
        alignItems: "center",
        textAlign: "center",
        margin: 10,
        marginHorizontal: 90,
    },
});
