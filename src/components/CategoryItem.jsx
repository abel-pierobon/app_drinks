import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import Card from "./Card";
import { useDispatch, useSelector } from "react-redux";
import { setCategorySelected } from "../features/drinkSlice";
const CategoryItem = ({ category, navigation }) => {
    const dispatch = useDispatch();

    const handleNavigate = () => {
        dispatch(setCategorySelected(category));
        navigation.navigate("ItemListCategories", {
            category: category,
        });
    };
    return (
        <Card style={styles.container}>
            <Pressable onPress={handleNavigate}>
                <Text style={styles.title}>{category}</Text>
            </Pressable>
        </Card>
    );
};
export default CategoryItem;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        minWidth: 20,
        marginTop: 10,
        borderColor: "black",
        borderBottomWidth: 2,
    },
    title: {
        fontSize: 20,
        fontWeight: "900",
        color: "black",
    },
});
