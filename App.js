import React, { useState } from "react";
import { StatusBar, Image, StyleSheet, View } from "react-native";
import Home from "./src/screens/Home";
import { colors } from "./src/constants/colors";
import Header from "./src/components/Header";
import ItemListCategories from "./src/screens/ItemListCategories";
import ItemSelected from "./src/screens/ItemSelected";
import Search from "./src/components/Search";

export default function App() {
    const [categorySelected, setCategorySelected] = useState("");
    const [itemIdSelected, setItemIdSelected] = useState("");

    return (
        <View style={styles.container}>
            <Image
                style={styles.backgroundImage}
                source={{
                    uri: "https://firebasestorage.googleapis.com/v0/b/appasados-d7bd8.appspot.com/o/imagenes%2Fbar.jpg?alt=media&token=403b0ecd-4bf1-443a-a54c-41589539a542",
                }}
                resizeMode="cover"
            />
            <Header
                setCategorySelected={setCategorySelected}
                categorySelected={categorySelected}
            />

            {!categorySelected && !itemIdSelected ? (
                <Home
                    setCategorySelected={setCategorySelected}
                    setItemIdSelected={setItemIdSelected}
                />
            ) : categorySelected ? (
                <ItemListCategories
                    categorySelected={categorySelected}
                    setItemIdSelected={setItemIdSelected}
                    setCategorySelected={setCategorySelected}
                />
            ) : (
                <ItemSelected
                    itemIdSelected={itemIdSelected}
                    setItemIdSelected={setItemIdSelected}
                />
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
        opacity: 0.99,
    },
});
