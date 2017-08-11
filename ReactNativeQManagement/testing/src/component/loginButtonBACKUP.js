import React, { Component } from 'react';
import { AppRegistry,
   Text,
    View,
    StyleSheet,
    TouchableOpacity
   } from 'react-native';

class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = {showText: true};

    // Toggle the state every second
    setInterval(() => {
      this.setState(previousState => {
        return { showText: !previousState.showText };
      });
    }, 1000);
  }

  render() {
    let display = this.state.showText ? this.props.text : ' ';
    return (
      <TouchableOpacity>
      <Text>{display}</Text>
      </TouchableOpacity>
    );
  }
}

export default class BlinkApp extends Component {
  render() {
    return (
      <View >
      <Text style={styles.textStyle}>More Time with wellbeings, Less Time In Queue</Text>
      <View style={styles.viewStyle}>
      <View style={styles.textStyle}>
        <Blink text='Sign in With Google' />
      </View>
      </View>
      <Text style={styles.textStyle}>Get connected now and have abundance of Time . . !</Text>
      </View>
    );      {/*   yellow warning here in View style, two styling */}
  }
}
const styles = StyleSheet.create({
viewStyle : {
  backgroundColor : '#2dabf9',
  height: 40,
  alignItems:'center',
  width : 200,
  borderWidth : 1,
  borderRadius :20,
  alignSelf : 'center',
  borderColor: '#6B7794',
   borderWidth: 1,
   margin: 5,
  marginRight: 5

},
textStyle : {
  //fontSize :,
  //fontWeight : '600',
  paddingTop: 8,
  paddingBottom :8,
  alignSelf: 'center',
  },
});
// skip this line if using Create React Native App
AppRegistry.registerComponent('testing', () => BlinkApp);
