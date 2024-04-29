import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import bebidas from "../db/bebidas.json";
import { colors } from "../constants/colors";
import { FlatList } from "react-native";
import DrinkItem from "./DrinkItem";
import Search from "./Search";

const ItemListCategories = () => {
    const [busqueda, setBusqueda] = useState("");
    // console.log(bebidas);
    const onSearch = (busqueda) => {
        const bebidasFilter = bebidas.filter((item) => item.nombre.toLocaleLowerCase() === busqueda.toLocaleLowerCase());
        setBusqueda(bebidasFilter)
    }
    return (
        <View>
            <Search onSearch={onSearch}/>
            <FlatList
                data={busqueda.length === 0 ? bebidas : busqueda}
                renderItem={({ item }) => <DrinkItem drink={item} />}
                keyExtractor={(item, index) => index.toString()}
                />
        </View>
    );
};

export default ItemListCategories;

const styles = StyleSheet.create({});
