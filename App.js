import React, { Component } from 'react';
import { AsyncStorage, View } from 'react-native';
import Routes from './Routes';

export default class App extends Component {
  state = { hasToken: null };

  componentDidMount(): void {
    AsyncStorage.getItem('id_token').then((token) => {
      this.setState({ hasToken: token !== null });
    });
  }

  render() {
    return (
      this.state.hasToken !== null ?
        <Routes hasToken={ this.state.hasToken }/> :
        <View></View>
    );
  }

}
