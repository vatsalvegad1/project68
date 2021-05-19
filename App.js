import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import fb from './screens/fb';
import instrgram from './screens/in';

export default class App extends React.Component {
  render() {
    return(
      <AppContainer></AppContainer>
    )
  }
}
const TabNavigator = createBottomTabNavigator({
  facebook: {screen:fb},
  instrgram: {screen:instrgram}
});
const AppContainer=createAppContainer(TabNavigator);