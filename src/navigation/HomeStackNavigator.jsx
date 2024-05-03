import React from "react";
import { StyleSheet, Text,View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import ItemListCategories from "../screens/ItemListCategories";
import ItemSelected from "../screens/ItemSelected";
import Header from "../components/Header";
import { colors } from "../constants/colors";


const Stack = createNativeStackNavigator();

const HomeStackNavigator = () => {
    return (

        
        <Stack.Navigator
            initialRouteName="Home"
            screenOptions={({ route }) => ({
                header: ({ navigation }) => (
                    <Header
                        title={
                            route.name === "Home" ? (
                                "Categorias"
                            ) : route.name === "ItemListCategories" ? (
                                <Text>
                                    Categoria:{" "}
                                    <Text style={{ color: colors.color1  }}>
                                        {route.params.category}
                                    </Text>
                                </Text>
                            ) : (
                                "Preparación"
                            )
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
        
    );
};
export default HomeStackNavigator;

const styles = StyleSheet.create({});
