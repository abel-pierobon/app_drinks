import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../constants/colors";
import Card from "./Card";
const CategoryItem = ({category,selectCategory=()=>{}}) => {
    return (
        <Card style={styles.container}>
            <Pressable
            onPress={()=>selectCategory(category.name)}>
                <Text style={styles.title}>{category.name}</Text>
            </Pressable>
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
