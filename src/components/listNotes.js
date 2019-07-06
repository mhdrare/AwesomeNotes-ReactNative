import React, {Component} from 'react';
import { FlatList, Text, StyleSheet, View, TouchableOpacity } from "react-native";
import DummyData from '../dummy';

class DummyDataItem extends Component {
	render() {
		return (
			<TouchableOpacity
				onPress={() => {this.props.navigation.navigate('singleNotes', this.props.item)}}
				style={{
					width: 147, height: 140, margin: 9, borderRadius: 5, elevation: 2,
					backgroundColor: this.props.item.category == 'Wishlist' ? '#2FC2DF' : '#FAD06C'}}>
				<Text style={styles.textDate}>{this.props.item.time}</Text>
	            <Text numberOfLines={1} style={styles.textTitle}>{this.props.item.title}</Text>
	            <Text numberOfLines={1} style={styles.textBottom}>{this.props.item.category}</Text>
	            <Text numberOfLines={5} style={styles.textDescription}>{this.props.item.description}</Text>
	        </TouchableOpacity>
		)
	}
}

export default class listNotes extends Component {
	render() {
		return (
			<View style={{alignItems: 'center'}}>
				<FlatList 
					data = { DummyData }
					numColumns = {2}
					renderItem = {({item, index}) => { return (
							<DummyDataItem navigation={this.props.navigation} item={item} index={index}>
								
							</DummyDataItem>
						);
					}
				}>
				</FlatList>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	textDate: {
		margin: 5, 
		fontSize: 10,
		marginRight: 10, 
		textAlign: 'right', 
		color: '#FFFFFF'
	},
	textTitle: {
		fontSize: 15, 
		fontWeight: 'bold',
		width: 109,
		color: 'white', 
		marginLeft: 15
	},
	textBottom: {
		fontSize: 10,
		color: '#FFFBFB', 
		marginLeft: 15
	},
	textDescription: {
		fontSize: 10,
		color: '#FFFFFF', 
		marginLeft: 15,
		width: 120
	}
});