// Import libraries for making a component
import React from 'react';
import {
          Text,
          View
       } from 'react-native';

// Make a component
const red = (props) => {
  const {  textStyle, viewStyle } = styles;

	return  (

<View style = {viewStyle}>
            <Text style = {textStyle}>{props.redText}</Text>
            </View>
              );
};
const styles = {
  viewStyle : {
    backgroundColor : 'red',
    height:3,
    },
  textStyle : {
    fontSize :1
  }
};
// Make the component available to other parts of the app
export default red;
