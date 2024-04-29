import React from "react";
import { StatusBar, Image, StyleSheet, View } from "react-native";
import Home from "./src/screens/Home";
import imagen from "./src/imagen.jpg";
import { colors } from "./src/constants/colors";
import Header from "./src/components/Header";
import ItemListCategories from "./src/components/ItemListCategories";
export default function App() {
    return (
        <View style={styles.container}>
            <Image
                style={styles.backgroundImage}
                source={imagen}
                resizeMode="cover"
            />
            <Header />
            {/* <Home /> */}
            <ItemListCategories />
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
        marginTop: 5,
    },
    backgroundImage: {
        width: "100%",
        height: "100%",
        position: "absolute",
        zIndex: -1,
        opacity: 0.45,
    },
});
