import {View, Image, StyleSheet, Text} from 'react-native';
import React from 'react';
import {Star} from '../../icons';

const AllItem = ({item: {image, title, description}}) => {
  return (
    <View style={styles.container}>
      <Star />
      <View style={styles.content}>
        <Image
          source={{uri: image}}
          style={styles.profileImage}
          resizeMode="cover"
        />
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
};

export default AllItem;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 50,
    paddingVertical: 11,
    flexDirection: 'row',
  },
  content: {marginLeft: 8},
  profileImage: {
    height: 37,
    width: 37,
    borderRadius: 37,
    marginBottom: 8,
  },
  title: {
    fontSize: 16,
    marginBottom: 3,
    color: '#687684',
  },
  description: {fontSize: 16, color: '#687684'},
});
