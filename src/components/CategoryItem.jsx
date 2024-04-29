import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../constants/colors";
import Card from "./Card";
const CategoryItem = ({item}) => {
    return (
        <Card style={styles.container}>
            <Text style={styles.title}>{item.name}</Text>
        </Card>
    );
};

export default CategoryItem;

const styles = StyleSheet.create({
    
    title: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        marginTop: 5,
        color: colors.teel900,
    },
});
