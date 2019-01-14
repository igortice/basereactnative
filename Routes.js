import React from 'react';
import { Router, Scene, Stack } from 'react-native-router-flux';
import Login from './src/components/Login';
import Register from './src/components/Register';
import Home from './src/components/Home';

const Routes = (props) => (
  <Router>
    <Stack key="root">
      <Scene key="login" component={ Login } title="Login" hideNavBar initial={ !props.hasToken }/>
      <Scene key="home" component={ Home } title="Home" initial={ props.hasToken }/>
      <Scene key="register" component={ Register } title="Register" hideNavBar />
    </Stack>
  </Router>
);

export default Routes;
