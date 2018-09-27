import React,{Component}from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Judul1 extends Component{
	render(){
		return(
				<View style={styles.container}>
					<Text style={warna.wn}> Welcome To MyPets, Hope you enjoy it. Lina </Text>
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
		fontWeight : 'bold'
	}
}