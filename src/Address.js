import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Address = () => {
 return (
    <View style={styles.container}>
      <Text style={styles.text}>Address: 123 Main Street, New York, NY 10001</Text>
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
 text: {
    fontSize: 20,
 },
});

export default Address;