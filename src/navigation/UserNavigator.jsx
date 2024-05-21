import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AddDrink from "../screens/AddDrink";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Header from "../components/Header";
import { colors } from "../constants/colors";
import UserLogIn from "../screens/UserLogIn";
import { useSelector } from "react-redux";
import UserDrinks from "../screens/UserDrinks";
import ImageSelector from "../screens/ImageSelector";


const Stack = createNativeStackNavigator()
const UserNavigator = () => {
    const {user} =useSelector(state=>state.auth.value)
    const getUserName = (user) => {
        if (user) {
            return user.split("@")[0];
        }
        return "";
    };
    return (
        <View style={{ flex: 1, justifyContent: "center",backgroundColor: colors.color1 }}>
            <Stack.Navigator
                initialRouteName="userLogin"
                screenOptions={({ route }) => ({
                    header: ({ navigation }) => (
                        <Header
                            title={
                                    <Text style={{}}>
                                        Usuario: {getUserName(user)}
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
                    name="AddImage"
                    component={ImageSelector}
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
