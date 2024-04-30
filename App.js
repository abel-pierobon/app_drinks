import React, { useState } from "react";
import { StatusBar, Image, StyleSheet, View } from "react-native";
import Home from "./src/screens/Home";
import imagen from "./src/imagen.jpg";
import { colors } from "./src/constants/colors";
import Header from "./src/components/Header";
import ItemListCategories from "./src/screens/ItemListCategories";
import ItemSelected from "./src/screens/ItemSelected";

export default function App() {
    const [categorySelected, setCategorySelected] = useState("");
    const [itemIdSelected, setItemIdSelected] = useState("");
    return (
        <View style={styles.container}>
            <Image
                style={styles.backgroundImage}
                source={imagen}
                resizeMode="cover"
            />
            <Header
                setCategorySelected={setCategorySelected}
                categorySelected={categorySelected}
            />

            {!categorySelected && !itemIdSelected ? (
                <Home setCategorySelected={setCategorySelected} />
            ) : categorySelected ? (
                <ItemListCategories
                    categorySelected={categorySelected}
                    setItemIdSelected={setItemIdSelected}
                    setCategorySelected={setCategorySelected}
                />
            ) : (
                <ItemSelected itemIdSelected={itemIdSelected} setItemIdSelected={setItemIdSelected} />
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
        marginBottom: 5,
        marginTop: StatusBar.currentHeight || 0,
    },
    backgroundImage: {
        width: "100%",
        height: "100%",
        position: "absolute",
        zIndex: -1,
        opacity: 0.5,
    },
});
