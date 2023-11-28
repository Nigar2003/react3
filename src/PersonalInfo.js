import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PersonalInfo = () => {
 return (
    <View style={styles.container}>
      <Text style={styles.text}>Personal Info: Born in New York City</Text>
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

export default PersonalInfo;