import * as Google from 'expo-auth-session/providers/google';
import { CLIENT_ID } from '@env';

const useGoogleAuth = () => {
  const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    clientId: CLIENT_ID,
  });

  return { request, response, promptAsync };
};

export default useGoogleAuth;
