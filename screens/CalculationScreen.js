import React from 'react';
import { useState, useReducer, useContext } from 'react';
import { Button, TextInput, Alert } from 'react-native';
import NumericInput from 'react-native-numeric-input';
import { ToastAndroid } from 'react-native';
import { StateProvider } from '../components/state';
import ButtonStuff from '../components/button';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

const ShowText = () => {
    console.log("settings screen width: " + wp('84.5%'));
    console.log("height: " + hp('17%'));

    return <Text style={styles.instructions}>K Woodall Calculator</Text>
}

export default function CalculationScreen() {
    /**
     * Go ahead and delete ExpoConfigView and replace it with your content;
     * we just wanted to give you a quick view of your config.  
     * 
     */
    const initialState = {
        theme: { primary: 'green', msg: 'Ready for calculation' }
    };

    const reducer = (state, action) => {
        console.log("action " + action);
        console.log("reducer");
        switch (action.type) {
            case 'changeTheme':
                return {
                    ...state,
                    theme: action.newTheme
                };
            default:
                return state;
        }
    };

    return (
        <ScrollView style={styles.container}>
            <StateProvider initialState={initialState} reducer={reducer}>

                <View style={styles.child}>
                    <ButtonStuff />
                </View>
                <View style={styles.nextchild}>
                </View>

            </StateProvider>
        </ScrollView>
    )
}


//<View style={styles.topchild}>
//<ShowText />
//</View>

//CalculationScreen.navigationOptions = {
//    title: 'Calculator',
//};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#8FBC8F',
    },
    developmentModeText: {
        marginBottom: 20,
        color: 'rgba(0,0,0,0.4)',
        fontSize: 14,
        lineHeight: 19,
        textAlign: 'center',
    },
    contentContainer: {
        paddingTop: 30,
    },
    welcomeContainer: {
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 20,
    },
    welcomeImage: {
        width: 100,
        height: 80,
        resizeMode: 'contain',
        marginTop: 3,
        marginLeft: -10,
    },
    getStartedContainer: {
        alignItems: 'center',
        marginHorizontal: 50,
        backgroundColor: '#8FBC8F',
    },
    homeScreenFilename: {
        marginVertical: 7,
    },
    codeHighlightText: {
        color: 'rgba(96,100,109, 0.8)',
    },
    codeHighlightContainer: {
        backgroundColor: '#DCDCDC',
        borderRadius: 3,
        paddingHorizontal: 4,
    },
    getStartedText: {
        fontSize: 17,
        color: 'rgba(96,100,109, 1)',
        lineHeight: 24,
        textAlign: 'center',
    },
    tabBarInfoContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        ...Platform.select({
            ios: {
                shadowColor: 'black',
                shadowOffset: { width: 0, height: -3 },
                shadowOpacity: 0.1,
                shadowRadius: 3,
            },
            android: {
                elevation: 20,
            },
        }),
        alignItems: 'center',
        backgroundColor: 'gray',
        paddingVertical: 20,
    },
    tabBarInfoText: {
        fontSize: 17,
        color: 'rgba(96,100,109, 1)',
        textAlign: 'center',
    },
    navigationFilename: {
        marginTop: 5,
    },
    helpContainer: {
        marginTop: 15,
        alignItems: 'center',
    },
    helpLink: {
        paddingVertical: 15,
    },
    helpLinkText: {
        fontSize: 14,
        color: '#2e78b7',
    },
    child: {
        flex: 4,
        marginTop: 5,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#8FBC8F'
    },
    nextchild: {
        flex: 4,
        paddingTop: 5,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#8FBC8F'
    },
    topchild: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'gray'
    },

    instructions: {
        fontSize: 20,
        marginTop: 5,
        textAlign: 'center',
        color: '#333333'
    }
});

//return <ExpoConfigView />;

/*
 return (
    <View style={styles.container}>
      <View >
        <Text>More Stuff Screen</Text>
      </View>
    </View>
  )

*/