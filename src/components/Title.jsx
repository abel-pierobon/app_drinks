import { StyleSheet, Text, View, Image } from "react-native";
import tequila from "../Icons/tequila.png";
import {colors} from "../constants/colors";

const Title = () => {
    return (
        <View style={styles.header}>
            <Image source={tequila} style={{ width: 50, height: 50 }} />
            <View style={{ flexDirection: "row" }}>
                {/* <Text style={{...styles.title,color:colors.color3}}>Bart</Text> */}
                <Text style={{ ...styles.title, color: "#faa022" }}>Bart</Text>
                <Text style={{ ...styles.title, color: colors.color3 }}>
                    ender
                </Text>
            </View>
            <Image source={tequila} style={{ width: 50, height: 50 }} />
        </View>
    );
};
export default Title;
const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
    },
    title: {
        fontFamily: "serif",
        fontSize: 40,
        fontWeight: "800",
        textAlign: "center",
        marginTop: 20,
        color: "black",
    },
});
