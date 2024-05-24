import React from "react";
import { StatusBar, StyleSheet, Platform } from "react-native";
import { SafeAreaView } from "react-native";
import Navigator from "./src/navigation/Navigator";
import { Provider } from "react-redux";
import store from "./src/store";
import { initSQLiteDB } from "./src/persistence";

(async () => {
    try {
        if (Platform.OS !== "web"){
            const response = await initSQLiteDB();
        }
    } catch (error) {
    }
})();
const App = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Provider store={store}>
                <Navigator />
            </Provider>
        </SafeAreaView>
    );
};
export default App;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
});
