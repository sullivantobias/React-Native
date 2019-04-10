import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';
import PropTypes from "prop-types";

/**
 * @class Greeting
 */
export class Greeting extends Component {
  /**
   * @constructor
   * @param props
   */
  constructor(props) {
    super(props);

    this.state = {
      replaceText: this.props.name,
      titleButton: "Replace"
    }
  }

  /**
   * @method replaceTextActive
   */
  replaceTextActive = () => {
    if (this.state.titleButton === 'Replace') {
      this.setState({replaceText: 'Replaced', titleButton: 'Revert'})
    } else {
      this.setState({replaceText: this.props.name, titleButton: 'Replace'})
    }
  };

  /**
   * @method render
   * @returns {*}
   */
  render() {
    return (
        <View style={styles.container}>
          <Text>{this.state.replaceText}</Text>
          <TouchableOpacity
              style={styles.activeButton}
              onPress={this.replaceTextActive}>
            <Text style={styles.text}>{this.state.titleButton}</Text>
          </TouchableOpacity>
        </View>
    );
  }
}

/** PropTypes **/
Greeting.propTypes = {
  name: PropTypes.string.isRequired
};

/**
 * #Styles
 * @type {*|{}}
 */
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 50
  },
  activeButton: {
    marginRight: 40,
    marginLeft: 40,
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#1E6738',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff'
  },
  text: {
    color: '#fff',
    textAlign: 'center',
    paddingLeft: 10,
    paddingRight: 10
  }
});