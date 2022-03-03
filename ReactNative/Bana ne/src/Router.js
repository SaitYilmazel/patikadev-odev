import React, {useEffect, useState} from 'react';
import FlashMessage from 'react-native-flash-message';
import auth from '@react-native-firebase/auth';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import colors from './styles/colors';
import Login from './pages/auth/Login';
import Sign from './pages/auth/Sign';
import Messages from './pages/Messages';

const Stack = createStackNavigator();

export default function App() {
  const [userSession, setUserSession] = useState();

  useEffect(() => {
    auth().onAuthStateChanged(user => setUserSession(!!user));
  }, []);

  const AuthStack = () => {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="LoginPage" component={Login} />
        <Stack.Screen name="SignPage" component={Sign} />
      </Stack.Navigator>
    );
  };

  return (
    <NavigationContainer>
      {!userSession ? (
        <AuthStack />
      ) : (
        <Stack.Navigator>
          <Stack.Screen
            options={{
              headerTitle: 'Dertler',
              headerTitleAlign: 'center',
              headerTitleStyle: {color: colors.lightBlue},
              headerLeft: null,
              headerRight: () => (
                <Icon
                  style={{marginRight: 5}}
                  name="logout"
                  size={25}
                  color={colors.lightBlue}
                  onPress={() => auth().signOut()}
                />
              ),
            }}
            name="MessagesPage"
            component={Messages}
          />
        </Stack.Navigator>
      )}
      <FlashMessage position="top" />
    </NavigationContainer>
  );
}
