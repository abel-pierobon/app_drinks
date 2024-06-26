import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../constants/colors";
const Card = ({children, style}) => {
    return (
        <View style={{...styles.container, ...style}}>
            {children}
        </View>
    );
};

export default Card;

const styles = StyleSheet.create({
    container: {
        margin: 10,
        padding: 10,
        // backgroundColor: colors.color2,
        borderRadius: 10,
        borderColor: colors.color1,
        // border solid
        // borderWidth: 2,
        shadowColor: "black",
    },
});
