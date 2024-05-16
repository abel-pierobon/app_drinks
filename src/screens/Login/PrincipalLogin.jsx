import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import InputForm from "../../components/InputForm";
import {colors} from "../../constants/colors";
import SubmitButton from "../../components/SubmitButton";
import tequila from "../../Icons/tequila.png";
const PrincipalLogin = ({ navigation, route }) => {
    const onSubmit = () => {};
    return (
        <View style={styles.container}>
            <Image
                style={styles.backgroundImage}
                source={{
                    uri: "https://firebasestorage.googleapis.com/v0/b/appasados-d7bd8.appspot.com/o/imagenes%2Fatardecer.png?alt=media&token=9b48ee67-2b44-4641-92ae-68d9a02d29ac",
                }}
                resizeMode="cover"
            />
            <View style={styles.header}>
                <Image source={tequila} style={{ width: 50, height: 50 }} />
                <View style={{ flexDirection: "row" }}>
                    {/* <Text style={{...styles.title,color:colors.color3}}>Bart</Text> */}
                    <Text style={{...styles.title,color:"#faa022"}}>Bart</Text>
                    <Text style={{...styles.title,color:colors.color3}}>ender</Text>
                </View>
                <Image source={tequila} style={{ width: 50, height: 50 }} />
            </View>
            <View style={styles.login}>
                <InputForm label="Email" onchange={() => {}} error={""} />
                <InputForm label="Password" onchange={() => {}} error={""} />
                <SubmitButton onPress={onSubmit} title="Iniciar Sesion" />
                <Pressable style={styles.linkRegistro}>
                    <Text
                        onPress={() => {
                            navigation.navigate("signUpScreen");
                        }}
                        style={styles.linkRegistroText}
                    >
                        Si no estás registrado, ingresa aqui
                    </Text>
                </Pressable>
            </View>
        </View>
    );
};
export default PrincipalLogin;
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
        opacity: 0.99,
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",

        // backgroundColor: colors.color2,
        width: "100%",
    },
    title: {
        fontFamily: "serif",
        fontSize: 40,
        fontWeight: "800",
        textAlign: "center",
        marginTop: 20,
        color: "black",
        // borde de letra
    },
    login: {
        width: "80%",
        height: "auto",
        backgroundColor: "#f0c08b",
        opacity: 0.95,
        borderRadius: 10,
        padding: 10,
        borderColor: "black",
        borderWidth: 1,
        marginTop: 10,
    },
    linkRegistro: {
        marginTop: 20,
        fontWeight: "extraBold",
    },
    linkRegistroText: {
        color: "black",
        fontWeight: "bold",
        fontSize: 16,
        textDecorationLine: "underline",
        textAlign: "center",
    },
});
