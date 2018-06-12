import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import TrnasparentButton from './TransparentButton';

class PrincipalCard extends Component {
	render() {
		return(
			<View style={styles.principalCard}>
				<View></View>
				<View>
					<Text style={styles.status}>Cartão em produção</Text>
					<Text style={styles.prev}>Previsão: <Text style={styles.prevDate}>26 JUN</Text></Text>

					<Text style={styles.address}>{`Rua Pioneira Regina Marson Badan, 319,\nJardim Iguaçú - Maringá/PR\nCEP: 87060-160`}</Text>
				</View>
				<TrnasparentButton>RECEBI O CARTÃO</TrnasparentButton>
			</View>
		)
	}
}

export default PrincipalCard;
const styles = StyleSheet.create({
	principalCard:{
		backgroundColor: 'white',
		flex: .75,
		margin: 20,
		borderRadius: 3,
		padding: 25,
		justifyContent: 'space-between',
		width: '90%'
	},
	status: {
		fontSize: '1.1em',
		fontWeight: 'bold'
	},
	prev: {
		fontWeight: '600'
	},
	prevDate: {
		fontSize: '1.1em',
		fontWeight: 'bold'
	},
	address: {
		marginTop: 20,
		fontSize: '.75em'
	}
});
