// Import libraries for making a component
import React from 'react';
import {
          Text,
          View
       } from 'react-native';

// Make a component
const header = (props) => {
  const {  textStyle, viewStyle } = styles;

	return  (

<View style = {viewStyle}>
            <Text style = {textStyle}>{props.headerText}</Text>
            </View>
              );   { /*    // can also use like <View style = {style.viewStyle} if we delete previous line i.e.   const {  textStyle, viewStyle } = styles;          */}
};
const styles = {
  viewStyle : {
    backgroundColor : '#2dabf9',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 5,
    shadowColor: '#fcd309',
    shadowOffset: { width: 0, height: 20 },
    shadowOpacity: 0.9,

    //elevation: 2,
    //position: 'relative'

  },
  textStyle : {
    fontSize :34
  }
};
// Make the component available to other parts of the app
export default header;
