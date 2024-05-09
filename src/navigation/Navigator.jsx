import { StyleSheet, Image } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import BottomTabNavigator from "./BottomTabNavigator";
import Home from "../screens/Home";
import HomeStackNavigator from "./HomeStackNavigator";
import { colors } from "../constants/colors";
import { View } from "react-native-web";

const Navigator = () => {
    return (
            <NavigationContainer style={styles.container}>
                <BottomTabNavigator />
            </NavigationContainer> 
    );
};

export default Navigator;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
    },
});
