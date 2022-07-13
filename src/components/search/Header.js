import {View, TextInput, StyleSheet, Image} from 'react-native';
import React from 'react';
import {SettingsIcon} from '../../icons';
import ProfileImage from '../shared/ProfileImage';

const Header = () => {
  return (
    <View style={styles.container}>
      <ProfileImage />
      <View style={styles.searchContainer}>
        <TextInput style={styles.search} placeholder="Search Twitter" />
      </View>
      <SettingsIcon />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    height: 45,
    borderBottomWidth: 1,
    borderBottomColor: '#CED5DC',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 6,
  },
  searchContainer: {
    flex: 1,
    backgroundColor: '#E7ECF0',
    borderRadius: 16,
    height: '100%',
    marginHorizontal: 17,
    paddingHorizontal: 10,
  },
  search: {
    height: '100%',
  },
});
