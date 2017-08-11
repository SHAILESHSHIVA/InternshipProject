import React, { Component } from 'react';
import {
        ScrollView,
        View,
        Text,
        StyleSheet,
        TouchableOpacity,
        Image
        } from 'react-native';

//import axios from 'axios';

class CompanyList extends Component {
  componentWillMount() {
    console.log('componentWillMount in CompanyList');
//axios.get('http://127.0.0.1:3000/Contact_us')
//.then(response => console.log(response));
  }
  render (){
  return (
  <ScrollView>
  <View style={styles.viewStyle} >
  <TouchableOpacity>

  <Text style={styles.textStyle}> Apple </Text>
  <Text> Helpline : 1800 3000 8282</Text>
  </TouchableOpacity>
  </View>

  <View style={styles.viewStyle}>
  <TouchableOpacity>
  <Text style={styles.textStyle}> Samsung </Text>
  <Text>Helpline : 1800 3000 8282</Text>
  </TouchableOpacity>
  </View>

  <View  style={styles.viewStyle}>
  <TouchableOpacity>
  <Text style={styles.textStyle}> Motorola </Text>
  <Text> Helpline : 1800 3000 8282</Text>
  </TouchableOpacity>
  </View>

  <View  style={styles.viewStyle}>
  <TouchableOpacity>
  <Text style={styles.textStyle}> Sony  </Text>
  <Text> Helpline : 1800 3000 8282</Text>
  </TouchableOpacity>
  </View>

  <View style={styles.viewStyle}>
  <TouchableOpacity>
  <Text style={styles.textStyle}> Micromax </Text>
  <Text> Helpline : 1800 3000 8282</Text>
  </TouchableOpacity>
  </View>
  <View style={styles.viewStyle} >
  <TouchableOpacity>

  <Text style={styles.textStyle}> 1 </Text>
  <Text> Helpline : 1800 3000 8282</Text>
  </TouchableOpacity>
  </View>

  <View style={styles.viewStyle}>
  <TouchableOpacity>
  <Text style={styles.textStyle}> 2 </Text>
  <Text>Helpline : 1800 3000 8282</Text>
  </TouchableOpacity>
  </View>

  <View  style={styles.viewStyle}>
  <TouchableOpacity>
  <Text style={styles.textStyle}> 3 </Text>
  <Text> Helpline : 1800 3000 8282</Text>
  </TouchableOpacity>
  </View>

  <View  style={styles.viewStyle}>
  <TouchableOpacity>
  <Text style={styles.textStyle}> 4 </Text>
  <Text> Helpline : 1800 3000 8282</Text>
  </TouchableOpacity>
  </View>

  <View style={styles.viewStyle}>
  <TouchableOpacity>
  <Text style={styles.textStyle}> 5 </Text>
  <Text> Helpline : 1800 3000 8282</Text>
  </TouchableOpacity>
  </View>
  <View style={styles.viewStyle} >
  <TouchableOpacity>

  <Text style={styles.textStyle}> 6 </Text>
  <Text> Helpline : 1800 3000 8282</Text>
  </TouchableOpacity>
  </View>

  <View style={styles.viewStyle}>
  <TouchableOpacity>
  <Text style={styles.textStyle}> 7 </Text>
  <Text>Helpline : 1800 3000 8282</Text>
  </TouchableOpacity>
  </View>

  <View  style={styles.viewStyle}>
  <TouchableOpacity>
  <Text style={styles.textStyle}> 8 </Text>
  <Text> Helpline : 1800 3000 8282</Text>
  </TouchableOpacity>
  </View>

  <View  style={styles.viewStyle}>
  <TouchableOpacity>
  <Text style={styles.textStyle}> 9 </Text>
  <Text> Helpline : 1800 3000 8282</Text>
  </TouchableOpacity>
  </View>

  <View style={styles.viewStyle}>
  <TouchableOpacity>
  <Text style={styles.textStyle}> 10 </Text>
  <Text> Helpline : 1800 3000 8282</Text>
  </TouchableOpacity>
  </View>
  </ScrollView>
  );
}
}
const styles = StyleSheet.create ({
  viewStyle : {
    borderWidth : 1.2,
    borderRadius : 20,
    borderColor : 'white',
    borderBottomWidth:0,
    shadowColor:'yellow',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginRight: 40,
    marginLeft: 40,
    marginTop: 10,
  },
  textStyle : {
    fontWeight : '600',
    fontSize : 20,
    alignSelf: 'center',
  }
  });
export default CompanyList;
