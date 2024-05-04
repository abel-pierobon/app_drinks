import React from "react";
import { StyleSheet, Text,View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import ItemListCategories from "../screens/ItemListCategories";
import ItemSelected from "../screens/ItemSelected";
import Header from "../components/Header";
import { colors } from "../constants/colors";


const Stack = createNativeStackNavigator();

const HomeStackNavigator = () => {
    return (

        <View style={{ flex: 1, backgroundColor: colors.color1, justifyContent: "center", alignContent: "center" }}>
            <Stack.Navigator
            initialRouteName="Home"

            screenOptions={({ route }) => ({
                header: ({ navigation }) => (
                    <Header
                        title={
                            route.name === "Home" ? (
                                <Text style={{  }}>Categorias</Text>
                            ) : route.name === "ItemListCategories" ? (

                                    <Text style={{  }}>
                                        {route.params.category}
                                    </Text>

                            ) : (
                                "Preparación"
                            )
                        }
                    />
                ),
            })}
        >
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen
                name="ItemListCategories"
                component={ItemListCategories}
            />
            <Stack.Screen name="ItemSelected" component={ItemSelected} />
        </Stack.Navigator>
        
        </View>
    );

};
export default HomeStackNavigator;

const styles = StyleSheet.create({});
