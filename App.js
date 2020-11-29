import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import State from "./components/state"

import NavigateScreen from './Navigation/Home'


export default function App() {
  return (
    <View style={styles.container}>
   <NavigateScreen />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding:5,
    backgroundColor:"#fdf5e6",
    flex:1
   
  },
});
