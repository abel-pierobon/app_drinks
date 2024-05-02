import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "../components/Header";
import Home from "../screens/Home";
import ItemListCategories from "../screens/ItemListCategories";
import ItemSelected from "../screens/ItemSelected";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack= createNativeStackNavigator(); 

const Navigator = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator
            initialRouteName="Home"
            screenOptions={
                ({route})=>({
                    header: () =>{
                        return  <Header title={route.name ==="Home" ? "Categorias" : route.name === "ItemListCategories" ? route.params.category : 'preparación'}/>
                    }
                })
            }>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="ItemListCategories" component={ItemListCategories} />
                <Stack.Screen name="ItemSelected" component={ItemSelected} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigator;

const styles = StyleSheet.create({});
