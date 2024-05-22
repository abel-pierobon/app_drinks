import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import ItemListCategories from "../screens/ItemListCategories";
import ItemSelected from "../screens/ItemSelected";
import Header from "../components/Header";
import { colors } from "../constants/colors";

const Stack = createNativeStackNavigator();

const HomeStackNavigator = () => {
    return (
        <View style={styles.container}>
            <Stack.Navigator
                initialRouteName="Home"
                screenOptions={({ route }) => ({
                    header: () => (
                        <Header
                            title={
                                route.name === "Home"
                                    ? "Categorías"
                                    : route.name === "ItemListCategories"
                                    ? route.params.category
                                    : "Preparación"
                            }
                        />
                    ),
                })}
            >
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen
                    name="ItemListCategories"
                    component={ItemListCategories}
                />
                <Stack.Screen name="ItemSelected" component={ItemSelected} />
            </Stack.Navigator>
        </View>
    );
};

export default HomeStackNavigator;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.color1,
        justifyContent: "center",
        alignContent: "center",
    },
});
