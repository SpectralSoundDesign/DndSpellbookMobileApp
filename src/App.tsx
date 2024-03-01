/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import * as React from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Home from './screens/home/Home.tsx';
import Search from './screens/search/Search.tsx';


const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      activeColor="#ffffff"
      inactiveColor='#0f6374'
      barStyle={{ backgroundColor: '#2c2c2c' }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, focused }) => (
            focused ? <Image source={require('../assets/home-selected.png')} style={{ width: 20, height: 20 }} /> :
              <Image source={require('../assets/home-unselected.png')} style={{ width: 20, height: 20 }} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({ color, focused }) => (
            focused ? <Image source={require('../assets/search-selected.png')} style={{ width: 20, height: 20 }} /> :
              <Image source={require('../assets/search-unselected.png')} style={{ width: 20, height: 20 }} />
          ),
        }}
      />
      {/*<Tab.Screen
        name="Saved"
        component={Saved}
        options={{
          tabBarLabel: 'Saved',
          tabBarIcon: ({ color, focused }) => (
            focused ? <Image source={require('../assets/bookmark-selected.png')} style={{ width: 20, height: 20 }} /> :
              <Image source={require('../assets/bookmark-unselected.png')} style={{ width: 20, height: 20 }} />
          ),
        }}
      />*/}
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <MyTabs />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

