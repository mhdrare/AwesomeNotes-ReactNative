import Header from '../components/header/notes';
import React, {Component} from 'react';
import { Picker, FlatList, StyleSheet, Text, TextInput, View, TouchableOpacity, Image} from 'react-native';
import DataCategory from '../components/dummy/category';

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            category: ''
        };
    }

    render() {
        return (
            <React.Fragment>
                <Header navigation={this.props.navigation} />
                <View style={styles.viewNotes}>
                    <TextInput placeholder="ADD TITLE . . ." style = {{fontSize: 15}}>{this.props.navigation.state.params.title}</TextInput>
                    <TextInput placeholder="ADD DESCRIPTION . . ."  multiline={true} style={{fontSize: 15, textAlignVertical: 'top', height: 145}}>{this.props.navigation.state.params.description}</TextInput>
                    <Text style={styles.textTitle}>{'Category'.toUpperCase()}</Text>
                    <Picker
                        selectedValue = {this.props.navigation.state.params.category}
                        onValueChange = {(itemValue, itemIndex) => this.setState({category: itemValue})}>
                        <Picker.Item label = 'Personal' value = 'Personal'/>
                        <Picker.Item label = 'Work' value = 'Work'/>
                        <Picker.Item label = 'Wishlist' value = 'Wishlist'/>
                    </Picker>
                </View>
            </React.Fragment>
        );
    }
}

const styles = StyleSheet.create({
    textTitle: {
        fontWeight: '600',
        fontSize: 15,
        color: '#000000'
    },
    viewNotes: {
        width: '85%', 
        alignSelf: 'center', 
        paddingTop: 40
    }
});