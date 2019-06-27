import React, {Component} from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal } from 'react-native';
import PopupSort from '../popupSort';

export default class listNotes extends Component {
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
            <View style={styles.header}>
                <TouchableOpacity style={styles.item} onPress={() => {this.props.navigation.openDrawer()}}>
                    <Image 
                      style={styles.image}
                      source={require('../../assets/img/profile.jpg')}>
                    </Image>
                </TouchableOpacity>
                <View style={styles.nameApp}>
                    <Text style={styles.title}>{'Awesome Notes'.toUpperCase()}</Text>
                </View>
                <TouchableOpacity style={styles.itemSort} onPress={() => this.changePopup(true)}>
                    <Image
                        style={styles.imageSort}
                        source={require('../../assets/img/sort.png')}>
                    </Image>
                </TouchableOpacity>
                <Modal transparent={true} visible={this.state.isModalVisible} onRequestClose={() => this.changePopup(false)} style={{width: 150}} animationType='fade'>
                    <PopupSort changePopup={this.changePopup}/>
                </Modal>
            </View>
        </React.Fragment>
        );
    }
};

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        height: 49,
        elevation: 3,
        backgroundColor: '#FFFFFF',
        alignItems: 'center'
    },
    title: { 
        fontSize: 12, 
        fontWeight: '600', 
        color: '#000000', 
        alignSelf: 'center' 
    },
    item: {
        flex: 1,
        padding: 15
    },
    itemApp: {
        flex: 1
    },
    itemSort: {
        flex: 1,
        alignItems: 'flex-end',
        padding: 15
    },
    image: {
        width: 31,
        height: 32,
        borderRadius: 54
    },
    imageSort: {
        width: 20,
        height: 20
    }
});