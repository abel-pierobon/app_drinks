import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { colors } from "../constants/colors";
const InputForm = ({ label, onchange, error = "", isSecure = false }) => {
    const [input, setInput] = useState("");
    const onChangeText = (text) => {
        setInput(text);
        onchange(text);
    };
    return (
        <View style={{...styles.container, ...styles}}>
            <Text style={{ fontWeight: "900", fontSize: 15, }}>{label}</Text>
            <TextInput
                style={styles.input}
                value={input}
                onChangeText={onChangeText}
                secureTextEntry={isSecure}
            />
            {error ? <Text style={styles.error}>{error}</Text> : null}
        </View>
    );
};

export default InputForm;

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        marginTop: 5,
        gap: 5,

    },
    input: {
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 5,
        padding: 10,
        width: "70%",
        fontWeight: "bold",
        fontSize: 15,
    },
    error: {
        color: "red",
        fontWeight: "bold",
        fontSize: 12,
    },
});
