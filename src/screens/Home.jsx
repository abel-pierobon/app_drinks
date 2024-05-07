import { StyleSheet, Text, View, FlatList, Image } from "react-native";
import React, { useEffect, useState } from "react";
import category from "../db/category.json";
import CategoryItem from "../components/CategoryItem";
import AllSearch from "../components/AllSearch";
import bebidas from "../db/bebidas.json";
import DrinkFilter from "../components/DrinkFilter";
const Home = ({ navigation }) => {
    const [busquedaGeneral, setBusquedaGeneral] = useState("");
    const [bebidasFiltradas, setBebidasFiltradas] = useState(bebidas);
    useEffect(() => {
        const busquedaGeneralFilter = bebidas.filter((item) =>
            item.nombre
                .toLocaleLowerCase()
                .includes(busquedaGeneral.toLowerCase())
        );
        setBebidasFiltradas(busquedaGeneralFilter);
    }, [busquedaGeneral]);
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
                    renderItem={({ item }) => (
                        <DrinkFilter drink={item} navigation={navigation} />
                    )}
                />
            ) : (
                <View>
                    <FlatList
                        data={category}
                        renderItem={({ item }) => (
                            <CategoryItem
                                navigation={navigation}
                                category={item}
                            />
                        )}
                        keyExtractor={(item, index) => index.toString()}
                    />
                </View>
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
