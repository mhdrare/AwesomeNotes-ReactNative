import Header from '../components/header/addNotes';
import React, {Component} from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Image} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header navigation={this.props.navigation} />
        <View style={{width: '85%', alignSelf: 'center', paddingTop: 40}}>
        	<TextInput placeholder="ADD TITLE . . ." style={{fontSize: 15}}/>
          <TextInput placeholder="ADD DESCRIPTION . . ."  multiline={true} style={{fontSize: 15, textAlignVertical: 'top', height: 145}}/>
        </View>
      </React.Fragment>
    );
  }
}