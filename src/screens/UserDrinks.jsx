import { StyleSheet, Text, View, Image, FlatList, Pressable } from "react-native";
import { useGetNewDrinksQuery } from "../services/services";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Recets from "../components/Recets";
import { colors } from "../constants/colors";

const UserDrinks = ({ navigation }) => {
    const { user } = useSelector((state) => state.auth.value);
    const { data, isSuccess } = useGetNewDrinksQuery();
    const [drinksFiltered, setDrinksFiltered] = useState([]);
    useEffect(() => {
        if (isSuccess) {
            if (data){
                const responseTransformed = Object.entries(data).map(([key, value]) => ({
                    key,
                    ...value,
                }));
                const drinksFiltered = responseTransformed.filter(
                    (drink) => drink.user === user
                );
                setDrinksFiltered(drinksFiltered);
            }
            }
    }, [data, isSuccess, user]);
    return (
        <View style={styles.container}>
            <Image
                style={styles.backgroundImage}
                source={{
                    uri: "https://firebasestorage.googleapis.com/v0/b/appasados-d7bd8.appspot.com/o/imagenes%2Fatardecer.png?alt=media&token=9b48ee67-2b44-4641-92ae-68d9a02d29ac",
                }}
                resizeMode="cover"
            />
            {drinksFiltered.length > 0 ? (
                <FlatList
                    data={drinksFiltered}
                    renderItem={({ item }) => <Recets drink={item} />}
                    keyExtractor={(item) => item.key}
                    horizontal={true}
                />
            ) : (
                <View style={styles.nodrink}>
                    <Text style={{...styles.text,fontSize:25}}>
                        Tu lista de tragos está vacía 
                    </Text>
                    <Pressable onPress={() => navigation.navigate("AddDrink")}>
                        <Text style={{...styles.text,fontFamily:"serif",textDecorationLine:"underline"}}>
                            ingresa aqui para comenzar
                        </Text>
                    </Pressable>
                </View>
            )}
        </View>
    );
};
export default UserDrinks;
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundImage: {
        width: "100%",
        height: "100%",
        position: "absolute",
        zIndex: -1,
        opacity: 0.95,
    },
    text: {
        fontSize: 20,
        fontWeight: "500",
        textAlign: "center",
    },
    nodrink: {
        justifyContent: "center",
        backgroundColor: colors.color2,
        width: "80%",
        textAlign: "center",
        marginHorizontal: "10%",
        marginTop: 25,
        borderRadius: 10,
        borderWidth: 1,
        opacity: 0.95,
        padding: 5,
    },
});
