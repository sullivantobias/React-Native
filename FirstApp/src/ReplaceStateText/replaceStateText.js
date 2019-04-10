import React, {Component} from 'react';
import {View} from 'react-native';
import {Greeting} from "./greetings";


export default class JustSimpleText extends Component {
  render() {
    return (
        <View>
          <Greeting name='Oxygen'/>
          <Greeting name='Not'/>
          <Greeting name='Included'/>
        </View>
    );
  }
}