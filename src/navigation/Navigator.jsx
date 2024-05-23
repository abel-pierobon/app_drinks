import { StyleSheet, Image } from "react-native";
import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import BottomTabNavigator from "./BottomTabNavigator";
import { useSelector } from "react-redux";
import LoginNavigator from "./LoginNavigator";


const Navigator = () => {



    return (
            <NavigationContainer style={styles.container}>
                {/* {user ? <BottomTabNavigator /> : <LoginNavigator/>} */}
                <BottomTabNavigator/>
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
