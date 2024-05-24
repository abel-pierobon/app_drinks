import { StyleSheet, Text, View, FlatList, Image } from "react-native";
import React, { useEffect, useState } from "react";
import CategoryItem from "../components/CategoryItem";
import AllSearch from "../components/AllSearch";
import DrinkFilter from "../components/DrinkFilter";
import { useGetCategoriesQuery, useGetDrinksQuery } from "../services/services";
import { colors } from "../constants/colors";
import { useSelector } from "react-redux";
import ShortList from "../components/ShortList";

const Home = ({ navigation }) => {
    const { user } = useSelector((state) => state.auth.value);
    const { data: categorias } = useGetCategoriesQuery();
    const { data: bebidas } = useGetDrinksQuery();
    const [busquedaGeneral, setBusquedaGeneral] = useState("");
    const [bebidasFiltradas, setBebidasFiltradas] = useState([]);
    useEffect(() => {
        if (bebidas) {
            const busquedaGeneralFilter = bebidas.filter((item) =>
                item.nombre
                    .toLowerCase()
                    .includes(busquedaGeneral.toLowerCase())
            );
            setBebidasFiltradas(busquedaGeneralFilter);
        }
    }, [busquedaGeneral, bebidas]);
    const [flatListKey, setFlatListKey] = useState(0);
    useEffect(() => {
        setFlatListKey((prevKey) => prevKey + 1);
    }, [busquedaGeneral]);
    const bebidasFiltradasNoUser = bebidas ? bebidas.slice(0, 5) : null;
    return (
        <View style={styles.container}>
            <Image
                style={styles.backgroundImage}
                source={{
                    uri: "https://firebasestorage.googleapis.com/v0/b/appasados-d7bd8.appspot.com/o/imagenes%2Ffotor-20240504132311.png?alt=media&token=d5606bb4-f67e-4307-bd0e-ab26f1bf59c5",
                }}
                resizeMode="cover"
            />
            {!user ? (
                <View>
                    <Text style={styles.text}>
                        Inicia sesión para ver las categorías de bebidas
                    </Text>
                    <FlatList
                        data={bebidasFiltradasNoUser}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => (
                            <ShortList drink={item} navigation={navigation} />
                        )}
                    />
                </View>
            ) : (
                <View>
                    <AllSearch
                        busquedaGeneral={busquedaGeneral}
                        setBusquedaGeneral={setBusquedaGeneral}
                    />
                    {busquedaGeneral ? (
                        <FlatList
                            key={flatListKey}
                            data={bebidasFiltradas}
                            keyExtractor={(item) => item.id.toString()}
                            renderItem={({ item }) => (
                                <DrinkFilter
                                    drink={item}
                                    navigation={navigation}
                                />
                            )}
                            numColumns={2}
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
                            style={styles.categories}
                        />
                    )}
                </View>
            )}
        </View>
    );
};
export default Home;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "start",
        backgroundColor: colors.color2,
    },
    backgroundImage: {
        width: "100%",
        height: "100%",
        position: "absolute",
        zIndex: -1,
        opacity: 0.7,
    },
    categories: {
        backgroundColor: colors.color2,
        opacity: 0.8,
        maxHeight: "80%",
        maxWidth: "80%",
        marginTop: "10%",
        marginBottom: "10%",
        marginLeft: "10%",
        marginRight: "10%",
        borderRadius: 10,
    },
    text: {
        fontSize: 20,
        fontWeight: "500",
        textAlign: "center",
        backgroundColor: colors.color2,
    },
});
