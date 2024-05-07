import React, { useState } from "react";
import { StatusBar, Image, StyleSheet, Platform} from "react-native";
import { colors } from "./src/constants/colors";
import { SafeAreaView } from "react-native";
import Navigator from "./src/navigation/Navigator";
export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <Navigator style={styles.navigator}/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 1,
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : "auto",
        borderRadius: 5,
        borderWidth: 1,
    },
});
