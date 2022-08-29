import * as React from 'react';
import * as WebBrowser from 'expo-web-browser';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthNavigator from './navigation/AuthNavigator';
import ContentNavigator from './navigation/ContentNavigator';

const Stack = createNativeStackNavigator();

WebBrowser.maybeCompleteAuthSession();

const App = () => {
  return (
    <>
      <StatusBar style="auto" />
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
    </>
  );
};

export default App;
