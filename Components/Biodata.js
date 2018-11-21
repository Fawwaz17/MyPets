import React,{Component}from 'react';
import { View, Text, StyleSheet, Button, Alert, Image, TouchableOpacity, ScrollView } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';

class Biodata extends Component{
	static navigationOptions = { header: null };
	hm()
	{
		Alert.alert("More Page Soon")

	}
	render(){
		return(
			<ScrollView>
				<View style={styles.container}>
				
					<View style={styles.top}>
						<TouchableOpacity onPress ={() =>{this.hm()}}>
							<Image
		        	style={styles.Img}
		        	source={require('/app1/Assets/White.png')}/>
	    			</TouchableOpacity>
	    				<TouchableOpacity onPress ={() =>{this.hm()}}>
							<Image
		        	style={styles.Img}
		        	source={require('/app1/Assets/White.png')}/>
	    			</TouchableOpacity>
						<TouchableOpacity onPress ={() =>{this.hm()}}>
							<Image
		        	style={styles.Img}
		        	source={require('/app1/Assets/White.png')}/>
	    			</TouchableOpacity>
						</View>

							<View style={styles.Mid}>
								<Text style={styles.Text}>Breaking News Animals</Text>
							</View>
							<ScrollView horizontal={true}>
							<View style={styles.Mid}>
								<TouchableOpacity onPress ={() =>{this.hm()}}>
									<Image
				        	style={styles.Brk}
				        	source={require('/app1/Assets/White.png')}/>
			    			</TouchableOpacity>
								<TouchableOpacity onPress ={() =>{this.hm()}}>
									<Image
				        	style={styles.Brk}
				        	source={require('/app1/Assets/White.png')}/>
			    			</TouchableOpacity>
			    			<TouchableOpacity onPress ={() =>{this.hm()}}>
									<Image
				        	style={styles.Brk}
				        	source={require('/app1/Assets/White.png')}/>
			    			</TouchableOpacity>
								</View>
						</ScrollView>

					<View style={styles.Mid}>
						<Text style={styles.Text}>Competition</Text>
					</View>
					<ScrollView horizontal={true}>
						<View style={styles.Mid}>
							<TouchableOpacity onPress ={() =>{this.hm()}}>
								<Image
			        	style={styles.Brk}
			        	source={require('/app1/Assets/White.png')}/>
		    			</TouchableOpacity>
		    				<TouchableOpacity onPress ={() =>{this.hm()}}>
								<Image
			        	style={styles.Brk}
			        	source={require('/app1/Assets/White.png')}/>
		    			</TouchableOpacity>
							</View>
					</ScrollView>

				</View>
				</ScrollView>
			)
	}
}

class ProfileScreen extends React.Component {
  render() {
    return (
    <ScrollView>
      <View style={styles.Profile}>
        <Image style={styles.ImgProfile} source={require ('/app1/Assets/profile.png')}/>
      </View>
    </ScrollView>
    );
  }
}

const BotNav = createBottomTabNavigator({
  Home: { screen: Biodata },
  Profile: { screen: ProfileScreen },

});

export default class App extends Component<Props> {
	static navigationOptions = { header: null };
  render() {
    return (
			<BotNav/>
		);
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    backgroundColor: '#f87d42',
    //'#f87d42'
  },
  Profile: {
    flex: 1,
    backgroundColor: '#f87d42',
    alignItems : 'center'
    //'#f87d42'
  },
  ImgProfile: {
  	marginTop : 20,
		marginBottom : 50
  },
	top: {
		flexDirection : 'row',
		marginTop : 10,
		marginBottom : 0,
		justifyContent : 'center',
    //'#f87d42'
  },
  	Mid: {
		flexDirection : 'row',
		marginLeft : 20,
		margin : 10,
    //'#f87d42'
  },
  Img : {
    width : 100,
    height : 100,
    borderRadius : 10,
    marginBottom : 15,
		margin : 10,
  },
  Brk : {
  	width :392,
    height : 232,
    borderRadius : 10,
    marginBottom : 15,
	marginLeft : 20,
  },
  Text : {
  	color : '#fff',
  	fontSize : 18,
  	fontFamily: 'Helvetica'
  },
});
const warna = {
	yoi : {
		color : "#FFFFFF",
		fontSize : 14,
    alignItems : 'center',
	}
}
