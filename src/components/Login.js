import React, { Component } from 'react';
import { AsyncStorage, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Actions } from 'react-native-router-flux';

class Login extends Component {
  state = { username: null, password: null };

  userSignup() {
    Actions.home();
  }

  userLogin() {
    Actions.home();
  }

  async saveItem(item, selectedValue) {
    try {
      await AsyncStorage.setItem(item, selectedValue);
    } catch (error) {
      console.error('AsyncStorage error: ' + error.message);
    }
  }

  render() {
    return (
      <View style={ styles.container }>
        <Text style={ styles.title }> Welcome </Text>

        <View style={ styles.form }>
          <TextInput
            editable={ true }
            onChangeText={ (username) => this.setState({ username }) }
            placeholder='Username'
            ref='username'
            returnKeyType='next'
            style={ styles.inputText }
            value={ this.state.username }
          />

          <TextInput
            editable={ true }
            onChangeText={ (password) => this.setState({ password }) }
            placeholder='Password'
            ref='password'
            returnKeyType='next'
            secureTextEntry={ true }
            style={ styles.inputText }
            value={ this.state.password }
          />

          <TouchableOpacity style={ styles.buttonWrapper } onPress={ () => this.userLogin() }>
            <Text style={ styles.buttonText }> Log In </Text>
          </TouchableOpacity>

          <TouchableOpacity style={ styles.buttonWrapper } onPress={ () => this.userSignup() }>
            <Text style={ styles.buttonText }> Sign Up </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Login;

const styles = StyleSheet.create({});
