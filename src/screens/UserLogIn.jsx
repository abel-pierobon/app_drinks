import { Pressable, StyleSheet, Text, View, Image } from "react-native";
import { useSelector } from "react-redux";
import { colors } from "../constants/colors";
import { useDispatch } from "react-redux";
import { clearUser } from "../features/authSlice";
import Title from "../components/Title";
import { truncateSessionsTable } from "../persistence";
const UserLogIn = ({ navigation, route }) => {
    const { user } = useSelector((state) => state.auth.value);

    const dispatch = useDispatch();

    const logOf = async() => {
        try {
            const response= await truncateSessionsTable()
            console.log(response)
            dispatch(clearUser());
        } catch (error) {
            console.log('error cerrar sesion',error)
        }
    };

    return (
        <View style={styles.container}>
            <Image
                style={styles.backgroundImage}
                source={{
                    uri: "https://firebasestorage.googleapis.com/v0/b/appasados-d7bd8.appspot.com/o/imagenes%2Fatardecer.png?alt=media&token=9b48ee67-2b44-4641-92ae-68d9a02d29ac",
                }}
                resizeMode="cover"
            />
            
            <View
                style={styles.options}
            >
            <Title />
            <View style={styles.greting}>
                <Text style={{ fontWeight: "bold", fontSize: 25, margin: 10 }}>
                    Bienvenido
                </Text>
            </View>
                <Pressable
                    onPress={() => navigation.navigate("drinks")}
                    hitSlop={10}>
                        
                    <Text
                        style={styles.button}
                    >
                        Ver categorías
                    </Text>
                </Pressable>
                <Pressable
                onPress={() => navigation.navigate("AddDrink")}>
                    <Text
                        style={styles.button}
                    >
                        Agregar receta
                    </Text>
                </Pressable>
                <Pressable
                onPress={() => navigation.navigate("UserDrinks")}>
                    <Text
                        style={styles.button}
                        >
                        Tus recetas
                    </Text>
                </Pressable>
                <Pressable>
                    <Text style={styles.button} onPress={logOf}>
                        Cerrar sesión
                    </Text>
                </Pressable>
            </View>
        </View>
    );
};

export default UserLogIn;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    options: {
        justifyContent: "center",
        alignItems: "center",
        margin: 10,
        marginHorizontal: 20,
        gap: 10,
        backgroundColor: colors.color2,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        width:"90%",
        opacity: 0.9,
    },
    greting: {
        // flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        padding: 2,
        borderRadius: 10,
        backgroundColor: colors.color2,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 15,
        minWidth: 300,
    },
    button: {
        fontWeight: "bold",
        fontSize: 20,
        margin: 2,
        padding: 5,
        color: "black",
        borderBottomWidth: 1,
        width: 300,
    },
    backgroundImage: {
        width: "100%",
        height: "100%",
        position: "absolute",
        zIndex: -1,
        opacity: 0.95,
    },
});
