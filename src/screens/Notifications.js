import {StyleSheet, SafeAreaView, Text} from 'react-native';
import React, {useState} from 'react';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import All from '../components/notifications/tabs/All';
import Mentions from '../components/notifications/tabs/Mentions';
import Header from '../components/notifications/Header';
import {SIZES} from '../constants';

const renderScene = SceneMap({
  first: All,
  second: Mentions,
});

const Notifications = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'first', title: 'All'},
    {key: 'second', title: 'Mentions'},
  ]);
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{width: SIZES.width}}
        renderTabBar={props => (
          <TabBar
            {...props}
            indicatorStyle={{backgroundColor: '#4C9EEB'}}
            style={{backgroundColor: '#FFFFFF'}}
            renderLabel={({route, focused}) => (
              <Text
                style={{
                  color: focused ? '#4C9EEB' : '#687684',
                  fontWeight: '700',
                }}>
                {route.title}
              </Text>
            )}
          />
        )}
      />
    </SafeAreaView>
  );
};

export default Notifications;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
});
