import * as React from 'react';
import * as WebBrowser from 'expo-web-browser';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { useAuthStore } from './stores';
import AuthNavigator from './navigation/AuthNavigator';
import ContentNavigator from './navigation/ContentNavigator';

WebBrowser.maybeCompleteAuthSession();

const App = () => {
  const { isLoggedIn } = useAuthStore();

  console.log(isLoggedIn);

  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        {!isLoggedIn ? <AuthNavigator /> : <ContentNavigator />}
      </NavigationContainer>
    </>
  );
};

export default App;
