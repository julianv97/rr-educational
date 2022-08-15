import React, { useEffect } from 'react';
import { View } from 'react-native';
import ButtonSocialAuth from '../../../components/ButtonSocialAuth';
import { useAuthStore } from '../../../stores';
import useGoogleAuth from '../../../hooks/useGoogleAuth';
import styles from './styles';

interface Props {
  navigation: any;
}

const Login: React.FC<Props> = ({ navigation }) => {
  const { response, promptAsync } = useGoogleAuth();
  const { login } = useAuthStore();

  useEffect(() => {
    login(response, navigation);
  }, [response]);

  return (
    <View style={styles.container}>
      <ButtonSocialAuth name="google" title="Login with Google" onPress={() => promptAsync()} />
    </View>
  );
};

export default Login;
