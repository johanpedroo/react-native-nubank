import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import MenuButton from './MenuButton';

export default class Menu extends React.Component {
	render() {
		return (
			<ScrollView horizontal={true} style={styles.menu}>
				<MenuButton/>
				<MenuButton/>
				<MenuButton/>
				<MenuButton/>
				<MenuButton/>
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
	menu: {
		flex: 'auto',
		// backgroundColor: 'white',
		overflowX: 'auto',
		overflowY: 'hidden',
		width: '100%',
		maxHeight: '34%',
		left: 0,
		padding: 20,
		paddingTop: 0,
	}
});
