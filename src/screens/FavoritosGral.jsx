import React from "react";
import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import { useSelector } from "react-redux"; 
import { useGetFavoritesQuery } from "../services/services";
import { colors } from "../constants/colors";

const FavoritosGral = ({ navigation }) => {
    const userEmail = useSelector((state) => state.auth.value.user); 
    const { data, error, isLoading } = useGetFavoritesQuery(userEmail);
    console.log(userEmail)

    if (isLoading) {
        return (
            <View style={styles.center}>
                <Text>Loading...</Text>
            </View>
        );
    }

    if (error) {
        return (
            <View style={styles.center}>
                <Text>Error: {error.message}</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Image
                style={styles.backgroundImage}
                source={{
                    uri: "https://firebasestorage.googleapis.com/v0/b/appasados-d7bd8.appspot.com/o/imagenes%2Ffotor-20240504111637.png?alt=media&token=23f53bdf-90dd-4b64-8703-6e5d6c03d6a4",
                }}
                resizeMode="cover"
            />
            <Text style={styles.text}>Tus favoritos</Text>
            {/* <FlatList
                data={data || []}
                renderItem={({ item }) => (
                    <TopTenFavorites favorites={item} navigation={navigation} />
                )}
                keyExtractor={(item, index) => index.toString()}
            /> */}
        </View>
    );
};

export default FavoritosGral;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    backgroundImage: {
        width: "100%",
        height: "100%",
        position: "absolute",
        zIndex: -1,
        opacity: 0.95,
    },
    text: {
        fontSize: 30,
        fontWeight: "500",
        backgroundColor: colors.color2,
        width: "100%",
        textAlign: "center",
    },
    center: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});
