import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Colors } from '../../constants/theme';
import TButtonName from './types';

interface Props {
  name: TButtonName;
  title: string;
  onPress: () => void;
}

const ButtonSocialAuth: React.FC<Props> = ({ name, title, onPress }) => {
  return (
    <FontAwesome.Button name={name} backgroundColor={Colors.GreenPrimary} onPress={onPress}>
      {title}
    </FontAwesome.Button>
  );
};

export default ButtonSocialAuth;
