import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../constants/colors";
import Card from "./Card";
const CategoryItem = ({ category, selectCategory = () => {} }) => {
    return (
        <Card style={styles.container}>
            <Pressable onPress={() => selectCategory(category.name)}>
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
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 10,
        opacity: 0.9,
        backgroundColor: colors.color2
    },
    title: {
        fontSize: 28,
        fontWeight: "900",
        textAlign: "center",
        marginTop: 5,
        color: 'black',
    },
});
