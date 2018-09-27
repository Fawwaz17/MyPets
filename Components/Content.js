import React,{Component} from 'react'
import {
  createStackNavigator
} from 'react-navigation';
import { View, Text } from 'react-native'
import Login from './Components/Input/Login';

export default class Content extends Component {
  render(){
    return (
      <View>
        <Text> BIODATA </Text>
      </View>
      )
  }
}

const styles = {
  Text : {
    color : '#FFFFFF',
    alignItems : 'center' 

  }
}