import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, FlatList, TouchableOpacity, TextInput, Image, ScrollView, Content} from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";
import ListNotes from '../components/listNotes';
import Header from '../components/header/home';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class App extends Component {
    constructor(props) {
      super(props);
    
      this.state = {};
    }

    handleNavigate = () => {
        const { navigation } = this.props;
        navigation.navigate('Notes');
    }
    
    render() {
        return (
          <React.Fragment>
            <Header navigation={this.props.navigation} modal={this.state} />
            <View style={styles.container}>
                <View style={{width: '85%', alignSelf: 'center', margin: 20}} transparent={true}>
                    <TextInput placeholder="Search..." style={{ backgroundColor: '#FFFFFF', paddingLeft: 20, borderRadius: 50, elevation: 2, height: 40 }} />
                </View>
                <ScrollView>
                    <ListNotes navigation={this.props.navigation}/>
                </ScrollView>
                <TouchableOpacity style={styles.fab} onPress={this.handleNavigate}>
                    <Image source={require('../assets/img/+.png')} />
                </TouchableOpacity>
            </View>
          </React.Fragment>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    flexbox: {
        width: 138, 
        height: 136, 
        backgroundColor: '#2FC2DF',
        margin: 14,
        borderRadius: 5,
        elevation: 3
    },
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
    },
    fab: {
        position: 'absolute', 
        width: 58, 
        height: 57, 
        alignItems: 'center', 
        justifyContent: 'center', 
        right: 10, 
        bottom: 30, 
        backgroundColor: '#FFFCFC', 
        borderRadius: 50, 
        elevation: 3
    }
});