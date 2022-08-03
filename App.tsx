import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Categories } from './src/comonets/Categories';
import { Header } from './src/comonets/Header';
import { Popular } from './src/comonets/Popular';

export default function App() {
  return (
    
    <View style={styles.container}>
      <Header/>
      <Categories/>
      <Popular/>
      <StatusBar style="auto" />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    padding: 24,
  },
});
