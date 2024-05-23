import {
    FlatList,
    StyleSheet,
    Text,
    View,
    Image,
    Pressable,
} from "react-native";
import React, { useState, useEffect } from "react";
import Card from "./Card";
import iconoFavoritos from "../Icons/favorito.png";
import estrella from "../Icons/estrella.png";
import atras from "../Icons/flecha-hacia-atras.png";
import { colors } from "../constants/colors";
import { usePostFavoriteMutation } from "../services/services";
import { useSelector } from "react-redux";
import { useGetFavoritesQuery } from "../services/services";

const Drink = ({ drink, goBack }) => {
    const [triggerPostFavorite, result] = usePostFavoriteMutation();
    const { user } = useSelector(state => state.auth.value);
    const { data, isSuccess } = useGetFavoritesQuery(user);
    const [favoritesFiltered, setFavoritesFiltered] = useState([]);
    const [isFavorite, setIsFavorite] = useState(false);
    const [inFavoritos, setInFavoritos] = useState(false);

    useEffect(() => {
        if (isSuccess) {
            const responseTransformed = Object.values(data);
            const favoritesFiltered = responseTransformed.filter(
                (favorite) => favorite[1] === user
            );
            setFavoritesFiltered(favoritesFiltered);
        }
    }, [data, isSuccess, user]);

    useEffect(() => {
        const favoriteIds = favoritesFiltered.map(favorite => favorite[0].id);
        if (favoriteIds.includes(drink.id)) {
            setInFavoritos(true);
        } else {
            setInFavoritos(false);
        }
    }, [favoritesFiltered, drink.id]);

    const addFavorite = async () => {
        await triggerPostFavorite([drink, user]);
        setIsFavorite(`${drink.nombre} agregado a favoritos`);
        setTimeout(() => {
            setIsFavorite(false);
        }, 2000);
    };

    return (
        <Card style={styles.container}>
            <View style={styles.iconos}>
                <Pressable onPress={() => goBack()}>
                    <Image
                        source={atras}
                        style={{ width: 36, height: 36 }}
                    />
                </Pressable>
                {inFavoritos ? (
                    <Image
                    source={iconoFavoritos}
                    style={{ width: 36, height: 36 }}
                />
                ):(
                    <Pressable onPress={addFavorite}>
                        <Image
                            source={estrella}
                            style={{ width: 36, height: 36 }}
                        />
                    </Pressable>
                )}
            </View>
            {isFavorite && (
                <Text style={styles.isFavorite}>{isFavorite}</Text>
            )}
            <Image source={{ uri: drink.imagen }} style={styles.imagen} />
            <View style={{ padding: 10 }}>
                <Text style={styles.titulo}>Nombre de bebida: </Text>
                <Text style={styles.descripcion}>{drink.nombre}</Text>
                <Text style={styles.titulo}>Ingredientes:</Text>
                <FlatList
                    data={drink.ingredientes}
                    renderItem={({ item }) => (
                        <Text style={styles.descripcion}>{item}</Text>
                    )}
                />
                <Text style={styles.titulo}>
                    Instrucciones de preparación:{" "}
                </Text>
                <Text style={styles.instrucciones}>
                    {drink.instrucciones ? drink.instrucciones : drink.instruccionesIngles}
                </Text>
            </View>
        </Card>
    );
};

export default Drink;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.color2,
        borderRadius: 10,
        borderWidth: 1,
    },
    imagen: {
        width: 300,
        height: 300,
        marginHorizontal: 10,
        borderRadius: 10,
    },
    titulo: {
        fontSize: 20,
        fontWeight: "bold",
    },
    descripcion: {
        fontSize: 16,
    },
    instrucciones: {
        fontSize: 12,
    },
    iconos: {
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        marginTop: 10,
    },
    isFavorite: {
        fontSize: 15,
        fontWeight: "bold",
        color: "red",
    },
});
