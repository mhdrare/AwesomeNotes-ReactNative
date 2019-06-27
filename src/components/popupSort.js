import React from 'react';
import { Modal, TouchableOpacity, TouchableHighlight, View, Text, StyleSheet } from 'react-native';

export default class PopupSort extends React.Component {
	closePopup = () => {
		this.props.changePopup(false);
	}
	render() {
		return (
		<TouchableOpacity onPress={() => this.closePopup()} style={{width: '100%', height: '100%'}}>
			<TouchableOpacity disabled={true} activeOpacity={1} style={styles.modal}>
				<View style={{backgroundColor: '#FFFFFF', elevation: 2}}>
					<View style={{margin: 10, fontSize: 15}}>
						<TouchableHighlight>
							<Text style={styles.title}>{'Ascending'.toUpperCase()}</Text>
						</TouchableHighlight>
						<TouchableHighlight>
							<Text style={styles.title}>{'Descending'.toUpperCase()}</Text>
						</TouchableHighlight>
						<TouchableOpacity onPress={()=>this.closePopup()}>
							<Text style={styles.title}>{'Cancel'.toUpperCase()}</Text>
						</TouchableOpacity>
					</View>
				</View>
			</TouchableOpacity>
		</TouchableOpacity>
		)
	}
}

const styles = StyleSheet.create({
	title: {
		margin: 5,
		fontSize: 15,
		fontWeight: '300',
		color: '#000000'
	},
	modal: {
		width: 156, 
		position: 'absolute', 
		right: 10, 
		top: 40
	}
});