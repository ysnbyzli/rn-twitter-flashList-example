import {View, StyleSheet, Animated, SafeAreaView} from 'react-native';
import React from 'react';
import Header from '../components/shared/Header';
import {FlashList} from '@shopify/flash-list';
import {posts} from '../dummyData/posts';
import Post from '../components/home/Post';

const Home = () => {
  const scrollY = new Animated.Value(0);
  const diffClamp = Animated.diffClamp(scrollY, 0, 45);

  const translateY = diffClamp.interpolate({
    inputRange: [0, 45],
    outputRange: [0, -85],
    extrapolate: 'clamp',
  });
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <Animated.View
        style={{
          zIndex: 100,
          transform: [{translateY}],
        }}>
        <Header />
      </Animated.View>

      {/* Posts*/}
      <FlashList
        data={posts}
        estimatedItemSize={50}
        keyExtractor={(item, index) => item.id}
        renderItem={({item}) => <Post item={item} />}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => (
          <View style={{height: 1, backgroundColor: '#CED5DC'}} />
        )}
        onScroll={({nativeEvent}) => {
          scrollY.setValue(nativeEvent.contentOffset.y);
        }}
      />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {flex: 1, position: 'relative', backgroundColor: '#FFFFFF'},
});
