import * as React from 'react';
import * as WebBrowser from 'expo-web-browser';
import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider } from 'native-base';
import Navigator from './navigation';

WebBrowser.maybeCompleteAuthSession();

const App = () => {
  return (
    <NativeBaseProvider>
      <StatusBar style="auto" />
      <Navigator />
    </NativeBaseProvider>
  );
};

export default App;
