import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { colors } from "../constants/colors";
const InputForm = ({ label, onchange, error = "", isSecure=false }) => {
    const [input, setInput] = useState("");
    const onChangeText = (text) => {
        setInput(text);
        onchange(text);
    };
    return (
        <View style={styles.container}>
            <Text style={{ fontWeight: "bold" }}>{label}</Text>
            <TextInput 
            style={styles.input}
            value={input}
            onChangeText={onChangeText}
            secureTextEntry={isSecure}
            />
            {error ? <Text>{error}</Text> : null}
        </View>
    );
};

export default InputForm;

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        margin: 10,
        gap: 10,
    },
    input: {
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
        width: "80%",
        fontWeight: "bold",
    },
});
