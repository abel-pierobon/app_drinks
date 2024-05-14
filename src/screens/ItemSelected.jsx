import { StyleSheet, Text, View, FlatList, Image } from "react-native";
import React from "react";
import bebidas from "../db/bebidas.json";
import Drink from "../components/Drink";
import { colors } from "../constants/colors";
import { useGetDrinksByIdQuery } from "../services/services";

const ItemSelected = ({ setItemIdSelected = () => {}, route, navigation }) => {
    const { itemIdSelected } = route.params;
    const {data , error, isLoading} = useGetDrinksByIdQuery(itemIdSelected);
    
    return (
        <View style={styles.container}>
            <Image
                style={styles.backgroundImage}
                source={{
                    uri: "https://firebasestorage.googleapis.com/v0/b/appasados-d7bd8.appspot.com/o/imagenes%2Ffotor-20240504111637.png?alt=media&token=23f53bdf-90dd-4b64-8703-6e5d6c03d6a4",
                }}
                resizeMode="cover"
            />
            {!data ? <Text>Cargando Receta...</Text> : 
            (
                <FlatList
                data={data ? [data] : null}
                renderItem={({ item }) => (
                    <Drink drink={item} setItemIdSelected={setItemIdSelected} 
                    goBack={() => navigation.goBack()}/>
                )}
            />
            )}
            
        </View>
    );
};

export default ItemSelected;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.color2,
    },
    backgroundImage: {
        width: "100%",
        height: "100%",
        position: "absolute",
        zIndex: -1,
        opacity: 0.7,
    },
});
