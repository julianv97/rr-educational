import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Login from '../screens/Auth/Login';

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
