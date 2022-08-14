import React from 'react';
import { View } from 'react-native';
import ButtonSocialAuth from '../../../components/ButtonSocialAuth';
import styles from './styles';

const Login = () => {
  const handleGoogleAuth = () => {
    console.log('handleGoogleAuth');
  };

  return (
    <View style={styles.container}>
      <ButtonSocialAuth name="google" title="Sign in with Google" onPress={handleGoogleAuth} />
    </View>
  );
};

export default Login;
