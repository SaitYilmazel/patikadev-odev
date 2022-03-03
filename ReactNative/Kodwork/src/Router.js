import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from './pages/Home';
import Detail from './pages/Detail';
import Favorite from './pages/Favorite';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Root() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerTitleStyle: {color: '#e65653', marginLeft: 20},
        headerTintColor: '#e65653',
      }}>
      <Stack.Screen
        name="HomePage"
        component={Home}
        options={{
          title: 'Jobs',
        }}
      />
      <Stack.Screen name="DetailPage" component={Detail} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#fff" color="#000" barStyle="dark-content" />
      <Tab.Navigator
        screenOptions={{
          headerTitleAlign: 'center',
          headerTitleStyle: {color: '#ee534f', marginLeft: 20},
          headerTintColor: '#ee534f',
          tabBarLabelPosition: 'beside-icon',
          tabBarLabelStyle: {
            fontWeight: 'bold',
            fontSize: 15,
          },
          tabBarActiveTintColor: '#ee534f',
          tabBarIconStyle: {display: 'none'},
        }}>
        <Tab.Screen
          name="Jobs"
          component={Root}
          options={{headerShown: false, tabBarLabel: 'Jobs'}}
        />
        <Tab.Screen
          name="Favorite"
          component={Favorite}
          options={{tabBarLabel: 'Favorite'}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
