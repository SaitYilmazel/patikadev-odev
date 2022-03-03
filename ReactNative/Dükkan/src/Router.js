import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Login from './pages/Login';
import Products from './pages/Products';
import Detail from './pages/Detail';
import {useSelector, useDispatch} from 'react-redux';
import Loading from './components/Loading';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Stack = createStackNavigator();

export default function Router() {
  const userSession = useSelector(state => state.user);
  const isAuthLoading = useSelector(state => state.isAuthLoading);
  const dispatch = useDispatch();

  return (
    <NavigationContainer>
      {isAuthLoading ? (
        <Loading />
      ) : !userSession ? (
        <Stack.Navigator>
          <Stack.Screen
            name="LoginScreen"
            component={Login}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator
          screenOptions={{
            headerTitleAlign: 'center',
            headerTitleStyle: {color: '#fff'},
            headerTintColor: '#fff',
            headerStyle: {backgroundColor: '#64b5f6'},
          }}>
          <Stack.Screen
            name="ProductsScreen"
            component={Products}
            options={{
              title: 'Mağaza',
              headerRight: () => {
                return (
                  <Icon
                    name="logout"
                    size={30}
                    color="#fff"
                    onPress={() => dispatch({type: 'REMOVE_USER'})}
                  />
                );
              },
            }}
          />
          <Stack.Screen
            name="DetailScreen"
            component={Detail}
            options={{
              title: 'Detay',
            }}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}
