import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import StackNavigator from './StackNavigator';
import { firebaseConfig } from './firebase-config';
import { initializeApp } from 'firebase/app';

initializeApp(firebaseConfig);
export default function App() {
  return (
    <NavigationContainer >
      <StackNavigator />
    </NavigationContainer>
  );
}

