import {
    StyleSheet,
    Text,
    View,
    Image,
    Pressable,
    Platform,
} from "react-native";
import InputForm from "../../components/InputForm";
import SubmitButton from "../../components/SubmitButton";
import { useSignInMutation } from "../../services/authServices";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../../features/authSlice";
import Title from "../../components/Title";
import { insertSessions } from "../../persistence";
const PrincipalLogin = ({ navigation }) => {
    const [triggerSignIn, result, isSuccess] = useSignInMutation();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorLogin, setErrorLogin] = useState("");
    const dispatch = useDispatch();
    useEffect(() => {
        if (result?.data?.idToken) {
            (async () => {
                try {
                    if (Platform.OS !== "web") {
                        const response = await insertSessions({
                            localId: result.data.localId,
                            idToken: result.data.idToken,
                            email: result.data.email,
                        });
                    }
                    dispatch(
                        setUser({
                            localId: result.data.localId,
                            email: result.data.email,
                            idToken: result.data.idToken,
                        })
                    );
                } catch (error) {}
            })();
        }
    }, [result, dispatch]);
    const onSubmit = () => {
        if (!isSuccess) {
            setErrorLogin("Usuario y/o contraseña inválidos");
            setTimeout(() => {
                setErrorLogin("");
            }, 4000);
        }
        triggerSignIn({ email, password });
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
            <Title />
            <View style={styles.login}>
                <InputForm label="Email" onchange={setEmail} error={""} />
                <InputForm
                    label="Password"
                    onchange={setPassword}
                    error={""}
                    isSecure={true}
                />
                <SubmitButton onPress={onSubmit} title="Iniciar Sesion" />
                {errorLogin ? (
                    <Text style={styles.error}>
                        Usuario y/o contraseña inválidos
                    </Text>
                ) : null}
                <Pressable style={styles.linkRegistro}>
                    <Text style={styles.linkRegistroText}>
                        ¿No tienes cuenta?
                    </Text>
                    <Text
                        onPress={() => {
                            navigation.navigate("signUpScreen");
                        }}
                        style={{
                            ...styles.linkRegistroText,
                            textDecorationLine: "underline",
                        }}
                    >
                        ingresa aqui
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
    error: {
        color: "red",
        textAlign: "center",
        marginTop: 10,
        fontWeight: "bold",
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
        flexDirection: "row",
    },
    linkRegistroText: {
        color: "black",
        fontWeight: "bold",
        fontSize: 16,
        textAlign: "center",
        marginHorizontal: 5,
    },
});
