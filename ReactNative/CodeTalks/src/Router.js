import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import FlashMessage from 'react-native-flash-message';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {Home, Messages, Welcome, Login, Register, ResetPassword} from './pages';
import useAuth from './hooks/useAuth';

const Stack = createStackNavigator();

export default () => {
  const {userSession, UserSignOut} = useAuth();

  return (
    <NavigationContainer>
      <StatusBar
        backgroundColor={'transparent'}
        translucent={true}
        barStyle="dark-content"
      />

      {!userSession ? (
        /*Auth screens*/
        <Stack.Navigator>
          <Stack.Group
            screenOptions={{
              headerTransparent: true,
              headerTitle: '',
              headerTintColor: '#700BEF',
            }}>
            <Stack.Screen
              options={{headerShown: false}}
              name="WelcomePage"
              component={Welcome}
            />
            <Stack.Screen name="LoginPage" component={Login} />
            <Stack.Screen name="RegisterPage" component={Register} />
            <Stack.Screen name="ResetPasswordPage" component={ResetPassword} />
          </Stack.Group>
        </Stack.Navigator>
      ) : (
        /*Screens for logged in users*/
        <Stack.Navigator>
          <Stack.Group
            screenOptions={{
              headerTransparent: true,
              headerTintColor: '#700BEF',
              headerTitleAlign: 'center',
              fontSize: 30,
              fontWeight: 'bold',
              headerRight: () => (
                <Icon
                  style={{marginRight: 10}}
                  name="logout"
                  size={25}
                  color="#700BEF"
                  onPress={() => UserSignOut()}
                />
              ),
            }}>
            <Stack.Screen
              options={{
                headerTitle: 'Rooms',
                headerLeft: null,
              }}
              name="HomePage"
              component={Home}
            />
            <Stack.Screen name="MessagePage" component={Messages} />
          </Stack.Group>
        </Stack.Navigator>
      )}

      <FlashMessage position="top" />
    </NavigationContainer>
  );
};
