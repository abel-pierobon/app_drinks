import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import * as imagePicker from "expo-image-picker";
import { colors } from "../constants/colors";

const ImageSelectorLibrary = ({ setImage,navigation,title }) => {

    const verifyPermission = async () => {
        const { granted } = await imagePicker.requestMediaLibraryPermissionsAsync();
        return granted;
    };

    const pickImage = async () => {

        try {
            const permissionLibrary = await verifyPermission;
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
                    <Text style={{ color: "black", fontWeight: "bold" }}>{title}</Text>
                </Pressable>
        
        </View>
    );
};

export default ImageSelectorLibrary;

const styles = StyleSheet.create({
    container: {
        alignItems: "center"
    },
    button: {
        backgroundColor: colors.color1,
        padding: 10,
        borderRadius: 5,
        alignItems: "center",
        margin: 10,
        borderWidth: 1,
    },
});
