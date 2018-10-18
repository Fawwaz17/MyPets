import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, Button} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { StackNavigator } from 'react-navigation';

import Login from './Components/Login';
import Judul1 from './Components/Judul1';
import Biodata from './Components/Biodata';

const AppNavigator = createStackNavigator ({
	Login : Login,
	Judul1 : Judul1,
	Biodata : Biodata,

});

export default class App extends Component<Props> {
  render() {
    return (
      	<AppNavigator/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    //'#f87d42'
  }
});
