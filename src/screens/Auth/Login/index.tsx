import React, { useEffect } from 'react';
import { View, Text, ImageBackground } from 'react-native';
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
      <Text style={styles.title}>
        <Text style={styles.radium}>Radium</Text>
        <Text style={styles.rocket}>Rocket </Text>
        Educational
      </Text>

      <ImageBackground
        source={require('../../../../assets/rocket.jpeg')}
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          top: 0,
          right: 0,
        }}
      />
      <ButtonSocialAuth name="google" title="Login with Google" onPress={() => promptAsync()} />
    </View>
  );
};

export default Login;
