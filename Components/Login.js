import React, {Component} from 'react';
import {
    StyleSheet, Text, View, TextInput, Button, Image, TouchableOpacity, Alert
} from 'react-native';
import Judul1 from './Judul1';
import PasswordInputText from 'react-native-hide-show-password-input';

export default class Login extends Component{
    render(){
        return(
            <View style = {styles.container}>
                <Image
                style={styles.Img}
                source={require('/app1/Assets/Mypets.png')}
                />
                <TextInput
                    style={{height: 40, width : 250,marginTop:70, backgroundColor:'white'}}
                    placeholder ="    Username"
                    onChangeText={(username) => this.setState({username})}
                />

                <TextInput
                    style={{height: 40, width : 250,marginTop:20, marginBottom:30, backgroundColor: 'white'}}
                    secureTextEntry
                    placeholder ="    Password"
                    onChangeText={(password) => this.setState({password})}
                />

                <Button
                onPress ={() =>{this.props.navigation.navigate('Judul1')}}
                style ={{marginTop: 70, flexDirection : 'row', justifyContent : 'space-between'}}
                title="                    Masuk                   "
                color="#cd5555"
                />
            </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex:3,
        backgroundColor:'#f87d42',
        justifyContent: 'center',
        alignItems: 'center',
    },

    title: {
        fontWeight: 'bold',
        fontSize : 48,
        color:'black',
        alignItems:"center",
        marginTop:100,
        textAlign:'center'
    },
    Img : {
      alignItems : 'center',
      width : 170,
      height : 130,
      marginLeft :  10,
      marginTop : 50,
    }
});
