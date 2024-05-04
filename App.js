import React, { useState } from "react";
import { StatusBar, Image, StyleSheet, Platform} from "react-native";
import { colors } from "./src/constants/colors";
import { SafeAreaView } from "react-native";
import Navigator from "./src/navigation/Navigator";
export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            {/* <Image
                style={styles.backgroundImage}
                source={{
                    uri: "https://firebasestorage.googleapis.com/v0/b/appasados-d7bd8.appspot.com/o/imagenes%2Fbar.jpg?alt=media&token=403b0ecd-4bf1-443a-a54c-41589539a542",
                }}
                resizeMode="cover"
            /> */}
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
    navigator: {
        flex: 1,
        opacity: 0.45,
    },
    // backgroundImage: {
    //     width: "100%",
    //     height: "100%",
    //     position: "absolute",
    //     zIndex: -1,
    //     opacity: 0.99,
    // },
});
