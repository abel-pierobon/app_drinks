import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AddDrink from "../screens/AddDrink";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Header from "../components/Header";
import { colors } from "../constants/colors";
import UserLogIn from "../screens/UserLogIn";
import { useSelector } from "react-redux";
import UserDrinks from "../screens/UserDrinks";


const Stack = createNativeStackNavigator()
const UserNavigator = () => {
    
    return (
        <View style={{ flex: 1, justifyContent: "center",backgroundColor: colors.color1 }}>
            <Stack.Navigator
                initialRouteName="userLogin"
                screenOptions={({ route }) => ({
                    header: ({ navigation }) => (
                        <Header
                            title={
                                    <Text style={{}}>
                                        Sesión iniciada
                                    </Text>
                            }
                        />
                    ),
                })}
            >
                <Stack.Screen
                    name="userLogin"
                    component={UserLogIn}
                />
                <Stack.Screen
                    name="AddDrink"
                    component={AddDrink}
                />
                <Stack.Screen
                    name="UserDrinks"
                    component={UserDrinks}
                />
            </Stack.Navigator>
        </View>
    );
};
export default UserNavigator;
const styles = StyleSheet.create({});
