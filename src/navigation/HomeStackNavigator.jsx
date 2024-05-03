import { StyleSheet} from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import ItemListCategories from "../screens/ItemListCategories";
import ItemSelected from "../screens/ItemSelected";
import Header from "../components/Header";

const Stack= createNativeStackNavigator(); 

const HomeStackNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="Home"
            screenOptions={
                ({route})=>({
                    header: () =>{
                        return  <Header title={route.name ==="Home" ? "Categorias" : route.name === "ItemListCategories" ? route.params.category : 'preparación'}/>
                    }
                })
            }
            
            >
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="ItemListCategories" component={ItemListCategories} />
                <Stack.Screen name="ItemSelected" component={ItemSelected} />
            </Stack.Navigator>
    );
};
export default HomeStackNavigator;
const styles = StyleSheet.create({});
