import { StyleSheet, View, Image,Text, Pressable } from "react-native";
import { FlatList } from "react-native";
import DrinkItem from "../components/DrinkItem";
import { useGetDrinksByCategoryQuery } from "../services/services";
import { colors } from "../constants/colors";
const ItemListCategories = ({
    setItemIdSelected,
    setCategorySelected,
    route,navigation 
}) => {
    const {category: categorySelected}=route.params

    const { data: bebidasCategories,error: errorBebidas, isLoading: isLoadingBebidas } = useGetDrinksByCategoryQuery(categorySelected);

    return (
        <View style={styles.container}>
            <Image
                style={styles.backgroundImage}
                source={{
                    uri: "https://firebasestorage.googleapis.com/v0/b/appasados-d7bd8.appspot.com/o/imagenes%2Ffotor-20240504111637.png?alt=media&token=23f53bdf-90dd-4b64-8703-6e5d6c03d6a4",
                }}
                resizeMode="cover"
            />
                <Text onPress={() => navigation.navigate("Home")} style={styles.volverCategorias}>Volver a categorías</Text>
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
                // horizontal= {true}
                // style={{ marginTop: 75, marginBottom: 25 }}
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
    volverCategorias: {
        fontSize: 20,
        fontWeight: "bold",

        backgroundColor: colors.color2,
        width: "100%",
        justifyContent: "center",
        textAlign: "center",
        padding: 10
    }
});
