import create from 'zustand';
import { GoogleAuthProvider } from 'firebase/auth';
import { AuthRequestPromptOptions, AuthSessionResult } from 'expo-auth-session';
import { auth } from '../helpers/firebase';

interface AuthState {
  isLoggedIn: boolean;
  currentUser: string;
  login: (
    response: AuthSessionResult | null,
    promptAsync: (options?: AuthRequestPromptOptions | undefined) => Promise<AuthSessionResult>,
  ) => void;
  logout: any;
}

const useAuthState = create<AuthState>((set) => ({
  isLoggedIn: false,
  currentUser: '',

  login: async (response, promptAsync) => {
    await promptAsync();
    if (response?.type !== 'success') return;
    const { id_token: idToken } = response.params;
    const credential = GoogleAuthProvider.credential(idToken);
    const { user } = await auth.signInWithCredential(credential);
    set({
      isLoggedIn: true,
      currentUser: user?.displayName!,
    });
  },

  logout: async () => {
    await auth.signOut();
    set({
      isLoggedIn: false,
      currentUser: '',
    });
  },
}));

export default useAuthState;

/* const logOut = () => {
    auth.signOut();
  }; */
