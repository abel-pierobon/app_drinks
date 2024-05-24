import { StyleSheet, Text, Pressable, Image } from "react-native";
import Card from "./Card";
import { colors } from "../constants/colors";
const DrinkFilter = ({ drink, navigation }) => {
    return (
        <Card style={styles.container}>
            <Pressable
                onPress={() => {
                    navigation.navigate("ItemSelected", {
                        itemIdSelected: drink.id,
                    });
                }}
            >
                <Image
                    source={{ uri: drink.imagen }}
                    style={styles.imagen}
                    resizeMode="cover"
                />
                <Text style={styles.titulo}>{drink.nombre}</Text>
            </Pressable>
        </Card>
    );
};
export default DrinkFilter;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        minWidth: 20,
        maxWidth: 180,
        borderColor: "black",
        borderWidth: 1,
        backgroundColor: colors.color2,
    },
    titulo: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "left",
        marginTop: 10,
        color: "black",
        justifyContent: "center",
        marginLeft: 15,
        flexShrink: 1,
    },
    imagen: {
        width: 150,
        height: 150,
        borderRadius: 10,
        margin: 8,
    },
});
