import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

class Greeting extends Component {
  render() {
    return (
      <View>
        <Text>{this.props.name}!</Text>
      </View>
    );
  }
}

export default class LotsOfGreetings extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Greeting name='Oxygen'/>
        <Greeting name='Not'/>
        <Greeting name='Included'/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  }
});