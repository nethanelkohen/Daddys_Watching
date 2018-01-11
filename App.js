import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import { Constants } from 'expo';
import { StackNavigator } from 'react-navigation';
import Map from './components/Map.js';
import HomeScreen from './screens/HomeScreen.js';
import MapScreen from './screens/MapScreen.js';
import OnBoarding from './screens/OnBoarding.js';
import { FormLabel, FormInput } from 'react-native-elements';

export default class App extends Component {
  render() {
    return <AppNavigator />;
  }
}

const AppNavigator = StackNavigator({
  OnBoarding: {
    screen: OnBoarding,
    navigationOptions: {
      header: null
    }
  },
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: {
      headerLeft: null
    }
  },
  MapScreen: {
    screen: MapScreen,
    navigationOptions: {
      headerLeft: null
    }
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
