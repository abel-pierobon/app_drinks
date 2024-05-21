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
            <Text style={{ fontWeight: "900", fontSize: 20, }}>{label}</Text>
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
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 55,
    },
    input: {
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 5,
        padding: 10,
        width: "70%",
        fontWeight: "bold",
        fontSize: 20,
    },
    error: {
        color: "red",
        fontWeight: "bold",
        fontSize: 12,
    },
});
