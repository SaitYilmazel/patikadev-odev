import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Categories from './pages/Categories';
import Meals from './pages/Meals';
import MealsDetail from './pages/MealsDetail';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitleAlign: 'center',
          headerTitleStyle: {color: '#fea500'},
          headerTintColor: '#fea500',
          headerShadowVisible: false,
        }}>
        <Stack.Screen
          name="CategoriesScreen"
          component={Categories}
          options={{
            title: 'Categories',
          }}
        />
        <Stack.Screen
          name="MealsScreen"
          component={Meals}
          options={{
            title: 'Meals',
          }}
        />
        <Stack.Screen
          name="MealsDetailScreen"
          component={MealsDetail}
          options={{
            title: 'Detail',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
