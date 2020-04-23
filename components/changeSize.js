import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default class ChangeSize extends React.Component {

    render() {

        console.log("hey again change size once more 1");

        console.log("width: " + wp('84.5%'));
        console.log("height: " + hp('17%'));

        return (
            <View style={styles.container}>
                <View style={styles.responsiveBox}>
                    <Text style={styles.text}>This box is always of 84.5% width and 17% height.</Text>
                    <Text style={styles.text}>Test it by running this example repo in phones/
            emulators with screens of various dimensions and pixel per inch (ppi).</Text>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        //backgroundColor: 'gray',
        backgroundColor: '#8FBC8F',
        alignItems: 'center',
        justifyContent: 'center',
    },
    responsiveBox: {
        width: wp('84.5%'),
        height: hp('17%'),
        borderWidth: 2,
        borderColor: 'black',
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    text: {
        color: 'black'
    }
});