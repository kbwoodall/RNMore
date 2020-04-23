
import React, { Component } from "react";
import { Platform, StyleSheet, View, Text, Button, Dimensions, Alert } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
//import { leavesStuff } from '../components/leaves.js';

export default class ScreenSize extends Component {

    constructor() {
        super();
        this.state = { screenWidth: "", screenHeight: "" }
    }

    getScreenSize = () => {
        const screenWidth = Math.round(Dimensions.get('window').width);
        const screenHeight = Math.round(Dimensions.get('window').height);
        this.setState({ screenWidth: screenWidth, screenHeight: screenHeight })

        console.log("width: " + wp('84.5%') + " hey");
        console.log("height: " + hp('17%'));

        //leavesStuff();
    }


    render() {
        return (
            <View style={styles.container}>
                <View style={{ marginTop: 15 }}>

                    <Text style={styles.headerText}> Screen width : {this.state.screenWidth}</Text>
                    <Text style={styles.headerText}>Screen height : {this.state.screenHeight}</Text>
                </View>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <View style={[{ width: "40%", margin: 10 }]}>
                        <Button
                            onPress={this.getScreenSize}
                            title="Get screen size"
                        />
                    </View>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',  
        //alignItems: 'center'  
        backgroundColor: '#8FBC8F',
    },
    headerText: {
        fontSize: 20,
        textAlign: "center",
        margin: 10,
        fontWeight: "bold"
    },
});