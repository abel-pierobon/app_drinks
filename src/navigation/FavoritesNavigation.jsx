import { StyleSheet, Text, View } from "react-native";
import React from "react";
import FavoritosGral from "../screens/FavoritosGral";
import Header from "../components/Header";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();
const FavoritesNavigation = () => {
    return (
        <View style={{ flex: 1, justifyContent: "center" }}>
            <Stack.Navigator
                initialRouteName="FavoritosGral"
                screenOptions={({ route }) => ({
                    header: ({ navigation }) => (
                        <Header
                            title={
                                    <Text style={{}}>
                                        Favoritos
                                    </Text>
                            }
                        />
                    ),
                })}
            >
                <Stack.Screen name="FavoritosGral" component={FavoritosGral} />
            </Stack.Navigator>
        </View>
    );
};

export default FavoritesNavigation;

const styles = StyleSheet.create({});
