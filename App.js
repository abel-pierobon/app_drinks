import React from "react";
import { StatusBar, StyleSheet, Platform } from "react-native";
import { SafeAreaView } from "react-native";
import Navigator from "./src/navigation/Navigator";
import { Provider } from "react-redux";
import store from "./src/store";
import {initSQLiteDB}  from "./src/persistence";

(async ()=> {
    try {
        const response = await initSQLiteDB()
    } catch (error) {
        console.log(error)
    }
})()
const App = () => {
    return (
        <Provider store={store}>
            <SafeAreaView style={styles.container}>
                <Navigator />
                {/* <StatusBar barStyle="auto" /> */}
            </SafeAreaView>
        </Provider>
    );
}
export default App;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        //descomentar luego y comentar <StatusBar/>
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : "auto",
    },
    backgroundImage: {
        width: "100%",
        height: "100%",
        position: "absolute",
        zIndex: -1,
        opacity: 0.7,
    },
});
