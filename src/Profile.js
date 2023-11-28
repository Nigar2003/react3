import React from 'react';
import { View, StyleSheet } from 'react-native';
import Email from './Email';
import Name from './Name';
import Address from './Address';
import PersonalInfo from './PersonalInfo';

const Profile = () => {
 return (
    <View style={styles.container}>
      <Name />
      <Email />
      <Address />
      <PersonalInfo />
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
});

export default Profile;