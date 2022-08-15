import React, { useRef } from 'react';
import { View } from 'react-native';
import LottieView from 'lottie-react-native';
import styles from './styles';

interface Props {
  navigation: any;
}

const Welcome: React.FC<Props> = ({ navigation }) => {
  const animation = useRef(null);

  return (
    <View style={styles.container}>
      <LottieView
        autoPlay
        loop={false}
        ref={animation}
        onAnimationFinish={() =>
          setTimeout(() => {
            navigation.navigate('Login');
          }, 2500)
        }
        style={{
          width: 200,
          height: 200,
        }}
        source={require('../../../../assets/80391-pink-rocket-launch.json')}
      />
    </View>
  );
};

export default Welcome;
