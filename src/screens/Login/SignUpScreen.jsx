import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import InputForm from "../../components/InputForm";
import SubmitButton from "../../components/SubmitButton";
import { useSignUpMutation } from "../../services/authServices";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../../features/authSlice";
import { signupSchema } from "../../validations/authSchema";
import Title from "../../components/Title";
const SignUpScreen = ({ navigation, route, goBack }) => {
    const [email, setEmail] = useState("");
    const [errorEmail, setErrorEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorPassword, setErrorPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errorConfirmPassword, setErrorConfirmPassword] = useState("");
    const [triggerSignup, result] = useSignUpMutation();

    const dispatch = useDispatch();
    useEffect(() => {
        if (result.isSuccess) {
            dispatch(
                setUser({
                    localId: result.data.localId,
                    email: result.data.email,
                    idToken: result.data.idToken,
                })
            );
        }
    }, [result, dispatch]);

    const onSubmit = () => {
        try {
            const validation = signupSchema.validateSync({
                email,
                password,
                confirmPassword,
            });
            triggerSignup({ email, password, returnSecureToken: true });
        } catch (err) {
            switch (err.path) {
                case "email":
                    setErrorEmail(err.message);
                    break;
                case "password":
                    setErrorPassword(err.message);
                    break;
                case "confirmPassword":
                    setErrorConfirmPassword(err.message);
                    break;
                default:
                    break;
            }
            setTimeout(() => {
                setErrorEmail("");
                setErrorPassword("");
                setErrorConfirmPassword("");
            }, 5000);
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
            <Title />
            <View style={styles.login}>
                <InputForm
                    label="Email"
                    onchange={setEmail}
                    error={errorEmail}
                />
                <InputForm
                    label="Password"
                    onchange={setPassword}
                    error={errorPassword}
                    isSecure={true}
                />
                <InputForm
                    label="Confirma Password"
                    onchange={setConfirmPassword}
                    error={errorConfirmPassword}
                    isSecure={true}
                />

                <SubmitButton onPress={onSubmit} title="Crear cuenta" />

                <Pressable style={styles.linkRegistro}>
                    <Text
                        onPress={() => navigation.goBack()}
                        style={styles.linkRegistroText}
                    >
                        Volver al inicio
                    </Text>
                </Pressable>
            </View>
        </View>
    );
};

export default SignUpScreen;

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
        opacity: 0.7,
    },
    login: {
        width: "90%",
        backgroundColor: "#f0c08b",
        opacity: 0.95,
        borderRadius: 10,
        padding: 10,
        borderColor: "black",
        borderWidth: 1,
        marginTop: 5,
    },
    linkRegistro: {
        marginTop: 10,
        fontWeight: "extraBold",
    },
    linkRegistroText: {
        color: "black",
        fontWeight: "bold",
        fontSize: 16,
        textDecorationLine: "underline",
        marginHorizontal: 10,
    },
});
