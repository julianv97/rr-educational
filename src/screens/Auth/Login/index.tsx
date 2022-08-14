import React from 'react';
import { Button, View } from 'react-native';
import ButtonSocialAuth from '../../../components/ButtonSocialAuth';
import styles from './styles';

import useBearStore from '../../../stores/auth';
import useGoogleAuth from '../../../hooks/useGoogleAuth';

const Login = () => {
  const { response, promptAsync } = useGoogleAuth();
  const { login, logout, isLoggedIn, currentUser } = useBearStore();

  const handleGoogleAuth = () => {
    login(response, promptAsync);
  };

  console.log('isLoggedIn', isLoggedIn);
  console.log('currentUser', currentUser);

  return (
    <View style={styles.container}>
      <ButtonSocialAuth name="google" title="Login with Google" onPress={handleGoogleAuth} />
      <Button title="Login with Facebook" onPress={logout} />
    </View>
  );
};

export default Login;
