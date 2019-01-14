import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import Routes from './Routes';

export default class App extends Component {
  state = { hasToken: null };

  componentWillMount() {
    AsyncStorage.getItem('id_token').then((token) => {
      this.setState({ hasToken: token !== null });
    });
  }

  render() {
    return (
      <Routes hasToken={ this.state.hasToken }/>
    );
  }
}
