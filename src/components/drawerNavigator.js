import React from 'react'
import { DrawerItems } from 'react-navigation'
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity, Modal } from 'react-native'
import DataCategory from './dummy/category'
import PopupCategory from './popupCategory'

class DummyDataItem extends React.Component {
	render() {
		return (
			<TouchableOpacity style={{width: '100%', flexDirection: 'row', alignItems: 'center', paddingLeft: 18 }}>
				<Image source={require('../assets/img/wishlist.png')}/>
	            <Text numberOfLines={1} style={styles.drawer}>{this.props.item.category}</Text>
	        </TouchableOpacity>
		)
	}
}

class PopupCategoryItem extends React.Component {
	constructor(props) {
        super(props);
  
        this.state = {
            isModalVisible: false,
        };
    }

    changePopup = (bool) => {
        this.setState({isModalVisible: bool})
    }

    render() {
    	return (
    	<React.Fragment>
    		<TouchableOpacity style={{width: '100%', flexDirection: 'row', alignItems: 'center', paddingLeft: 18, }} onPress={() => this.changePopup(true)}>
				<Image source={require('../assets/img/plus.png')} style={{width: 20, height: 20}}/>
				<Text style={styles.drawer}>Add Category</Text>
			</TouchableOpacity>
	    	<Modal transparent={true} visible={this.state.isModalVisible} onRequestClose={() => this.changePopup(false)} style={{width: 150}}>
		        <PopupCategory changePopup={this.changePopup}/>
		    </Modal>
		</React.Fragment>
    	)
    }
}

const ProfileDrawerContent = (props) => (
	<React.Fragment>
		<View style={styles.profile}>
			<Image
				style={styles.image}
				source={require('../assets/img/profile.jpg')}
			/>
			<Text style={styles.name}>
				M Faisal Akbar
			</Text>
		</View>
		<View>
			<FlatList 
				data = { DataCategory }
				renderItem = {({item, index}) => { return (
						<DummyDataItem item={item} index={index}>
							
						</DummyDataItem>
					);
				}
			}>
			</FlatList>
			<PopupCategoryItem/>
		</View>
	</React.Fragment>
)

const styles = StyleSheet.create({
	profile: {
		alignItems: 'center',
		margin: 15
	},
	image: {
		width: 95,
		height: 96,
		borderRadius: 54
	},
	name: {
		fontSize: 17,
		marginTop: 10,
		fontWeight: '600',
		color: '#000000'
	},
	drawer: {
		margin: 10,
		fontWeight: '600', 
		color: '#000', 
		fontSize: 15,
		paddingLeft: 10
	}
});

export default ProfileDrawerContent;