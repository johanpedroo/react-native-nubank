import React, {Component} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import PrincipalCard from '../components/PrincipalCard';
import Menu from "../components/Menu/Menu";

class MainScreen extends Component {
	render() {
		return (
			<ScrollView contentContainerStyle={styles.container}>
				<View style={styles.header}>
					<Text style={styles.name}>Johan Pedro</Text>
				</View>
				<PrincipalCard/>
				<Menu/>
			</ScrollView>
		);
	}
}

MainScreen.propTypes = {};

export default MainScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#82269e',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	header:{
		flex: .16,
		justifyContent: 'center'
	},
	name: {
		fontSize: '1.9em',
		fontWeight: '500',
		color: 'white'
	}
});
