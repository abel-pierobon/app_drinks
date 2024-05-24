import {
    StyleSheet,
    Text,
    View,
    Image,
    FlatList,
    Pressable,
} from "react-native";
import { useGetNewDrinksQuery } from "../services/services";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { colors } from "../constants/colors";
import RecetsCommunity from "../components/RecetsCommunity";
const CommunityDrinks = ({ navigation }) => {
    const { user } = useSelector((state) => state.auth.value);
    const { data, isSuccess } = useGetNewDrinksQuery();
    const [drinks, setDrinks] = useState([]);
    useEffect(() => {
        if (isSuccess) {
            if (data) {
                const responseTransformed = Object.values(data);
                setDrinks(responseTransformed);
            }
        }
    }, [data, isSuccess]);
    return (
        <View style={styles.container}>
            <Image
                style={styles.backgroundImage}
                source={{
                    uri: "https://firebasestorage.googleapis.com/v0/b/appasados-d7bd8.appspot.com/o/imagenes%2Fatardecer.png?alt=media&token=9b48ee67-2b44-4641-92ae-68d9a02d29ac",
                }}
                resizeMode="cover"
            />
            {!user ? (
                <View style={styles.nodrink}>
                    <Text style={{ ...styles.text, fontSize: 25 }}>
                        Inicia sesión para ver los tragos de la comunidad
                    </Text>
                    <Pressable
                        onPress={() => navigation.navigate("PrincipalLogin")}
                    >
                        <Text
                            style={{
                                ...styles.text,
                                fontFamily: "serif",
                                textDecorationLine: "underline",
                            }}
                        >
                            iniciar sesión
                        </Text>
                    </Pressable>
                </View>
            ) : (
                <View>
                    <Text style={styles.title}>
                        {" "}
                        Tragos subidos por la Comunidad
                    </Text>
                    <FlatList
                        data={drinks ? drinks : null}
                        renderItem={({ item }) => (
                            <RecetsCommunity drink={item} />
                        )}
                        keyExtractor={(item, index) => index.toString()}
                        horizontal={true}
                    />
                </View>
            )}
        </View>
    );
};
export default CommunityDrinks;

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
    title: {
        fontWeight: "bold",
        fontSize: 25,
        fontFamily: "serif",
        textAlign: "center",
        backgroundColor: colors.color2,
        width: "100%",
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
