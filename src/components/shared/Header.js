import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import {MoreIcon, TwitterIcon} from '../../icons';

const Header = () => {
  return (
    <View style={styles.container}>
      {/* Profile Image*/}
      <Image
        source={{
          uri: 'https://pbs.twimg.com/profile_images/1198194754464432128/HYI2N_vM_400x400.jpg',
        }}
        style={styles.profileImage}
        resizeMode="cover"
      />
      <TwitterIcon />

      <MoreIcon />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    width: '100%',
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    height: 45,
    paddingHorizontal: 20,
    paddingVertical: 5,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  profileImage: {
    height: 32,
    width: 32,
    borderRadius: 32,
  },
});
