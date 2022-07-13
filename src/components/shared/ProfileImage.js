import {StyleSheet, Image} from 'react-native';
import React from 'react';

const ProfileImage = () => {
  return (
    <Image
      source={{
        uri: 'https://pbs.twimg.com/profile_images/1198194754464432128/HYI2N_vM_400x400.jpg',
      }}
      style={styles.profileImage}
      resizeMode="cover"
    />
  );
};

export default ProfileImage;

const styles = StyleSheet.create({
  profileImage: {
    height: 32,
    width: 32,
    borderRadius: 32,
  },
});
