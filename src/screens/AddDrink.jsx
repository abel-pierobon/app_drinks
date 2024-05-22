import { useState } from "react";
import {
    Pressable,
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
} from "react-native";
import InputForm from "../components/InputForm";
import ImageSelector from "./ImageSelector";
import { colors } from "../constants/colors";
import { usePostNewDrinkMutation } from "../services/services";
import { useSelector } from "react-redux";
import Card from "../components/Card";
import ImageSelectorLibrary from "./ImageSelectorLibrary";
const AddDrink = ({ navigation }) => {
    const { user, token } = useSelector((state) => state.auth.value);
    const [modalVisible, setModalVisible] = useState(false);
    const [nombre, setNombre] = useState("");
    const [instruciones, setInstrucciones] = useState("");
    const [ingredientes, setIngredientes] = useState([]);
    const [image, setImage] = useState(null);
    const [triggerPostNewDrink, result] = usePostNewDrinkMutation();

    const addDrink = () => {
        triggerPostNewDrink({
            user,
            token,
            image,
            nombre,
            instruciones,
            ingredientes,
        });
        setNombre("");
        setInstrucciones("");
        setIngredientes([]);
        setImage(null);
    };

    const Cancel = () => {
        navigation.navigate("userLogin");
        setNombre("");
        setInstrucciones("");
        setIngredientes([]);
        setImage(null);
    };

    const handleModal = () => {
        setModalVisible(!modalVisible);
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
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                <View style={styles.options}>
                    <Text style={styles.title}>Agrega tu trago</Text>
                    {image ? (
                        <Image source={{ uri: image }} style={styles.imagen} />
                    ) : null}
                    <InputForm
                        label="Nombre del Trago"
                        style={styles.form}
                        onchange={setNombre}
                    />

                    <InputForm
                        label="Ingredientes"
                        style={styles.form}
                        onchange={setIngredientes}
                    />
                    <InputForm
                        label="Instrucciones"
                        style={styles.form}
                        onchange={setInstrucciones}
                    />
                    <View
                        style={{
                            alignItems: "center",
                            justifyContent: "center",
                            marginTop: 10,
                        }}
                    >
                        <View style={{ flexDirection: "row" }}>
                            <ImageSelector
                                image={image}
                                setImage={setImage}
                                navigation={navigation}
                                title="Tomar foto"
                            />
                            <ImageSelectorLibrary
                                image={image}
                                setImage={setImage}
                                navigation={navigation}
                                title="Subir imagen"
                            />
                        </View>
                        {image && nombre.length > 0 && instruciones.length > 0 && ingredientes.length > 0 ? (
                            <View
                                style={{
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                }}
                            >
                                <Pressable
                                    onPress={Cancel}
                                    style={styles.button}
                                >
                                    <Text style={styles.text}>Cancelar</Text>
                                </Pressable>
                                <Pressable
                                    onPress={() => {
                                        addDrink();
                                        navigation.navigate("userLogin");
                                    }}
                                    style={styles.button}
                                >
                                    <Text style={styles.text}>Confirmar</Text>
                                </Pressable>
                            </View>
                        ) : null}
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

export default AddDrink;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.color2,
        justifyContent: "center",
    },
    scrollViewContent: {
        flexGrow: 1,
        justifyContent: "center",
    },
    imagen: {
        width: 200,
        height: 200,
        margin: 10,
        alignSelf: "center",
        borderRadius: 10,
    },
    form: {
        flexDirection: "row",
    },
    button: {
        backgroundColor: colors.color1,
        padding: 10,
        borderRadius: 5,
        alignItems: "center",
        margin: 10,
        borderWidth: 1,
        marginHorizontal: 60,
    },
    text: { color: "black", fontWeight: "bold" },
    title: {
        fontWeight: "bold",
        fontSize: 30,
        margin: 10,
        alignSelf: "center",
        backgroundColor: colors.color2,
        width: "100%",
        textAlign: "center",
    },
    card: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.color2,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: "black",
        marginTop: 350,
    },
    backgroundImage: {
        width: "100%",
        height: "100%",
        position: "absolute",
        zIndex: -1,
        opacity: 0.7,
    },
    options: {
        backgroundColor: colors.color2,
        opacity: 0.9,
        marginTop: "2%",
        marginBottom: "10%",
        marginLeft: "10%",
        marginRight: "10%",
        borderRadius: 10,
        borderWidth: 1,
        padding: 10,
    },
});
