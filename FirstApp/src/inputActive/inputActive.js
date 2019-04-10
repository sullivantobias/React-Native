import React, {Component} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';

export default class InputTest extends Component {

  constructor(props) {
    super(props);

    this.state = {
      email: false,
      password: false
    }
  }

  toggleClass = (e) => {
    this.setState(previous => ({
      [e.target.name]: true
    }));
  };

  render() {
    return (
        <View style={{
          flex: 1,
          flexDirection: 'row',
          alignItems: 'stretch',
          justifyContent: 'space-evenly'
        }}>
          <TextInput
              style={[styles.inputsForm, this.state.email ? styles.active : '']}
              onFocus={this.toggleClass}
              onBlur={this.toggleClass}
              name={'email'}
              placeholder="Email"
              onChange={this.props.onChange}
          />
          <TextInput
              style={[styles.inputsForm, this.state.password ? styles.active : '']}
              onFocus={this.toggleClass}
              onBlur={this.toggleClass}
              name={'password'}
              placeholder="Password"
              onChange={this.props.onChange}
          />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  inputsForm: {
    borderBottomColor: 'red',
    borderBottomWidth: 2,
    padding: 10
  },
  active: {
    borderBottomColor: 'green',
  }
});