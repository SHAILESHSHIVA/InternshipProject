// Import libraries for making a component
import React from 'react';
import {
          Text,
          View
       } from 'react-native';

// Make a component
const green = (props) => {
  const {  textStyle, viewStyle } = styles;

	return  (

<View style = {viewStyle}>
            <Text style = {textStyle}>{props.greenText}</Text>
            </View>
              );
};
const styles = {
  viewStyle : {
    backgroundColor : 'green',
    height:3,
    },
  textStyle : {
    fontSize :1

  }
};
// Make the component available to other parts of the app
export default green;
