import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import * as imagePicker from "expo-image-picker";
import carpeta from "../Icons/carpeta.png";

const ImageSelectorLibrary = ({ setImage }) => {
    const verifyPermission = async () => {
        const { granted } =
            await imagePicker.requestMediaLibraryPermissionsAsync();
        return granted;
    };
    const pickImage = async () => {
        try {
            const permissionLibrary = await verifyPermission();
            if (permissionLibrary) {
                let result = await imagePicker.launchImageLibraryAsync({
                    mediaTypes: imagePicker.MediaTypeOptions.All,
                    allowsEditing: true,
                    base64: true,
                    aspect: [1, 1],
                    quality: 0.2,
                });
                if (!result.canceled) {
                    const imagen = `data:image/jpeg;base64,${result.assets[0].base64}`;
                    setImage(imagen);
                }
            }
        } catch (error) {}
    };
    return (
        <View style={styles.container}>
            <Pressable onPress={pickImage} style={styles.button}>
                <Image source={carpeta} style={{ width: 30, height: 30 }} />
            </Pressable>
        </View>
    );
};
export default ImageSelectorLibrary;

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
    },
    button: {
        padding: 10,
        borderRadius: 5,
        alignItems: "center",
        margin: 10,
        borderWidth: 2,
    },
});
