import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default class Title extends React.Component{
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
        backgroundColor: "green",
        flex: 0.2,
        justifyContent: 'center',
        alignItems: 'center',
    }
})