import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import InputForm from "../../components/InputForm";
import SubmitButton from "../../components/SubmitButton";
import { useSignUpMutation } from "../../services/authServices";
import { useState } from "react";

const SignUpScreen = ({ navigation, route,goBack }) => {
    const [email, setEmail] = useState("");
    const [errorEmail, setErrorEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorPassword, setErrorPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errorConfirmPassword, setErrorConfirmPassword] = useState("");
    const [triggerSignup,result]=useSignUpMutation()
    const onSubmit = () => {
        triggerSignup({email,password,returnSecureToken:true})
    };
    console.log(email)
    console.log(password)
    return (
        <View style={styles.container}>
            <Image
                style={styles.backgroundImage}
                source={{
                    uri: "https://firebasestorage.googleapis.com/v0/b/appasados-d7bd8.appspot.com/o/imagenes%2Fatardecer.png?alt=media&token=9b48ee67-2b44-4641-92ae-68d9a02d29ac",
                }}
                resizeMode="cover"
            />
            <Text>SignUpScreen</Text>
            <View style={styles.login}>
                <InputForm label="Email" onchange={() => {setEmail()}} error={""} />
                <InputForm label="Password" onchange={() => {setPassword()}} error={""} />
                <InputForm label="Confirma Password" onchange={() => {setConfirmPassword()}} error={""} />

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
    )
}

export default SignUpScreen

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
        height: "auto",
        backgroundColor: "#f0c08b",
        opacity: 0.95,
        borderRadius: 10,
        padding: 10,
        borderColor: "black",
        borderWidth: 1,
        marginTop: 40,
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
        marginHorizontal: 10,
    },
})