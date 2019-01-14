import React, { Component } from 'react';
import { Alert, AsyncStorage, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Actions } from 'react-native-router-flux';

class Home extends Component {
  getProtectedQuote() {
    Alert.alert('We will print a Chuck Norris quote');
  }

  async userLogout() {
    try {
      await AsyncStorage.removeItem('id_token');
      Alert.alert('Logout Success!');
      Actions.login();
    } catch (error) {
      console.log('AsyncStorage error: ' + error.message);
    }
  }


  render() {
    return (
      <View style={ styles.container }>
        <TouchableOpacity style={ styles.buttonWrapper } onPress={ this.getProtectedQuote }>
          <Text style={ styles.buttonText }> Get Chuck Norris quote! </Text>
        </TouchableOpacity>

        <TouchableOpacity style={ styles.buttonWrapper } onPress={ this.userLogout }>
          <Text style={ styles.buttonText }> Log out </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Home;

const styles = StyleSheet.create({});
