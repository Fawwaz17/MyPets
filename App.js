import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, Button, ScrollView} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { StackNavigator } from 'react-navigation';

import Login from './Components/Login';
import Judul1 from './Components/Judul1';
import BotNav from './Components/Biodata.js';

const AppNavigator = createStackNavigator ({
	Login: {
    screen: Login,
  },
  Judul1: {
    screen: Judul1,
  },
  Biodata: {
    screen: BotNav,
  },
    initialRouteName: 'Login',
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
