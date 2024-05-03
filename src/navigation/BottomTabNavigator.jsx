import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStackNavigator from "./HomeStackNavigator";
import { Entypo } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import FavoritesNavigation from "./FavoritesNavigation";
import { colors } from "../constants/colors";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={{ headerShown: false }}
            tabBarOptions={{
            }}
        >
            <Tab.Screen
                name="Drinks"
                component={HomeStackNavigator}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View>
                                <Entypo
                                    name="drink"
                                    size={30}
                                    color={focused ? colors.color2 : "gray"}
                                />
                            </View>
                        );
                    },
                }}
            />
            <Tab.Screen
                name="favorites"
                component={FavoritesNavigation}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View>
                                <Fontisto
                                    name="favorite"
                                    size={30}
                                    color={focused ? colors.color2 : "gray"}
                                />
                            </View>
                        );
                    },
                }}
            />
        </Tab.Navigator>
    );
};
export default BottomTabNavigator;
const styles = StyleSheet.create({});
