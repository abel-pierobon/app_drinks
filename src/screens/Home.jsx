import { StyleSheet, Text, View, FlatList } from "react-native";
import React, { useEffect,useState } from "react";
import category from "../db/category.json";
import { colors } from "../constants/colors";
import CategoryItem from "../components/CategoryItem";
import AllSearch from "../components/AllSearch";
import bebidas from "../db/bebidas.json";
import DrinkFilter from "../components/DrinkFilter";
const Home = ({setCategorySelected, setItemIdSelected = () => {} }) => {
    const [busquedaGeneral,setBusquedaGeneral]=useState('')
    const [bebidasFiltradas,setBebidasFiltradas]=useState(bebidas)

    useEffect(() => {
        const busquedaGeneralFilter = bebidas.filter((item) => item.nombre.toLocaleLowerCase().includes(busquedaGeneral.toLowerCase()));
        setBebidasFiltradas(busquedaGeneralFilter)
    }, [busquedaGeneral])
    return (
        <View style={styles.container}>
            <AllSearch busquedaGeneral={busquedaGeneral} setBusquedaGeneral={setBusquedaGeneral}/>

            {busquedaGeneral ? (
                <FlatList 
                data={bebidasFiltradas}
                renderItem={({item}) => <DrinkFilter drink={item} setItemIdSelected ={setItemIdSelected} setCategorySelected={setCategorySelected}/> }
                />
            ):(
                <View>
                    <Text style={styles.subTitle}> O Elige tu categoria favorita</Text>
                <FlatList
                data={category}
                renderItem={({ item }) => <CategoryItem selectCategory={setCategorySelected} category={item}/>}
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
        fontSize: 20,
        fontWeight: "900",
        textAlign: "center",
        marginTop: 10,
        marginBottom: 10,
        color: 'black',
    },
});
