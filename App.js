import React, { useState } from "react";
import { StatusBar, Image, StyleSheet, Platform, View} from "react-native";
import { colors } from "./src/constants/colors";
import { SafeAreaView } from "react-native";
import Navigator from "./src/navigation/Navigator";

export default function App() {
    const [categorySelected, setCategorySelected] = useState("");
    const [itemIdSelected, setItemIdSelected] = useState("");

    return (
            <Navigator />
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        marginBottom: 5,
        // marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
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
