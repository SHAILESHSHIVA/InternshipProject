
import React from 'react';
import {
        AppRegistry,
        View,
        Button
        } from 'react-native';
import Header from './src/component/header';
import Red from './src/component/red';
import Green from './src/component/green';
import Footer from './src/component/footer';
import LoginButton from './src/component/loginButton';
import CompanyList from './src/component/CompanyList';


// this is function based component
const custumerComponent = () => {
  const { viewStyle } = styles;

  return (
  <View style = {viewStyle}>
  <Header headerText={'Q-Management'} />
  <LoginButton/>
  <CompanyList/>

                                                                    {/*}
                                                                  //  <Red redText={''} />
                                                                  //  <Green buttonText={''} />
                                                                  */}



  {/* <LoginButton loginButtonText={'Sign in with GooGle'/> */}
  <View style={{width: 50, height: 20, backgroundColor: '#c0e5fd'}} />
  <Footer footerText={' © 2008-2017 Q-Management, Inc. All Rights Reserved.           Contact us at : +91-9408778156'} />
  </View>
);
};
const styles = {
  viewStyle: {
    flex: 1,
    justifyContent : 'space-between',
    backgroundColor: '#c0e5fd',
    flexDirection: 'column',

  }
};
AppRegistry.registerComponent('testing', () => custumerComponent);
