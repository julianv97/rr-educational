import { Text, TouchableOpacity, SafeAreaView } from 'react-native';
import React from 'react';
import { useAuthStore } from '../../stores';

interface Props {
  navigation: any;
}

const Home: React.FC<Props> = ({ navigation }) => {
  const { logout } = useAuthStore();

  return (
    <SafeAreaView>
      <TouchableOpacity onPress={() => logout(navigation)}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Home;
