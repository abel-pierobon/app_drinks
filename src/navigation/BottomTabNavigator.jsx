import { StyleSheet, Text, View, Image } from "react-native";
import React, { useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStackNavigator from "./HomeStackNavigator";
import FavoritesNavigation from "./FavoritesNavigation";
import { colors } from "../constants/colors";
import LoginNavigator from "./LoginNavigator";
import iconoBebida from "../Icons/tequila.png";
import iconoFavoritos from "../Icons/favorito.png";
import iconoLogin from "../Icons/perfil.png";
import usuarios from "../Icons/usuarios.png";
import { useSelector, useDispatch } from "react-redux";
import UserNavigator from "./UserNavigator";
import { sessionesIniciadas } from "../persistence/index.js";
import { setUser } from "../features/authSlice.js";
import CommunityStackNavigator from "./CommunityStackNavigator.jsx";

const Tab = createBottomTabNavigator();
const BottomTabNavigator = () => {
    const { user } = useSelector((state) => state.auth.value);
    const dispatch = useDispatch();
    useEffect(() => {
        (async () => {
            try {
                const response = await sessionesIniciadas();
                if (response.rows._array.length) {
                    const user = response.rows._array[0];
                    dispatch(
                        setUser({
                            email: user.email,
                            idToken: user.idToken,
                        })
                    );
                }
            } catch (error) {}
        })();
    }, []);
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarStyle: { backgroundColor: colors.color3 },
            }}
        >
            {user ? (
                <Tab.Screen
                    name="user"
                    component={UserNavigator}
                    options={{
                        tabBarShowLabel: false,

                        tabBarIcon: ({ focused }) => {
                            return (
                                <View
                                    style={
                                        focused
                                            ? {
                                                  ...styles.icons,
                                              }
                                            : null
                                    }
                                >
                                    <Image
                                        source={iconoLogin}
                                        style={{ width: 36, height: 36 }}
                                    />
                                </View>
                            );
                        },
                    }}
                />
            ) : (
                <Tab.Screen
                    name="login"
                    component={LoginNavigator}
                    options={{
                        tabBarShowLabel: false,

                        tabBarIcon: ({ focused }) => {
                            return (
                                <View
                                    style={
                                        focused
                                            ? {
                                                  ...styles.icons,
                                              }
                                            : null
                                    }
                                >
                                    <Image
                                        source={iconoLogin}
                                        style={{ width: 36, height: 36 }}
                                    />
                                </View>
                            );
                        },
                    }}
                />
            )}
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
                                              ...styles.icons,
                                          }
                                        : { color: "gray" }
                                }
                            >
                                <Image
                                    source={iconoBebida}
                                    style={{ width: 36, height: 36 }}
                                />
                            </View>
                        );
                    },
                }}
            />
            <Tab.Screen
                name="community"
                component={CommunityStackNavigator}
                options={{
                    tabBarShowLabel: false,
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View
                                style={
                                    focused
                                        ? {
                                              ...styles.icons,
                                          }
                                        : { color: "gray" }
                                }
                            >
                                <Image
                                    source={usuarios}
                                    style={{ width: 36, height: 36 }}
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
                    tabBarShowLabel: false,

                    tabBarIcon: ({ focused }) => {
                        return (
                            <View
                                style={
                                    focused
                                        ? {
                                              ...styles.icons,
                                          }
                                        : { color: "gray" }
                                }
                            >
                                <Image
                                    source={iconoFavoritos}
                                    style={{ width: 36, height: 36 }}
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
const styles = StyleSheet.create({
    icons: {
        borderRadius: 15,
        padding: 1,
        minWidth: 30,
        alignItems: "center",
        transform: [{ scale: 1.4 }, { translateY: -8 }],
    },
});
