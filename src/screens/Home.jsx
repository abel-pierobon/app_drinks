import { StyleSheet, Text, View, FlatList, Image } from "react-native";
import React, { useEffect, useState } from "react";
import CategoryItem from "../components/CategoryItem";
import AllSearch from "../components/AllSearch";
import DrinkFilter from "../components/DrinkFilter";
import { useGetCategoriesQuery, useGetDrinksQuery } from "../services/services";

const Home = ({ navigation }) => {
    const { data: categorias, error: errorCategorias, isLoading: isLoadingCategorias } = useGetCategoriesQuery();
    const { data: bebidas, error: errorBebidas, isLoading: isLoadingBebidas } = useGetDrinksQuery();
    const [busquedaGeneral, setBusquedaGeneral] = useState("");
    const [bebidasFiltradas, setBebidasFiltradas] = useState([]);

    useEffect(() => {
        if (bebidas) {
            const busquedaGeneralFilter = bebidas.filter((item) =>
                item.nombre.toLowerCase().includes(busquedaGeneral.toLowerCase())
            );
            setBebidasFiltradas(busquedaGeneralFilter);
        }
    }, [busquedaGeneral, bebidas]);

    // if (isLoadingCategorias || isLoadingBebidas) {
    //     return <Text>Cargando...</Text>;
    // }

    // if (errorCategorias || errorBebidas) {
    //     return <Text>Error: {errorCategorias?.message || errorBebidas?.message}</Text>;
    // }

    return (
        <View style={styles.container}>
            <Image
                style={styles.backgroundImage}
                source={{
                    uri: "https://firebasestorage.googleapis.com/v0/b/appasados-d7bd8.appspot.com/o/imagenes%2Ffotor-20240504132311.png?alt=media&token=d5606bb4-f67e-4307-bd0e-ab26f1bf59c5",
                }}
                resizeMode="cover"
            />
            <AllSearch
                busquedaGeneral={busquedaGeneral}
                setBusquedaGeneral={setBusquedaGeneral}
            />

            {busquedaGeneral ? (
                <FlatList
                    data={bebidasFiltradas}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <DrinkFilter drink={item} navigation={navigation} />
                    )}
                />
            ) : (
                <FlatList
                    data={categorias}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (
                        <CategoryItem
                            navigation={navigation}
                            category={item}
                        />
                    )}
                />
            )}
        </View>
    );
};

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },
    subTitle: {
        fontSize: 24,
        fontWeight: "800",
        textAlign: "center",
        marginTop: 10,
        marginBottom: 10,
        color: "white",
    },
    backgroundImage: {
        width: "100%",
        height: "100%",
        position: "absolute",
        zIndex: -1,
        opacity: 0.7,
    },
});
