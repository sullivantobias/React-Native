import React, {Component} from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import InputTest from "../inputActive/inputActive";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  send = () => {
    alert(`You signed up with Email: ${this.state.email} and Password: ${this.state.password}`)
  };

  handleChangeInput = (e) => {
    this.setState({[e.target.name]: e.target.value});
  };

  render() {
    return (
        <View style={{alignItems: 'center'}}>
          <InputTest onChange={this.handleChangeInput}/>
          <TouchableOpacity onPress={this.send}
                            style={{marginTop: 50, padding: 10, backgroundColor: 'green'}}>
            <Text style={{color: 'white'}}>Submit</Text>
          </TouchableOpacity>
        </View>
    );
  }
}