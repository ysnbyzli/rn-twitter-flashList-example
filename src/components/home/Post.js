import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';

const Post = ({item: {name, image, username, description, postImage}}) => {
  return (
    <View style={styles.container}>
      <Image
        source={{uri: image}}
        resizeMode="contain"
        style={styles.profileImage}
      />
      <View style={styles.content}>
        <View style={styles.contentHeader}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.username}>@{username}</Text>
        </View>
        <Text style={styles.description}>{description}</Text>
        {postImage && (
          <Image
            style={styles.postImage}
            source={{uri: postImage}}
            resizeMode="stretch"
          />
        )}
      </View>
    </View>
  );
};

export default Post;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 9,
    flexDirection: 'row',
  },
  profileImage: {height: 55, width: 55, borderRadius: 55, marginRight: 8},
  content: {paddingRight: 75},
  contentHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 2,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  username: {
    fontSize: 16,
    fontWeight: '300',
    marginLeft: 5,
  },
  description: {
    fontWeight: '400',
    fontSize: 16,
    marginBottom: 10,
  },
  postImage: {height: 175, borderRadius: 12},
});
