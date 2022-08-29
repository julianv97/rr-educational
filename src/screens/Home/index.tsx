import { Text, TouchableOpacity, SafeAreaView } from 'react-native';
import React from 'react';
import { useAuthStore } from '../../stores';

const Home = () => {
  const { logout } = useAuthStore();

  return (
    <SafeAreaView>
      <TouchableOpacity onPress={logout}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Home;
