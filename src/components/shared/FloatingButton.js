import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {WriteIcon} from '../../icons';

const FloatingButton = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <WriteIcon />
    </TouchableOpacity>
  );
};

export default FloatingButton;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    right: 10,
    bottom: 10,
    height: 56,
    width: 56,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4C9EEB',
    borderRadius: 56,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
