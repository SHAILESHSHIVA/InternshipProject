// Import libraries for making a component
import React from 'react';
import {
          Text,
          View
       } from 'react-native';

// Make a component
const footer = (props) => {
  const {  textStyle, viewStyle } = styles;

	return  (

<View style = {viewStyle}>
            <Text style = {textStyle}>{props.footerText}</Text>
            </View>
              );
};
const styles = {
  viewStyle : {
    backgroundColor : '#2dabf9',
    height: 20,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    height: 30,
    paddingTop: 12,

},
  textStyle : {
    fontSize :8,
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  }
};
// Make the component available to other parts of the app
export default footer;
