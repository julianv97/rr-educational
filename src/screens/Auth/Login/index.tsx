import React, { useEffect } from 'react';
import { View } from 'react-native';
import ButtonSocialAuth from '../../../components/ButtonSocialAuth';
import useBearStore from '../../../stores/auth';
import useGoogleAuth from '../../../hooks/useGoogleAuth';
import styles from './styles';

const Login = () => {
  const { response, promptAsync } = useGoogleAuth();
  const { login } = useBearStore();

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
