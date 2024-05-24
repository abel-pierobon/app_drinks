import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import { useSelector } from "react-redux";
import { useGetFavoritesQuery } from "../services/services";
import { colors } from "../constants/colors";
import TopTenFavorites from "../components/TopTenFavorites";
const FavoritosGral = ({ navigation, route }) => {
    const { user } = useSelector((state) => state.auth.value);
    const { data, error, isLoading, isSuccess } = useGetFavoritesQuery(user);
    const [favoritesFiltered, setFavoritesFiltered] = useState([]);
    useEffect(() => {
        if (isSuccess) {
            if (data) {
                const responseTransformed = Object.entries(data).map(
                    ([key, value]) => ({
                        key,
                        ...value,
                    })
                );
                const favoritesFiltered = responseTransformed.filter(
                    (favorite) => favorite[1] === user
                );
                setFavoritesFiltered(favoritesFiltered);
            }
        }
    }, [data, isSuccess, user]);
    return (
        <View style={styles.container}>
            <Image
                style={styles.backgroundImage}
                source={{
                    uri: "https://firebasestorage.googleapis.com/v0/b/appasados-d7bd8.appspot.com/o/imagenes%2Ffotor-20240504111637.png?alt=media&token=23f53bdf-90dd-4b64-8703-6e5d6c03d6a4",
                }}
                resizeMode="cover"
            />
            {user ? (
                <Text style={styles.text}>Tus favoritos</Text>
            ) : (
                <Text
                    style={styles.text}
                    onPress={() => navigation.navigate("PrincipalLogin")}
                >
                    Inicia sesion para ver tus favoritos
                </Text>
            )}
            <FlatList
                data={favoritesFiltered}
                renderItem={({ item }) => (
                    <TopTenFavorites
                        favorite={item}
                        navigation={navigation}
                        route={route}
                    />
                )}
                keyExtractor={(item) => item.key}
                horizontal={true}
            />
        </View>
    );
};
export default FavoritosGral;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "start",
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
