import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Title from "../Components/Title";

export default class Home extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                
                <Text>Home</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})