import React, {Component} from 'react';
import {View} from "react-native";

import ReplaceText from "../ReplaceStateText/replaceStateText";

import Form from "../inputActive/form"

export class ProfileScreen extends Component {
  static navigationOptions = {
    title: 'Profile',
  };

  render() {
    return (
        <View style={{flex: 1}}>
          <ReplaceText/>
          <Form/>
        </View>
    );
  }
}