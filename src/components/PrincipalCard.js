import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import TrnasparentButton from './TransparentButton';

class PrincipalCard extends Component {
	render() {
		return(
			<View style={styles.principalCard}>
				<View></View>
				<View>
					<Text>
						Cartão em produção
					</Text>
					<Text>Previsão: <Text>26 JUN</Text></Text>

					<Text>{`Rua Pioneira Regina Marson Badan, 319.\nJardim Iguaçú - Maringá/PR\nCEP: 87060-160`}</Text>
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
		flex: .65,
		margin: 20,
		borderRadius: 3,
		padding: 25,
		justifyContent: 'space-between',
		width: '90%'
	}
});
