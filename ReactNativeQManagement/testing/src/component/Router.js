import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import CompanyList from './src/component/CompanyList';

const RouterComponent = () => {

  return (
    <Router>
    <Scene key="login" component>={CompanyList} title="List of companies" />
    </Router>
  );

};

export default RouterComponent;
