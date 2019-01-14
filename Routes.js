import React from 'react';
import { Router, Scene, Stack } from 'react-native-router-flux';
import Login from './src/components/Login';
import Register from './src/components/Register';
import Home from './src/components/Home';

const Routes = () => (
  <Router>
    <Stack key="root">
      <Scene key="login" component={ Login } title="Login" hideNavBar/>
      <Scene key="register" component={ Register } title="Register" hideNavBar/>
      <Scene key="home" component={ Home } title="Home"/>
    </Stack>
  </Router>
);

export default Routes;
