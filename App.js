import React from 'react';
import { StyleSheet,View  } from 'react-native';

import HomeScreen from './screens/HomeScreen';
export default function App() {
  return (
      <HomeScreen />
    );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
