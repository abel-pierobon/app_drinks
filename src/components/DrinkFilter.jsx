import { StyleSheet, Text, Pressable, Image } from "react-native";
import Card from "./Card";
import { colors } from "../constants/colors";
const DrinkFilter = ({drink,navigation}) => {
    return (
        
        <Card style={styles.container}>
            <Pressable onPress={() => {navigation.navigate('ItemSelected',{itemIdSelected:drink.id})}}>
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
        borderColor: "black",
        borderWidth: 1,
        backgroundColor: colors.color2,
    },
    titulo: {
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
        marginTop: 5,
        color: "white",
        justifyContent: "center",
    },
    imagen: {
        width: 300,
        height: 300,
        marginHorizontal: 10,
        borderRadius: 10,
    },
});
