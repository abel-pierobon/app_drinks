import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../constants/colors";   
const Header = () => {
    return (
        <View>
            <Text style={styles.title}>Prepara tu bebida</Text>
            <Text style={styles.subTitle}>Elige tu bebida favorita</Text>
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
        color: 'black',
        textTransform: "uppercase",     
    },
});
