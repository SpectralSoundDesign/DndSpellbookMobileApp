import * as React from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Home from './screens/home/Home.tsx';
import Search from './screens/search/Search.tsx';
import Details from './screens/details/Details.tsx';
import Welcome from './screens/welcome/Welcome.tsx';
import CharacterSelect from './screens/characterSelect/CharacterSelect.tsx';

const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

function DetailsStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#161616',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen name="Search" component={Search} options={{ headerShown: false }} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
}

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
        name="DetailsStack"
        component={DetailsStack}
        options={{
          tabBarLabel: 'Spell Lookup',
          tabBarIcon: ({ color, focused }) => (
            focused ? <Image source={require('../assets/search-selected.png')} style={{ width: 20, height: 20 }} /> :
              <Image source={require('../assets/search-unselected.png')} style={{ width: 20, height: 20 }} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Welcome" component={Welcome} />
            <Stack.Screen name="CharacterSelect" component={CharacterSelect} />
            <Stack.Screen name="MyTabs" component={MyTabs} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
