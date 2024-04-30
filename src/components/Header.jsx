import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../constants/colors";
import { AntDesign } from "@expo/vector-icons";
const Header = ({ categorySelected, setCategorySelected }) => {
    const backcategory = () => {
        setCategorySelected("");
    };
    return (
        <View>
            <Text style={styles.title}>Prepara tu bebida</Text>
            <Text style={styles.subTitle}>Elige tu bebida favorita</Text>
            {!categorySelected ? null : (
                <Pressable onPress={backcategory} style={{alignSelf: "flex-end" }}>
                    <AntDesign name="back" size={36} color="black" />
                </Pressable>
            )}
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
