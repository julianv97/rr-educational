import * as React from 'react';
import * as WebBrowser from 'expo-web-browser';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './navigation/AuthNavigator';

WebBrowser.maybeCompleteAuthSession();

const App = () => {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <AuthNavigator />
      </NavigationContainer>
    </>
  );
};

export default App;
