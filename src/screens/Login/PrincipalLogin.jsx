import { StyleSheet, Text, View, Image } from "react-native";
const PrincipalLogin = ({ navigation ,route}) => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.backgroundImage}
                source={{
                    uri: "https://firebasestorage.googleapis.com/v0/b/appasados-d7bd8.appspot.com/o/imagenes%2Fatardecer.png?alt=media&token=9b48ee67-2b44-4641-92ae-68d9a02d29ac",
                }}
                resizeMode="cover"
            />
            <Text>PrincipalLogin</Text>
        </View>
    );
};
export default PrincipalLogin;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },
    backgroundImage: {
        width: "100%",
        height: "100%",
        position: "absolute",
        zIndex: -1,
        opacity: 0.7,
    },
});
