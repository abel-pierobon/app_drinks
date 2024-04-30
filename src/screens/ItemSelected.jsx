import { StyleSheet, Text, View, FlatList, Pressable } from "react-native";
import React from "react";
import bebidas from "../db/bebidas.json";
import Drink from "../components/Drink";

const ItemSelected = ({ itemIdSelected , setItemIdSelected = () => {}}) => {

    return (
        <View>
            <FlatList
                data={bebidas.filter((item) => item.id === itemIdSelected)}
                renderItem={({ item }) => <Drink drink={item} setItemIdSelected={setItemIdSelected}/>}
            />
        </View>
    );
};

export default ItemSelected;

const styles = StyleSheet.create({});
