import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {CommentIcon, HeartIcon, ReTweetIcon, SharedIcon} from '../../icons';

const Actions = ({like, reTweet, comment}) => {
  return (
    <View style={styles.container}>
      <View style={styles.actionContainer}>
        <CommentIcon />
        <Text style={styles.count}>{comment}</Text>
      </View>
      <View style={styles.actionContainer}>
        <ReTweetIcon />
        <Text style={styles.count}>{reTweet}</Text>
      </View>
      <View style={styles.actionContainer}>
        <HeartIcon />
        <Text style={styles.count}>{like}</Text>
      </View>
      <SharedIcon />
    </View>
  );
};

export default Actions;

const styles = StyleSheet.create({
  container: {
    marginTop: 11,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  actionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  count: {
    marginLeft: 3.5,
  },
});
