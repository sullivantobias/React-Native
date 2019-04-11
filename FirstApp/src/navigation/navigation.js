import React, {Component} from 'react';
import {Button} from "react-native";


export class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Home',
  };

  render() {
    const {navigate} = this.props.navigation;
    return (
        <Button
            title="Go profile"
            onPress={() => navigate('Profile')}
        />
    );
  }
}