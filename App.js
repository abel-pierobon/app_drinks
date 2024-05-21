import React, { useState } from "react";
import { StatusBar, Image, StyleSheet, Platform } from "react-native";

import { colors } from "./src/constants/colors";
import { SafeAreaView } from "react-native";
import Navigator from "./src/navigation/Navigator";
import { Provider } from "react-redux";
import store from "./src/store";
export default function App() {
    return (
        <Provider store={store}>
            <SafeAreaView style={styles.container}>
                <Navigator />
                {/* <StatusBar barStyle="auto" /> */}
            </SafeAreaView>
        </Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //descomentar luego y comentar <StatusBar/>
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : "auto",
    },
    backgroundImage: {
        width: "100%",
        height: "100%",
        position: "absolute",
        zIndex: -1,
        opacity: 0.7,
    },
});
