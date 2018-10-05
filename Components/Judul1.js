import React,{Component}from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';

export default class Judul1 extends Component{
	redirect()
	{
		Alert.alert("This Button is ready")

	}
	render(){
		return(
				<View style={styles.container}>
					<Text style={warna.wn}> Welcome To MyPets, Hope you enjoy it. Lina </Text>
					<Text style={{ marginBottom : 400}}></Text>
					<Button title="					Next					" color="#cd5555" onPress ={() => {this.redirect()}}/>
				</View>
			)
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f87d42',
    //'#f87d42'
  }
});
const warna = {
	yoi : {
		color : "#774898",
		fontSize : 20,
		fontWeight : 'bold',
		marginBottom : 90,
		margin : 100,
	}
}
