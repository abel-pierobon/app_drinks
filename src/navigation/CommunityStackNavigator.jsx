import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CommunityDrinks from "../screens/CommunityDrinks";
import { colors } from "../constants/colors";
import Header from "../components/Header";

const Stack = createNativeStackNavigator();
const CommunityStackNavigator = () => {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                backgroundColor: colors.color1,
            }}
        >
            <Stack.Navigator
                initialRouteName="CommunityDrinks"
                screenOptions={({ route }) => ({
                    header: ({ navigation }) => (
                        <Header title={<Text style={{}}>COMMUNITY</Text>} />
                    ),
                })}
            >
                <Stack.Screen
                    name="CommunityDrinks"
                    component={CommunityDrinks}
                />
            </Stack.Navigator>
        </View>
    );
};
export default CommunityStackNavigator;

const styles = StyleSheet.create({});
