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
    this.setState(({
      [e.target.name]: !this.state[e.target.name]
    }));
  };

  render() {
    return (
        <View>
          <TextInput
              style={[styles.inputsForm, this.state.email ? styles.active : '']}
              onFocus={this.toggleClass}
              onBlur={this.toggleClass}
              name={'email'}
              placeholder="Email"
              onChange={this.props.onChange}
          />
          <TextInput
              secureTextEntry={true}
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
    borderBottomColor: 'black',
    borderBottomWidth: 2,
    padding: 10,
  },
  active: {
    borderLeftColor: 'black',
    borderLeftWidth: 2,
  }
});