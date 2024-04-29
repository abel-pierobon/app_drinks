import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import bebidas from "../db/bebidas.json";
import { colors } from "../constants/colors";
import { FlatList } from "react-native";
import DrinkItem from "./DrinkItem";
import Search from "./Search";

const ItemListCategories = () => {
    const [busqueda, setBusqueda] = useState("");
    const [bebidasFiltradas, setBebidasFiltradas] = useState([]);

    const goBack = () => {
        setBusqueda("");
    }
    useEffect(() => {
        if (busqueda.trim() === "") {
            setBebidasFiltradas(bebidas);
        } else {
            const bebidasFilter = bebidas.filter(item =>
                item.nombre.toLocaleLowerCase().includes(busqueda)

            );
            setBebidasFiltradas(bebidasFilter);
        }
    }, [busqueda]);

    return (
        <View>
            <Search goBack={goBack} busqueda={busqueda} setBusqueda={setBusqueda}/>
            <FlatList
                data={bebidasFiltradas}
                renderItem={({ item }) => <DrinkItem drink={item}/>}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    );
};

export default ItemListCategories;

const styles = StyleSheet.create({});
