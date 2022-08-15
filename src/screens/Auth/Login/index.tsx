import React, { useEffect } from 'react';
import { View } from 'react-native';
import ButtonSocialAuth from '../../../components/ButtonSocialAuth';
import { useAuthStore } from '../../../stores';
import useGoogleAuth from '../../../hooks/useGoogleAuth';
import styles from './styles';

const Login = () => {
  const { response, promptAsync } = useGoogleAuth();
  const { login } = useAuthStore();

  useEffect(() => {
    login(response);
  }, [response]);

  return (
    <View style={styles.container}>
      <ButtonSocialAuth name="google" title="Login with Google" onPress={() => promptAsync()} />
    </View>
  );
};

export default Login;
