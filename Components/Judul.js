import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Judul extends React.Component{
	render(){
		return(
			<Text title="BIODATA :"/>
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


export default Judul;