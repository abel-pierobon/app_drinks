import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import { FlatList } from "react-native";
import DrinkItem from "../components/DrinkItem";
import { useGetDrinksByCategoryQuery } from "../services/services";
import { colors } from "../constants/colors";
import iconoAtras from "../Icons/flecha-hacia-atras.png";

const ItemListCategories = ({
    setItemIdSelected,
    setCategorySelected,
    route,
    navigation,
}) => {
    const { category: categorySelected } = route.params;
    const { data: bebidasCategories } =
        useGetDrinksByCategoryQuery(categorySelected);
    return (
        <View style={styles.container}>
            <Image
                style={styles.backgroundImage}
                source={{
                    uri: "https://firebasestorage.googleapis.com/v0/b/appasados-d7bd8.appspot.com/o/imagenes%2Ffotor-20240504111637.png?alt=media&token=23f53bdf-90dd-4b64-8703-6e5d6c03d6a4",
                }}
                resizeMode="cover"
            />
            <Pressable
                onPress={() => navigation.navigate("Home")}
                style={styles.volver}
            >
                <Image source={iconoAtras} style={{ width: 36, height: 36 }} />
                <Text style={styles.volverCategorias}>Go back</Text>
            </Pressable>
            <FlatList
                data={bebidasCategories}
                renderItem={({ item }) => (
                    <DrinkItem
                        drink={item}
                        setItemIdSelected={setItemIdSelected}
                        setCategorySelected={setCategorySelected}
                        navigation={navigation}
                        goBack={() => navigation.goBack()}
                    />
                )}
                keyExtractor={(item, index) => index.toString()}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
};
export default ItemListCategories;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        width: "100%",
    },
    backgroundImage: {
        width: "100%",
        height: "100%",
        position: "absolute",
        zIndex: -1,
        opacity: 0.95,
    },
    volver: {
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        justifyContent: "left",
        backgroundColor: colors.color2,
    },
    volverCategorias: {
        fontSize: 20,
        fontWeight: "bold",
        justifyContent: "center",
        padding: 10,
        alignItems: "center",
    },
});
