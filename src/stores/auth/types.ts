import { AuthSessionResult } from 'expo-auth-session';

interface AuthState {
  isLoggedIn: boolean;
  currentUser: string;
  isLoading: boolean;
  isError: boolean;
  login: (response: AuthSessionResult | null) => void;
  logout: () => void;
}

export default AuthState;
