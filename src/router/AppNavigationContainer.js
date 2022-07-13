import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  HomeFilled,
  HomeOutlined,
  MessageFilled,
  MessageOutlined,
  NotificationFilled,
  NotificationOutlined,
  SearchFilled,
  SearchOutlined,
} from '../icons';

import Home from '../screens/Home';
import Search from '../screens/Search';
import Notifications from '../screens/Notifications';
import Messages from '../screens/Messages';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="home" component={Home} />
    </Stack.Navigator>
  );
};

const AppNavigationContainer = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="homeStack"
        component={HomeStack}
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({focused}) =>
            focused ? <HomeFilled /> : <HomeOutlined />,
        }}
      />
      <Tab.Screen
        name="search"
        component={Search}
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({focused}) =>
            focused ? <SearchFilled /> : <SearchOutlined />,
        }}
      />
      <Tab.Screen
        name="notifications"
        component={Notifications}
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({focused}) =>
            focused ? <NotificationFilled /> : <NotificationOutlined />,
        }}
      />
      <Tab.Screen
        name="messages"
        component={Messages}
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({focused}) =>
            focused ? <MessageFilled /> : <MessageOutlined />,
        }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigationContainer;
