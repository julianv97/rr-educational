import create from 'zustand';
import { GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../../helpers/firebase';
import AuthState from './types';

const useAuthState = create<AuthState>((set) => ({
  isLoggedIn: false,
  currentUser: '',
  isLoading: false,
  isError: false,

  login: async (response) => {
    try {
      if (response?.type !== 'success') return;
      set({ isLoading: true });
      const { id_token: idToken } = response.params;
      const credential = GoogleAuthProvider.credential(idToken);
      const { user } = await auth.signInWithCredential(credential);
      set({
        isLoggedIn: true,
        currentUser: user?.email!,
        isLoading: false,
      });
    } catch (error) {
      set({ isError: true });
    }
  },

  logout: async () => {
    try {
      set({ isLoading: true });
      await auth.signOut();
      set({
        isLoggedIn: false,
        currentUser: '',
        isLoading: false,
      });
    } catch (error) {
      set({ isError: true });
    }
  },
}));

export default useAuthState;
