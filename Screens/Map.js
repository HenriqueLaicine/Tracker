import React from "react";
import { StyleSheet, Text, View, Image, Modal, Pressable, Alert, TouchableOpacity } from "react-native";
import MapView, { Marker } from "react-native-maps";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { requestForegroundPermissionsAsync, getCurrentPositionAsync, LocationObject } from "expo-location";
const IssIcon = require("../assets/iss_icon.png");

export default class Map extends React.Component {
    constructor() {
        super()
        this.state = {
            modalVisible: false,
            location: {},
        }
    }
    async function requestLocationPermission() {
        const { granted } = await requestForegroundPermissionsAsync();

        if (granted){
            const currentPosition = await getCurrentPositionAsync();
            this.setState({ location: currentPosition });
            console.log(currentPosition.coords);
        }
    }
    componentDidMount(){
        this.requestLocationsPermission()
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.modalContainer}>
                    <TouchableOpacity style={[styles.button, styles.buttonClose]} onPress={() => this.setState({
                        modalVisible: true
                    })}>
                        <Text style={styles.textStyle}>
                            {"Ultima(s)"}
                        </Text>
                    </TouchableOpacity>
                    <Modal
                        animationType="none"
                        transparent={true}
                        visible={this.state.modalVisible}
                    >
                        <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                                <Text style={styles.modalText}>1h</Text>
                                <Text style={styles.modalText}>3h</Text>
                                <Text style={styles.modalText}>6h</Text>
                                <Text style={styles.modalText}>12h</Text>
                                <Text style={styles.modalText}>24h</Text>
                                <Pressable
                                    style={[styles.button, styles.buttonClose]}
                                    onPress={() => this.setState({
                                        modalVisible: false
                                    })}>
                                    <Text style={styles.textStyle}>Hide Modal</Text>
                                </Pressable>
                            </View>
                        </View>
                    </Modal>
                </View>
                <View style={styles.mapContainer}>
                    <MapView
                        style={styles.map}
                        region={{
                            latitude: -47,
                            longitude:  -21,
                            latitudeDelta: 0.009,
                            longitudeDelta: 0.009,
                        }}
                    >
                        {/* <Marker
                            coordinate={{
                                latitude: -21.1694792,
                                longitude: -47.8110144,
                            }}
                        >
                            <Image source={IssIcon} style={styles.iconImage} />
                        </Marker> */}
                    </MapView>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //justifyContent: 'center',
        //alignItems: 'center',
    },
    modalContainer: {
        flex: 0.06,
    },
    mapContainer: {
        flex: 0.9,
    },
    map: {
        width: "100%",
        height: "100%",
    },
    iconImage: {
        height: 50,
        width: 50,
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
    centeredView: {
        // flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        // marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
})