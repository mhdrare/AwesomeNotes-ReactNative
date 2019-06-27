import React, {Component} from "react";
import { FlatList, Text, StyleSheet, View, TouchableOpacity, Image } from "react-native";
import DataCategory from './dummy/category';

class DummyDataItem extends Component {
	render() {
		return (
			<TouchableOpacity style={{width: '100%'}}>
				<Image source={require('../assets/img/wishlist.png')} />
	            <Text numberOfLines={1}>{this.props.item.category}</Text>
	        </TouchableOpacity>
		)
	}
}

export default class listNotes extends Component {
	render() {
		return (
			<View>
				<FlatList 
					data = { DummyCategory }
					renderItem = {({item, index}) => { return (
							<DummyDataItem item={item} index={index}>
								
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