import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Profile from './Profile';

const App = () => {
 return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile Information</Text>
      <Profile />
    </View>
 );
};

const styles = StyleSheet.create({
 container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
 },
 title: {
    fontSize: 24,
    marginBottom: 20,
 },
});

export default App;