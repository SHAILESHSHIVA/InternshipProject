// Import libraries for making a component
import React from 'react';
import {
          Text,
          View,
          Button,
          TouchableOpacity
       } from 'react-native';

// Make a component
const loginButton = (props) => {
  const {  textStyle, viewStyle } = styles;

	return  (

<View style = {viewStyle}>
            <TouchableOpacity>
            <Text style = {textStyle}>{props.loginButtonText}</Text>
            </TouchableOpacity>
            </View>
              );
};
const styles = {
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
    fontSize :17,
    fontWeight : '600',
    paddingTop: 8,
    paddingBottom :8,
    alignSelf: 'center',

  }
};
// Make the component available to other parts of the app
export default loginButton;
