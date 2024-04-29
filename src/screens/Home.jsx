import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import category from "../db/category.json";
import { colors } from "../constants/colors";
import CategoryItem from "../components/CategoryItem";
const Home = () => {
    return (
        <View>
            <FlatList
                data={category}
                renderItem={({ item }) => <CategoryItem item={item} />}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
};

export default Home;

const styles = StyleSheet.create({
    
});
