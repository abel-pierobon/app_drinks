import {
    StyleSheet,
    Text,
    View,
    Image,
    Pressable,
    FlatList,
} from "react-native";
import React from "react";
import { colors } from "../constants/colors";
import UserFavorites from "../components/UserFavorites";
import bebidas from "../db/bebidas.json";
import TopTenFavorites from "../components/TopTenFavorites";
import Puntuaciones from "../db/Puntuaciones.json";
const FavoritosGral = ({ navigation }) => {
    return (
        <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
            <Image
                style={styles.backgroundImage}
                source={{
                    uri: "https://firebasestorage.googleapis.com/v0/b/appasados-d7bd8.appspot.com/o/imagenes%2Ffotor-20240504111637.png?alt=media&token=23f53bdf-90dd-4b64-8703-6e5d6c03d6a4",
                }}
                resizeMode="cover"
            />
            <Text style={styles.text}>Los más votados</Text>
            <FlatList
                data={Puntuaciones
                    .sort((a, b) => b.puntuacion - a.puntuacion)
                    .slice(0, 10)}
                renderItem={({ item }) => (
                    <TopTenFavorites favorites={item} navigation={navigation} />
                )}
                keyExtractor={(item, index) => index.toString()}
            />
            {/* <Pressable
                onPress={() => navigation.navigate("UserFavorites")}
                style={{
                    marginBottom: 20,
                    marginTop: 20,
                    backgroundColor: colors.color1,
                    padding: 10,
                }}
            >
                <Text>Tus Favoritos</Text>
            </Pressable> */}
        </View>
    );
};

export default FavoritosGral;

const styles = StyleSheet.create({
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
});
