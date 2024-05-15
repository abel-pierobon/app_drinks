import { StyleSheet, Image } from "react-native";
import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import BottomTabNavigator from "./BottomTabNavigator";


const Navigator = () => {
    const [user, setUser] = useState(false);
    return (
            <NavigationContainer style={styles.container}>
                <BottomTabNavigator user={user}/>
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
