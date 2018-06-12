import React, {Component} from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

class TransparentButton extends Component {
	render() {
		return (
			<TouchableOpacity style={[styles.button, this.props.style]} onPress={this.props.onPress}>
				<Text style={[styles.text, this.props.textStyle]}>{this.props.children}</Text>
			</TouchableOpacity>
		);
	}
}

TransparentButton.propTypes = {
	textStyle: PropTypes.object,
	style: PropTypes.any,
	onPress: PropTypes.func
};
TransparentButton.defaultProps = {
	onPress: () => {}
};

export default TransparentButton;


const styles = StyleSheet.create({
	text: {
		color: '#82269e',
		flex: 1,
		fontSize: '.9em',
		fontWeight: 'bold',
		lineHeight: 60
	},
	button: {
		height: 55,
		backgroundColor: 'transparent',
		borderWidth: 1,
		borderColor: '#82269e',
		borderRadius: 4,
		justifyContent: 'center',
		alignItems: 'center'
	}
});
