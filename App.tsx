import * as React from 'react';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import { GoogleAuthProvider } from 'firebase/auth';
import { Button, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { CLIENT_ID } from 'env';
import { auth } from './src/helpers/firebase';

WebBrowser.maybeCompleteAuthSession();

const App = () => {
  const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    clientId: CLIENT_ID,
  });

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
      <Button disabled={!request} title="Login" onPress={login} />
      <Button title="Logout" onPress={logOut} />
    </SafeAreaView>
  );
};

export default App;
