import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../constants/colors";
import { AntDesign } from "@expo/vector-icons";

const Header = ({}) => {

    return (
        <View>
            <Text style={styles.title}>make your drink</Text>
        </View>
    );
};

export default Header;

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "center",
        marginTop: 5,
        color: "black",
        textTransform: "uppercase",
    },
});
