import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStackNavigator from "./HomeStackNavigator";
import { Entypo } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import FavoritesNavigation from "./FavoritesNavigation";
import { colors } from "../constants/colors";
import LoginNavigator from "./LoginNavigator";
import { AntDesign } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarStyle: { backgroundColor: colors.color2, marginTop: 20 },
            }}
        >
            <Tab.Screen
                name="drinks"
                component={HomeStackNavigator}
                options={{
                    tabBarShowLabel: false,

                    tabBarIcon: ({ focused }) => {
                        return (
                            <View
                                style={
                                    focused
                                        ? {
                                              borderTopLeftRadius: 50,
                                              borderTopRightRadius: 50,
                                              backgroundColor: "white",
                                              padding: 5,
                                              paddingBottom: 10,
                                              marginTop: 5,
                                              color: "white",
                                              minWidth: 60,
                                              alignItems: "center",
                                          }
                                        : { color: "gray" }
                                }
                            >
                                <Entypo name="drink" size={28} />
                            </View>
                        );
                    },
                }}
            />
            <Tab.Screen
                name="favorites"
                component={FavoritesNavigation}
                options={{
                    tabBarShowLabel: false,

                    tabBarIcon: ({ focused }) => {
                        return (
                            <View
                                style={
                                    focused
                                        ? {
                                              borderTopLeftRadius: 50,
                                              borderTopRightRadius: 50,
                                              backgroundColor: "white",
                                              padding: 5,
                                              paddingBottom: 10,
                                              marginTop: 5,
                                              color: "white",
                                              minWidth: 60,
                                              alignItems: "center",
                                          }
                                        : { color: "gray" }
                                }
                            >
                                <Fontisto name="favorite" size={28} />
                            </View>
                        );
                    },
                }}
            />
            <Tab.Screen
                name="Login"
                component={LoginNavigator}
                options={{
                    tabBarShowLabel: false,

                    tabBarIcon: ({ focused }) => {
                        return (
                            <View
                                style={
                                    focused
                                        ? {
                                            borderTopLeftRadius: 50,
                                            borderTopRightRadius: 50,
                                            backgroundColor: "white",
                                            padding: 5,
                                            paddingBottom: 10,
                                            marginTop: 5,
                                            color: "white",
                                            minWidth: 60,
                                            alignItems: "center",
                                        }
                                        : { color: "gray" }
                                }
                            >
                                <AntDesign name="user" size={28} color="black" />
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
