import { StyleSheet, View, Image } from "react-native";
import React, { useEffect, useState } from "react";
import bebidas from "../db/bebidas.json";
import { colors } from "../constants/colors";
import { FlatList } from "react-native";
import DrinkItem from "../components/DrinkItem";
import Search from "../components/Search";

const ItemListCategories = ({
    setItemIdSelected,
    setCategorySelected,
    route,navigation 
}) => {
    const [busqueda, setBusqueda] = useState("");
    const [bebidasFiltradas, setBebidasFiltradas] = useState([]);
    const [categoryDrink, setCategoryDrink] = useState([]);
    const {category: categorySelected}=route.params
    useEffect(() => {
        if (categorySelected) {
            const categoryFilter = bebidas.filter(
                (item) => item.categoria === categorySelected
            );
            setCategoryDrink(categoryFilter);
        } else {
            setCategoryDrink(bebidas);
        }
    }, [categorySelected]);

    useEffect(() => {
        if (busqueda.trim() === "") {
            setBebidasFiltradas(categoryDrink);
        } else {
            const bebidasFilter = categoryDrink.filter((item) =>
                item.nombre.toLocaleLowerCase().includes(busqueda.toLowerCase())
            );
            setBebidasFiltradas(bebidasFilter);
        }
    }, [busqueda, categoryDrink]);

    return (
        <View style={styles.container}>
            <Image
                style={styles.backgroundImage}
                source={{
                    uri: "https://firebasestorage.googleapis.com/v0/b/appasados-d7bd8.appspot.com/o/imagenes%2Ffotor-20240504111637.png?alt=media&token=23f53bdf-90dd-4b64-8703-6e5d6c03d6a4",
                }}
                resizeMode="cover"
            />
            <Search
                goBack={() => navigation.goBack()}
                busqueda={busqueda}
                setBusqueda={setBusqueda}
                setCategorySelected={setCategorySelected}
                categorySelected={categorySelected}
            />
            <FlatList
                data={bebidasFiltradas}
                renderItem={({ item }) => (
                    <DrinkItem
                        drink={item}
                        setItemIdSelected={setItemIdSelected}
                        setCategorySelected={setCategorySelected}
                        navigation={navigation}
                    />
                )}
                keyExtractor={(item, index) => index.toString()}
                showsVerticalScrollIndicator={false}
                // horizontal= {true}
                // style={{ marginTop: 75, marginBottom: 25 }}
            />
        </View>
    );
};

export default ItemListCategories;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        width: "100%",
    },
    
    backgroundImage: {
        width: "100%",
        height: "100%",
        position: "absolute",
        zIndex: -1,
        opacity: 0.95,
    },
});
