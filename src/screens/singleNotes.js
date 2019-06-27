import Header from '../components/header/notes';
import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header navigation={this.props.navigation} />
      </React.Fragment>
    );
  }
}