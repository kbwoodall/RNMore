import React, { useState, useReducer, useContext } from 'react';
import { Platform, StyleSheet, Text, View, Button, TextInput, Alert, TouchableOpacity } from 'react-native';
import NumericInput from 'react-native-numeric-input';
import { ToastAndroid } from 'react-native';
//import { useStateValue } from './state';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const BlankLine = () => {
    return (
        <Text style={styles.LineStyle}>   </Text>
    )
}

export default function Calculator() {

    const [textValue, setTextValue] = useState('');
    const [formulaValue, setFormulaValue] = useState('');
    //const [{ theme }, dispatch] = useStateValue();
    //console.log("ButtonStuff ThemeMessage " + theme.msg);

    const showMessage = async (message) => {
        //await dispatch({ type: 'changeTheme', newTheme: { primary: 'blue', msg: message } })
        //console.log("show message " + theme.msg);
        console.log("show message " + message)
    }

    const calc = () => {

        console.log("change sizes in button");
        console.log("width: " + wp('84.5%'));
        console.log("height: " + hp('17%'));

        let n = textValue;
        try {
            let tot = eval(n);
            setTextValue(tot.toString());
            setFormulaValue(n);
            showMessage("");
        } catch (e) {
            ToastAndroid.show('Invalid Format', ToastAndroid.SHORT);
        }
    }
    const updateTextValue = async (text) => {
        setTextValue(text);
    }
    const attachMult = () => {
        let m = textValue + ' * ';
        setTextValue(m);
    }
    const attachDiv = () => {
        let mult = textValue + ' / ';
        setTextValue(mult);
    }
    const attachAdd = () => {
        let mult = textValue + ' + ';
        setTextValue(mult);
    }
    const attachMinus = () => {
        let mult = textValue + ' - ';
        setTextValue(mult);
    }
    const attachLeft = () => {
        let mult = textValue + ' ( ';
        setTextValue(mult);
    }
    const attachRight = () => {
        let mult = textValue + ' ) ';
        setTextValue(mult);
    }
    const attachClear = () => {
        setTextValue('');
        setFormulaValue('');
        showMessage("Message Cleared");
    }

    return (
        <View style={styles.container}>
            <BlankLine />
            <TextInput style={styles.input}
                value={textValue}
                placeholder="Enter number"
                placeholderTextColor='black'
                onChangeText={(text) => updateTextValue(text)}
                keyboardType={'numeric'}
            />

            <View style={styles.stuff}>
                <TouchableOpacity
                    style={styles.SubmitRowStyle}
                    activeOpacity={.5}
                    onPress={() => attachMult()}
                >
                    <Text style={styles.TextStyle}> * </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.SubmitRowStyle}
                    activeOpacity={.5}
                    onPress={() => attachDiv()}
                >
                    <Text style={styles.TextStyle}> / </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.SubmitRowStyle}
                    activeOpacity={.5}
                    onPress={() => attachAdd()}
                >
                    <Text style={styles.TextStyle}> + </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.SubmitRowStyle}
                    activeOpacity={.5}
                    onPress={() => attachMinus()}
                >
                    <Text style={styles.TextStyle}> - </Text>
                </TouchableOpacity>
            </View>

            <View style={styles.stuff}>
                <TouchableOpacity
                    style={styles.SubmitRowStyle}
                    activeOpacity={.5}
                    onPress={() => attachLeft()}
                >
                    <Text style={styles.TextStyle}> ( </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.SubmitRowStyle}
                    activeOpacity={.5}
                    onPress={() => attachRight()}
                >
                    <Text style={styles.TextStyle}> ) </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.SubmitRowStyle}
                    activeOpacity={.5}
                    onPress={() => attachClear()}
                >
                    <Text style={styles.TextStyle}> Clear </Text>
                </TouchableOpacity>

            </View>

            <View>

                <TouchableOpacity
                    style={styles.SubmitButtonStyle}
                    activeOpacity={.5}
                    onPress={() => calc()}
                >
                    <Text style={styles.TextStyle}> Get my total</Text>
                </TouchableOpacity>
            </View>
            <View>
                <Text style={styles.FormulaButtonStyle}> Hello</Text>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        //backgroundColor: 'blue'
        backgroundColor: '#8FBC8F'
    }, stuff: {

        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: wp('84.5%'),
        height: hp('9%'),
        marginLeft: 30,
        marginRight: 30,
        //marginBottom: 10,
        backgroundColor: '#8FBC8F'
    },
    instructions: {
        //marginTop: 50,
        //marginBottom: 10,
        fontSize: 18,
        textAlign: 'center',
        height: 60,
        width: wp('84.5%'),
        height: hp('9%'),
        color: '#333333'
    },
    input: {

        //width: 350,
        //height: 55,
        width: wp('84.5%'),
        height: hp('9%'),
        marginLeft: 30,
        marginRight: 30,
        backgroundColor: 'gray',
        marginTop: 5,
        marginBottom: 10,
        color: 'blue',
        borderRadius: 14,
        fontSize: 18,
        fontWeight: '500',
        textShadowColor: 'black'
    },
    SubmitRowStyle: {
        marginBottom: 10,
        paddingBottom: 10,
        paddingTop: 10,
        backgroundColor: '#00BCD4',
        width: 50,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff',
        width: wp('84.5%'),
        height: hp('9%'),
    },
    FormulaButtonStyle: {
        //marginTop: 10,
        paddingTop: 15,
        paddingBottom: 1,
        marginLeft: 30,
        marginRight: 30,
        backgroundColor: 'lightblue',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff',
        color: 'black',
        textAlign: 'center',
        fontSize: 18,
        width: wp('84.5%'),
        height: hp('9%'),
        fontWeight: '500'
    },
    SubmitButtonStyle: {
        marginBottom: 15,
        paddingTop: 15,
        paddingBottom: 15,
        marginLeft: 30,
        marginRight: 30,
        backgroundColor: '#00BCD4',
        borderRadius: 10,
        borderWidth: 1,
        width: wp('84.5%'),
        height: hp('9%'),
        borderColor: '#fff',
        width: wp('84.5%'),
        height: hp('9%'),
    },
    TextStyle: {
        color: 'black',
        textAlign: 'center',
        fontSize: 18,
        fontWeight: '500'
    },
    LineStyle: {
        marginBottom: 10,
        marginTop: 10
    },
});

const stylesxx = StyleSheet.create({
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
        flex: 6,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#8FBC8F'
    },
    nextchild: {
        flex: 1,
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

/*

<Text style={styles.FormulaButtonStyle}> {formulaValue} {theme.msg}</Text>


const showItAgain = async (theme, dispatch) => {
    //const [{ theme }, dispatch] = useStateValue();
    console.log("show color " + theme.primary);
    console.log("show message " + theme.msg);

    await dispatch({ type: 'changeTheme', newTheme: { primary: 'blue', msg: "updated message" } })
    console.log("show message " + theme.msg);
    //setFormulaValue(theme.msg);
}


const ThemedButton = () => {
    const [{ theme }, dispatch] = useStateValue();
    console.log("ThemeButtonColor " + theme.primary);
    console.log("ThemeMessage " + theme.msg);

    return (
        <TouchableOpacity
            style={styles.SubmitButtonStyle}
            activeOpacity={.5}
            onPress={() => showItAgain(theme, dispatch)}
        >
            <Text> {theme.msg}</Text>
        </TouchableOpacity >
    )
}

 const GetTextInput = () => {
        let g = textValue.toString();
        return (
            <View>

                <TextInput style={styles.input}
                    value={g}
                    placeholder="Enter number"
                    onChangeText={(text) => updateTextValue(text)}
                    keyboardType={'numeric'}
                />
            </View>
        )
    }

    const ShowFormula = () => {
        let g = textValue.toString();
        return (
            <View>
                <TextInput style={styles.instructions}>
                    {formulaValue}
                </TextInput>
                <BlankLine />
            </View>
        )
    }

    button: {
        marginTop: 1,
        marginLeft: 140,
        padding: 1,
        width: 100,
        borderRadius: 14
    },
onPress={() => attachClear()}
<ThemedButton />
//onPress={() => dispatch({
//    type: 'changeTheme',
//    newTheme: { primary: 'blue', msg: 'color changed' }
//})}
//<Text style="color:theme.primary">Change color {theme.msg}</Text>

//<Text style={styles.TextStyle2}> Change color</Text>
//onPress={() => showIt(theme.primary)}

//onClick={() => dispatch({
//    type: 'changeTheme',
//    newTheme: { primary: 'blue' }
//})}


//const globalState = useContext(store);
    //const { dispatch } = globalState;
    //dispatch({ type: 'action description' })
    //console.log("showState state is " + globalState.state);


    //if (globalState.state != null) {
    //    console.log("showState state is " + globalState.state);
    //    setFormulaValue(globalState.state);
    //}
            <TouchableOpacity
                style={styles.SubmitButtonStyle2}
                activeOpacity={.5}
                onClick={() => dispatch({
                    type: 'changeTheme',
                    newTheme: { primary: 'blue' }
                })}
            >
                <Text style={styles.TextStyle}> Change color</Text>
            </TouchableOpacity>
        );


<Button
    primaryColor={theme.primary}
    title="Press Me"
    onClick={() => dispatch({
        type: 'changeTheme',
        newTheme: { primary: 'green' }
    })}
>
    Press me
        </Button>


    <Button
        primaryColor={theme.primary}
        title="Doit"
        onClick={() => dispatch({
            type: 'changeTheme',
            newTheme: { primary: 'green' }
        })}
    >
        Make me blue!
    </Button>
const showState = () => {
    console.log("here again");
    const globalState = useContext(store);
    const { dispatch } = globalState;

    dispatch({ type: 'action description' })
    console.log("showState state is " + globalState.state);
    return globalState.state;
}
* /
function init(initialCount) {
    return { count: initialCount };
}

function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        case 'reset':
            return init(action.payload);
        default:
            throw new Error();
    }
}

function Counter({ initialCount }) {
    const [state, dispatch] = useReducer(reducer, initialCount, init);
    return (
        <View>
            <Text> Count: {state.count} </Text>
            <button
                onClick={() => dispatch({ type: 'reset', payload: initialCount })}>

                <Text> Reset  </Text>
            </button>
            <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
            <button onClick={() => dispatch({ type: 'increment' })}>+</button>
        </View>
    );
}
*/

