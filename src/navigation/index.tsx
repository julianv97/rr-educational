import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthNavigator from './AuthNavigator';
import ContentNavigator from './ContentNavigator';

const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="AuthNavigator" component={AuthNavigator} />
        <Stack.Screen name="ContentNavigator" component={ContentNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
