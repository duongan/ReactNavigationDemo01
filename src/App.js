import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Home from './screens/Home';
import Details from './screens/Details';
import Modal from './components/Modal';

const MainStack = createStackNavigator(
    {
        Home: Home,
        Details: Details
    },
    {
        inititalRouteName: 'Home',
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#f4511e'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            }
        }
    }
);

const RootStack = createStackNavigator(
    {
        Main: MainStack,
        MyModal: Modal
    },
    {
        mode: 'modal',
        headerMode: 'none'
    }
);

export default class App extends Component {
  render() {
    return <RootStack />;
  }
}
