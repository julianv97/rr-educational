import * as React from 'react';
import * as WebBrowser from 'expo-web-browser';
import { GoogleAuthProvider } from 'firebase/auth';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import useGoogleAuth from './hooks/useGoogleAuth';
import { auth } from './helpers/firebase';
import AuthNavigator from './navigation/AuthNavigator';

WebBrowser.maybeCompleteAuthSession();

const App = () => {
  const { response, promptAsync } = useGoogleAuth();

  const login = async () => {
    await promptAsync({ useProxy: true });
    if (response?.type !== 'success') return;
    const { id_token: idToken } = response.params;
    const credential = GoogleAuthProvider.credential(idToken);
    auth.signInWithCredential(credential);
  };

  const logOut = () => {
    auth.signOut();
  };

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
