import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

class MenuButton extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<View style={[styles.button]}>
				<View/>
				<Text style={styles.label}>{this.props.children}</Text>
			</View>
		);
	}
}
export default MenuButton;
const styles = StyleSheet.create({
	button: {
		minWidth: 110,
		minHeight: 110,
		backgroundColor: '#ffffff22',
		justifyContent: 'space-between',
		marginRight: 10,
		borderRadius: 4,
		padding: 10

	},
	label: {
		color: 'white',
		fontSize: 0.9
	}
});
