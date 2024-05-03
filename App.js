import React, { useState } from "react";
import { StatusBar, Image, StyleSheet, Platform, View, Text } from "react-native";
import { colors } from "./src/constants/colors";
import { SafeAreaView } from "react-native";
import Navigator from "./src/navigation/Navigator";
export default function App() {
    return (
                <Navigator />
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        marginBottom: 5,
        // marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 10,
        backgroundColor: colors.color2,
        alignItems: "center",
        borderRadius: 5,
        borderWidth: 1,

    },
    backgroundImage: {
        width: "100%",
        height: "100%",
        position: "absolute",
        zIndex: -1,
        opacity: 0.45,
    },
});
