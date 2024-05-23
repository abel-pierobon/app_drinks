import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import { useGetNewDrinksQuery } from "../services/services";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Recets from "../components/Recets";

const UserDrinks = ({navigator}) => {
    const {user}=useSelector(state=>state.auth.value.user)
    const {data,isSuccess}=useGetNewDrinksQuery();
    const [drinksFiltered,setDrinksFiltered]=useState([])
    useEffect(()=>{
        if(isSuccess){
            const responseTransformed=Object.values(data)
            const drinksFiltered=responseTransformed.filter(drink=>data.user===user)
            setDrinksFiltered(drinksFiltered)
        }
    },[data,isSuccess,user]);
    return (
        <View style={styles.container}>
            <Image
                style={styles.backgroundImage}
                source={{
                    uri: "https://firebasestorage.googleapis.com/v0/b/appasados-d7bd8.appspot.com/o/imagenes%2Fatardecer.png?alt=media&token=9b48ee67-2b44-4641-92ae-68d9a02d29ac",
                }}
                resizeMode="cover"
            />
            {drinksFiltered.length>0 ? (
                <FlatList 
                data={drinksFiltered}
                renderItem={({item})=><Recets drink={item}/>}
                keyExtractor={(item,index)=>index.toString()}
                horizontal={true}/>
            ): <Text>Todavia cargaste recetas de bebidas</Text>}
        </View>
    );
};
export default UserDrinks;
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundImage: {
        width: "100%",
        height: "100%",
        position: "absolute",
        zIndex: -1,
        opacity: 0.95,
    },
});
