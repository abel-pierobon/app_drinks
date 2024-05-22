import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import * as imagePicker from "expo-image-picker";
import { colors } from "../constants/colors";
import camara from "../Icons/camara.png";

const ImageSelector = ({ setImage,navigation,title }) => {

    const verifyCameraPermission = async () => {
        const { granted } = await imagePicker.requestCameraPermissionsAsync();
        return granted;
    };

    const pickImage = async () => {

        try {
            const permissionCamera = await verifyCameraPermission();
        if (permissionCamera) {
            let result = await imagePicker.launchCameraAsync({
                mediaTypes: imagePicker.MediaTypeOptions.All,
                allowsEditing: true,
                base64: true,
                aspect: [1, 1],
                quality: 0.2,
            });
            // console.log(result.assets[0].base64.length);

            if (!result.canceled) {
                const imagen=  `data:image/jpeg;base64,${result.assets[0].base64}`
                setImage(imagen);
            }
        }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <View style={styles.container}>
                <Pressable onPress={pickImage} style={styles.button}>
                    <Image source={camara} style={{ width: 30, height: 30 }}/>
                </Pressable>
        
        </View>
    );
};

export default ImageSelector;

const styles = StyleSheet.create({
    container: {
        alignItems: "center"
    },
    button: {
        padding: 10,
        borderRadius: 5,
        alignItems: "center",
        margin: 10,
        borderWidth: 2,
    },
});
