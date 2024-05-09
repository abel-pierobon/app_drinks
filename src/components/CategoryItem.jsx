import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../constants/colors";
import Card from "./Card";
import { useDispatch, useSelector } from "react-redux";
import { setCategorySelected } from "../features/drinkSlice";

const CategoryItem = ({ category, navigation }) => {
    const dispatch =useDispatch()

    const handleNavigate = () => {
        dispatch(setCategorySelected(category.name))
        navigation.navigate("ItemListCategories", {
            category: category.name,
        })
    }
    return (
        <Card style={styles.container}>
            <Pressable
                onPress={handleNavigate}
            >
                <Text style={styles.title}>{category.name}</Text>
            </Pressable>
        </Card>
    );
};

export default CategoryItem;

const styles = StyleSheet.create({
    container: {
        minWidth: 250,
        marginTop: 10,
        borderColor: "black",
        borderWidth: 2,
        borderRadius: 10,
        opacity: 0.9,
        backgroundColor: colors.color5,
    },
    title: {
        fontSize: 28,
        fontWeight: "900",
        textAlign: "center",
        marginTop: 5,
        color: "black",
        
    },
});
