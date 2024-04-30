import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import category from "../db/category.json";
import { colors } from "../constants/colors";
import CategoryItem from "../components/CategoryItem";
const Home = ({setCategorySelected}) => {
    return (
        <View>
            <FlatList
                data={category}
                renderItem={({ item }) => <CategoryItem selectCategory={setCategorySelected} category={item}/>}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    );
};

export default Home;

const styles = StyleSheet.create({

});
