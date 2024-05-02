import { StyleSheet, Text, View, FlatList, Pressable } from "react-native";
import React from "react";
import bebidas from "../db/bebidas.json";
import Drink from "../components/Drink";

const ItemSelected = ({ setItemIdSelected = () => {}, route, navigation }) => {
    const { itemIdSelected } = route.params;

    return (
        <View>
            <FlatList
                data={bebidas.filter((item) => item.id === itemIdSelected)}
                renderItem={({ item }) => (
                    <Drink drink={item} setItemIdSelected={setItemIdSelected} 
                    goBack={() => navigation.goBack()}/>
                )}
            />
        </View>
    );
};

export default ItemSelected;

const styles = StyleSheet.create({});
