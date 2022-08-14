import React from 'react';
import { View } from 'react-native';
import ButtonSocialAuth from '../../../components/ButtonSocialAuth';
import styles from './styles';

import useBearStore from '../../../stores/auth';
import useGoogleAuth from '../../../hooks/useGoogleAuth';

const Login = () => {
  const { response, promptAsync } = useGoogleAuth();
  const { login } = useBearStore();

  const handleGoogleAuth = () => {
    login(response, promptAsync);
  };

  return (
    <View style={styles.container}>
      <ButtonSocialAuth name="google" title="Login with Google" onPress={handleGoogleAuth} />
    </View>
  );
};

export default Login;
