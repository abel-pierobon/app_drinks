import { useState } from "react";
import { Pressable, StyleSheet, Text, View, Image, Modal } from "react-native";
import InputForm from "../components/InputForm";
import ImageSelector from "./ImageSelector";
import { colors } from "../constants/colors";
import { usePostNewDrinkMutation } from "../services/services";
import { useSelector } from "react-redux";
import Card from "../components/Card";
const AddDrink = ({ navigation }) => {
    const { user, token } = useSelector((state) => state.auth.value);
    const [modalVisible, setModalVisible] = useState(false);
    const [opacity, setOpacity] = useState(false);
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
        setOpacity(!opacity);
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

            <View style={styles.options}>
            <Text style={{ fontWeight: "bold", fontSize: 30, margin: 10, alignSelf: "center",backgroundColor: colors.color2,width:"100%",textAlign: "center" }}>Agrega tu nuevo trago</Text>
            <InputForm
                label="Nombre del Trago"
                style={styles.form}
                onchange={setNombre}
            />
            <View
                style={{
                    alignItems: "center",
                    justifyContent: "center",
                    margin: 10,
                }}
            >
                {image ? (
                    <Image source={{ uri: image }} style={styles.imagen} />
                ) : null}
            </View>
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
            <View style={{ alignItems: "center", justifyContent: "center" , marginTop: 10,flexDirection: "row"}}>
            {!image ? (
                <View>
                    <ImageSelector
                        image={image}
                        setImage={setImage}
                        navigation={navigation}
                        title="Subir imagen"
                    />
                    <Pressable onPress={Cancel} style={styles.button}>
                        <Text style={styles.text}>Cancelar</Text>
                    </Pressable>
                </View>
            ) : (
                <View>
                    <ImageSelector
                        image={image}
                        setImage={setImage}
                        navigation={navigation}
                        title="Cambiar imagen"
                    />
                    <Pressable
                        onPress={() => {
                            handleModal();
                        }}
                        style={styles.button}
                    >
                        <Text style={styles.text}>Subir Bebida</Text>
                    </Pressable>
                    <Modal
                        visible={modalVisible}
                        animationType="slide"
                        transparent={true}
                    >
                        <Card style={styles.card}>
                            <Pressable
                                onPress={() => {
                                    addDrink();
                                    navigation.navigate("userLogin");
                                }}
                                style={styles.button}
                            >
                                <Text style={styles.text}>confirmar</Text>
                            </Pressable>
                            <Pressable
                                onPress={handleModal}
                                style={styles.button}
                            >
                                <Text style={styles.text}>Cancelar</Text>
                            </Pressable>
                        </Card>
                    </Modal>
                </View>
            )}
            </View>
            </View>
            
        </View>

    );
};
export default AddDrink;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.color2,
    },
    imagen: {
        width: 200,
        height: 200,
        margin: 10,
        alignSelf: "center",
        borderRadius: 10,
    },
    form: {
        marginTop: 50,
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
    titulo: {
        fontSize: 20,
        fontWeight: "bold",
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
        marginTop: "10%",
        marginBottom: "10%",
        marginLeft: "10%",
        marginRight: "10%",
        borderRadius: 10,
        borderWidth: 1,
        padding: 10,
    },
});
