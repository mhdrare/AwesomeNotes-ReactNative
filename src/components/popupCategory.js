import React from 'react';
import { TouchableOpacity, View, TextInput, Text, StyleSheet } from 'react-native';

export default class PopupSort extends React.Component {
	closePopup = () => {
		this.props.changePopup(false);
	}
	render() {
		return (
			<TouchableOpacity onPress={() => this.closePopup()} style={{width: '100%', height: '100%'}}>
				<TouchableOpacity disabled={true} activeOpacity={1} style={styles.modal}>
					<View style={{backgroundColor: '#FFFFFF', elevation: 2, borderRadius: 5}}>
						<View style={{margin: 10}}>
							<TextInput style={{paddingLeft: 10, paddingRight: 10}} placeholder='Category Name'/>
							<TextInput style={{paddingLeft: 10, paddingRight: 10}} placeholder='Category URL'/>
						</View>
						<View style={{margin: 10, fontSize: 15, flexDirection: 'row', alignSelf: 'flex-end'}}>
							<TouchableOpacity>
								<Text style={styles.title}>Add</Text>
							</TouchableOpacity>
							<TouchableOpacity onPress={()=>this.closePopup()}>
								<Text style={styles.cancel}>Cancel</Text>
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
	cancel: {
		margin: 5,
		fontSize: 15,
	},
	modal: {
		width: 250,
		position: 'absolute',
		alignSelf: 'center',
		top: 200
	}
});