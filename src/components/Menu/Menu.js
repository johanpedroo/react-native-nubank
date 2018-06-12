import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import MenuButton from './MenuButton';

export default class Menu extends React.Component {
	render() {
		return (
			<ScrollView horizontal={true} style={styles.menu}>
				<MenuButton>Indicar amigos</MenuButton>
				<MenuButton>Depositar</MenuButton>
				<MenuButton>Transferir</MenuButton>
				<MenuButton>Pagar</MenuButton>
				<MenuButton>Ajustar limite</MenuButton>
				<MenuButton>Bloquear Cartão</MenuButton>
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
	menu: {
		display: 'block',
		// backgroundColor: 'white',
		flex: 0,
		overflowX: 'auto',
		overflowY: 'hidden',
		width: '100%',
		height: 130,
		left: 0,
		padding: 20,
		paddingTop: 0,
	}
});
