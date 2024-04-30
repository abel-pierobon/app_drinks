import { StyleSheet, Text, Pressable, Image } from "react-native";
import Card from "./Card";
const DrinkFilter = ({drink,setItemIdSelected = () => {},setCategorySelected = () => {}}) => {
    return (
        <Card>
            <Pressable onPress={() => {setItemIdSelected(drink.id);setCategorySelected('')}}>
                <Image source={{ uri: drink.imagen }} style={styles.imagen} />
                <Text style={styles.titulo}>{drink.nombre}</Text>
            </Pressable>
        </Card>
    );
};
export default DrinkFilter;
const styles = StyleSheet.create({
    container: {
        maxWidth: 500,
        maxHeight: 400,
    },
    titulo: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        marginTop: 5,
        color: "black",
        justifyContent: "center",
    },
    imagen: {
        width: 300,
        height: 300,
        marginHorizontal: 10,
        borderRadius: 10,
    },
});
