import React,{Component}from 'react';
import { View, Text, StyleSheet, Button, Alert, Image } from 'react-native';

export default class Biodata extends Component{
	hm()
	{
		Alert.alert("More Page Soon")

	}
	render(){
		return(
				<View style={styles.container}>
        <Image
        style={styles.Img}
        source={require('/app1/Assets/pr.jpg')}
        />
					<Text style={warna.yoi}> Nama   :   Raihan Athaya Fawwaz</Text>
          <Text style={warna.yoi}> Alamat :   Purwokerto</Text>
          <Text style={{ marginBottom : 200}}></Text>
					<Button title="					Next					" color="#cd5555" onPress ={() => {this.hm()}}/>
				</View>
			)
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f87d42',
    alignItems : 'center',
    justifyContent : 'center',
    //'#f87d42'
  },
  Img : {
    alignItems : 'center',
    width : 220,
    height : 150,
    marginLeft :  10,
    borderRadius : 10,
    marginBottom : 15,
  }
});
const warna = {
	yoi : {
		color : "#FFFFFF",
		fontSize : 14,
    alignItems : 'center',
	}
}
