import { StyleSheet, Image } from "react-native";
import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import BottomTabNavigator from "./BottomTabNavigator";
import { useSelector } from "react-redux";
import LoginNavigator from "./LoginNavigator";


const Navigator = () => {
    const {user} =useSelector(state=>state.auth.value) 
    console.log(user)
; 

    return (
            <NavigationContainer style={styles.container}>
                {user ? <BottomTabNavigator /> : <LoginNavigator/>}
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
