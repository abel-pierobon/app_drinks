import { StyleSheet } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import BottomTabNavigator from "./BottomTabNavigator";
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
