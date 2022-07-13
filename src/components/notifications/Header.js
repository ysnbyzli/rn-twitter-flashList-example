import {View, StyleSheet, Text} from 'react-native';
import React from 'react';
import ProfileImage from '../shared/ProfileImage';
import {SettingsIcon} from '../../icons';
const Header = () => {
  return (
    <View style={styles.container}>
      <ProfileImage />
      <Text style={styles.text}>Notifications</Text>
      <SettingsIcon />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 17,
    fontWeight: '700',
  },
});
