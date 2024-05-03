import { StyleSheet, View} from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import BottomTabNavigator from "./BottomTabNavigator";
import Home from "../screens/Home";
import HomeStackNavigator from "./HomeStackNavigator";
import { colors } from "../constants/colors";


const Navegacion = () => {
    return (
        <NavigationContainer style={styles.container}>
            <BottomTabNavigator />
        </NavigationContainer>
    );
};

export default Navegacion;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.color2,
        marginHorizontal:45
    },
});
