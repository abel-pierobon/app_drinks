import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import React from "react";
import like from "../Icons/like.png";
import { increment } from "../features/counter";
import {decrement} from "../features/counter";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const Likes = () => {
    const count = useSelector((state) => state.counterReducer.value);
    console.log(count);
    const dispatch = useDispatch();

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{` ${count} Likes`}</Text>
            {count > 0 ? (
                <Pressable onPress={() => dispatch(decrement())}>
                    <Text style={styles.textNoLike}>Me gusta</Text>
                </Pressable>
            ) : (
                <Pressable onPress={() => dispatch(increment())}>
                    <Text style={styles.textLike}>Me gusta</Text>
                </Pressable>
            )}
        </View>
    );
};

export default Likes;

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 8,
    },
    text: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        marginTop: 1,
        color: "black",
    },
    textLike: {
        fontSize: 15,
        fontWeight: "bold",
        textAlign: "center",
        marginTop: 1,
        borderWidth: 1,
        borderRadius: 10,
        padding: 5,
    },
    textNoLike: {
        fontSize: 15,
        fontWeight: "bold",
        textAlign: "center",
        marginTop: 1,
        borderWidth: 1,
        borderRadius: 10,
        padding: 5,
        backgroundColor:"#3b82f6"
    
    }
});
