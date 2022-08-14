import * as React from 'react';
import * as WebBrowser from 'expo-web-browser';
import { GoogleAuthProvider } from 'firebase/auth';
import { Button, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import useGoogleAuth from './src/hooks/useGoogleAuth';
import { auth } from './src/helpers/firebase';

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
    <SafeAreaView>
      <StatusBar style="auto" />
      <Button title="Login" onPress={login} />
      <Button title="Logout" onPress={logOut} />
    </SafeAreaView>
  );
};

export default App;
