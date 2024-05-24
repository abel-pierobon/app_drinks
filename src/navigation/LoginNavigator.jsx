import { StyleSheet, Text, View } from "react-native";
import React from "react";
import PrincipalLogin from "../screens/Login/PrincipalLogin";
import SignUpScreen from "../screens/Login/SignUpScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Header from "../components/Header";
import { colors } from "../constants/colors";

const Stack = createNativeStackNavigator();
const LoginNavigator = () => {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                backgroundColor: colors.color1,
            }}
        >
            <Stack.Navigator
                initialRouteName="PrincipalLogin"
                screenOptions={({ route }) => ({
                    header: ({ navigation }) => (
                        <Header title={<Text style={{}}>Login</Text>} />
                    ),
                })}
            >
                <Stack.Screen
                    name="PrincipalLogin"
                    component={PrincipalLogin}
                />
                <Stack.Screen name="signUpScreen" component={SignUpScreen} />
            </Stack.Navigator>
        </View>
    );
};
export default LoginNavigator;
const styles = StyleSheet.create({});
