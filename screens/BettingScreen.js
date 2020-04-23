//import { ExpoConfigView } from '@expo/samples';
import { ScrollView } from 'react-native';
import { Image, Platform, StyleSheet, Text, View, Button, TextInput, Alert, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import { nullLiteral } from '@babel/types';
import { ToastAndroid } from 'react-native';
//import NumericInput from 'react-native-numeric-input';
//import List from '../components/List.js'
//import { useNavigation, useRoute, useNavigationState, useNavigationParam }
//  from 'react-navigation-hooks';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default function BettingScreen() {

  console.log("settings screen width: " + wp('84.5%'));
  console.log("height: " + hp('17%'));

  const [textValue, setTextValue] = useState('');
  const [mlValue, setMLValue] = useState('');
  const [oddsValue, setOddsValue] = useState('');

  const msg = 'Please enter odds in selected format [-/+xxx]';

  const [formulaValue, setFormulaValue] = useState('Message window');
  //const name = useNavigationParam('msg');
  //console.log(name);
  //const { routeName } = useNavigationState();

  const updateTextValue = async (text) => {
    setTextValue("");
    setTextValue(text);
  }
  const updateOddsValue = async (text) => {
    setOddsValue("");
    setOddsValue(text);
  }
  const updateMLValue = async (text) => {
    setMLValue("");
    setMLValue(text);
  }
  const showMessage = async (message) => {
    await dispatch({ type: 'changeTheme', newTheme: { primary: 'blue', msg: message } })
    console.log("show message " + theme.msg);
  }

  const clearWindow = () => {
    setTextValue('');
    setOddsValue('');
    setMLValue('');
    setFormulaValue('Message Cleared');
  }

  const calc = () => {
    const b = Number(textValue);
    const o = Number(oddsValue);
    const m = Number(mlValue);

    //const totStr = textValue + "+" + oddsValue + "(" + textValue + "/" + 100 + ")";
    const totStr = oddsValue + "(" + textValue + "/" + 100 + ")";
    const totMinusStr = textValue + "*" + 100 + "/" + oddsValue;

    try {
      //let x = 250;
      //let y = 135;
      console.log(b + " " + o);
      //console.log(typeof x);
      //console.log(typeof b);

      let tot = eval("o * (b/100)");

      //let tot = eval("b + o * (b/100)");
      let minusOdds = eval("(b * 100) / o");

      //setTextValue(tot.toString()); 
      setFormulaValue("");
      if (isNaN(oddsValue) || isNaN(textValue) || isNaN(tot) || isNaN(minusOdds)) {
        ToastAndroid.show('Invalid Format', ToastAndroid.SHORT);
      }
      else {
        if (oddsValue > 0) {
          let totPercent = eval("100/(o + 100) * 100");
          console.log("+ " + totPercent.toFixed(0));
          setFormulaValue(tot.toFixed(2) + " = " + totStr + "   " + totPercent.toFixed(0) + "%");
        } else {
          let oddsTest = oddsValue * -1;
          let minusOddsTest = minusOdds * -1;

          let minusPercent = eval("oddsTest/(oddsTest + 100) * 100");
          console.log(oddsTest + " - " + minusPercent.toFixed(0));

          const totMinusStr = textValue + "*" + 100 + "/" + oddsTest;
          setFormulaValue(minusOddsTest.toFixed(2) + " = " + totMinusStr + "   " + minusPercent.toFixed(0) + "%");
        }
      }
    } catch (e) {
      ToastAndroid.show('Invalid Format', ToastAndroid.SHORT);
    }
  }

  /**
   * Go ahead and delete ExpoConfigView and replace it with your content;
   * we just wanted to give you a quick view of your config.
   */
  /*
  function MyScreen() {
    return (
      <View>
        <Text style={styles.TextStyle}>My route name is  {routeName}</Text>
        <Text style={styles.TextStyle}>From Link screen  {name}</Text>
        <TextInput style={styles.input}
          value={textValue}
          placeholder="Enter number"
          placeholderTextColor='black'
          onChangeText={(text) => updateTextValue(text)}
          keyboardType={'numeric'}
        />
      </View>)
  }

  <Image source={require('../assets/moneyImage.png')} style={{ width: 100, height: 65 }} />
  */
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.welcome}>
          <Image source={require('../assets/moneyImage.png')} style={{ width: 80, height: 50, alignItems: 'center', }} />
        </View>

        <View>
          <Text style={styles.TextStyle}> Enter Betting Amount</Text>

          <TextInput style={styles.input}
            value={textValue}
            onChangeText={(text) => updateTextValue(text)}
            keyboardType={'number-pad'}
            autoCorrect={true}
          />
        </View>

        <View>
          <View style={styles.row}>
            <Text style={styles.TextStyle2}> Enter odds eg. xxx or -xxx</Text>

            <View>
              <TouchableOpacity
                onPress={() => updateOddsValue("-")}
              >
                <Image
                  source={require('../assets/images/minusImage.jpg')}
                  style={{ marginTop: 7, marginLeft: 15, width: 25, height: 25, borderRadius: 20 / 2 }}
                />
              </TouchableOpacity>
            </View>
          </View>

          <TextInput style={styles.input}
            value={oddsValue}
            onChangeText={(text) => updateOddsValue(text)}
            keyboardType={'number-pad'}
          />
        </View>

        <View>
          <TouchableOpacity
            style={styles.FormulaButtonStyle}
            activeOpacity={.5}
            onPress={() => calc()}
          >
            <Text style={styles.TextStyle}> Calculate Winnings</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            style={styles.FormulaButtonStyle}
            activeOpacity={.5}
            onPress={() => clearWindow()}
          >
            <Text style={styles.TextStyle}> Clear</Text>
          </TouchableOpacity>

        </View>
        <View>
          <Text style={styles.FormulaButtonStyle}> {formulaValue} </Text>
        </View>
      </ScrollView>
    </View>
  )
}

BettingScreen.navigationOptions = {
  title: 'Betting Screen ... K Woodall',
  headerStyle: {
    backgroundColor: 'gray',
  },
};
/*

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const printValues = e => {
    e.preventDefault();
    console.log(username, password);
  };

  return (
    <form onSubmit={printValues}>
      <label>
        Username:
        <input
          value={username}
          onChange={event => setUsername(event.target.value)}
          name="username"
          type="text"
        />
      </label>
      <br />
      <label>
        Password:
        <input
          value={password}
          onChange={event => setPassword(event.target.value)}
          name="password"
          type="password"
        />
      </label>
      <br />
      <button>Submit</button>
    </form>
  );
}


     //setFormulaValue(tot.toFixed(2) + " = " + totStr);
      //setFormulaValue(minusOdds.toFixed(2) + " = " + totMinusStr);
      //showMessage("Message change");
 
<View>
        <Text style={styles.TextStyle}> Enter money line eg. +xxx or -xxx</Text>
 
        <TextInput style={styles.input}
          value={mlValue}
          onChangeText={(text) => updateMLValue(text)}
          keyboardType={'numeric'}
        />
      </View>
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#03fc3d'
  },
  container2: {
    flexDirection: 'row',
    padding: 10,
    marginTop: 10,
    backgroundColor: '#d9f9b1',
    alignItems: 'center',
  },
  instructions: {
    fontSize: 18,
    textAlign: 'center',
    height: 60,
    color: '#333333'
  },
  FormulaButtonStyle: {
    marginTop: 5,
    paddingTop: 15,
    paddingBottom: 15,
    marginLeft: 30,
    marginRight: 30,
    backgroundColor: 'lightblue',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
    color: 'black',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '500'
  },
  TextStyle: {
    color: 'black',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '500'
  },
});
*/

const styles = StyleSheet.create({

  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#03fc3d'
  }, stuff: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'coral'
  },
  welcome: {
    fontSize: 40,
    textAlign: 'center',
    margin: 10,
    alignItems: 'center',
  },
  instructions: {
    fontSize: 18,
    textAlign: 'center',
    height: 60,
    color: '#333333',
    width: wp('84.5%'),
    height: hp('17%'),
  },
  input: {
    width: wp('80.5%'),
    height: hp('8%'),
    marginLeft: 30,
    marginRight: 30,
    //width: 350,
    //height: 55,
    backgroundColor: 'gray',
    marginTop: 10,
    color: 'blue',
    borderRadius: 14,
    fontSize: 18,
    fontWeight: '500',
    textShadowColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',

  },
  misc: {
    width: wp('50.5%'),
    height: hp('5%'),
  },
  row: {
    flexDirection: 'row',
    textAlign: 'center',
    justifyContent: 'center',
  },
  button: {
    marginTop: 1,
    marginLeft: 140,
    padding: 1,
    width: 100,
    borderRadius: 14,
    width: wp('84.5%'),
    //height: hp('17%'),
  },
  SubmitRowStyle: {
    marginTop: 10,
    paddingTop: 15,
    paddingBottom: 15,
    backgroundColor: '#00BCD4',
    width: 50,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
    width: wp('84.5%'),
    //height: hp('17%'),
  },
  FormulaButtonStyle: {
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 10,
    marginLeft: 30,
    marginRight: 30,
    backgroundColor: 'lightblue',
    borderRadius: 10,
    borderWidth: 1,
    //width: 300,
    borderColor: '#fff',
    color: 'black',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '500',
    width: wp('80.5%'),
    height: hp('8%'),
  },
  SubmitButtonStyle: {
    marginTop: 10,
    paddingTop: 15,
    paddingBottom: 15,
    marginLeft: 30,
    marginRight: 30,
    backgroundColor: '#00BCD4',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
    width: wp('84.5%'),
    //height: hp('17%'),
  },
  SubmitButtonStyle2: {
    marginTop: 10,
    marginBottom: 10,
    paddingTop: 5,
    paddingBottom: 15,
    marginLeft: 30,
    marginRight: 30,
    backgroundColor: 'red',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
    width: wp('84.5%'),
    //height: hp('17%'),
  },
  TextStyle: {
    color: 'black',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '500'
  },
  TextStyle2: {
    marginTop: 7,
    marginBottom: 0,
    color: 'black',
    //color: theme.primary,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '500'
  },
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#03fc3d',
  },
});


