import React, {useState} from 'react';
import {  Button, ScrollView ,Image, Keyboard, KeyboardAvoidingView, Platform, StyleSheet , Text, TextInput, TouchableOpacity, View } from 'react-native';
import Notes from './components/Notes'
import { Calculator } from 'react-native-calculator'
import Loctn from './components/loctn.js'
// import GetLocation from 'react-native-get-location'
import Home from './screens/home';
import Navigator from './routes/homeStack';
import { NavigationContainer } from '@react-navigation/native';
import MyStack from './routes/homeStack';

const App = () => {
  return (
    <MyStack />
  );
};

export default App;