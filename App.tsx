import * as React from 'react';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import { GoogleAuthProvider } from 'firebase/auth';
import { Button, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { auth } from './src/helpers/firebase';

WebBrowser.maybeCompleteAuthSession();

const App = () => {
  const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    clientId: '202212711847-s8r8823gv362asmv89bif009l3ve9hjf.apps.googleusercontent.com',
  });

  React.useEffect(() => {
    if (response?.type === 'success') {
      const { id_token: idToken } = response.params;
      const credential = GoogleAuthProvider.credential(idToken);
      auth.signInWithCredential(credential);
    }
  }, [response]);

  const logOut = () => {
    auth.signOut();
  };

  return (
    <SafeAreaView>
      <StatusBar style="auto" />
      <Button
        disabled={!request}
        title="Login"
        onPress={() => {
          promptAsync();
        }}
      />
      <Button title="Logout" onPress={logOut} />
    </SafeAreaView>
  );
};

export default App;
