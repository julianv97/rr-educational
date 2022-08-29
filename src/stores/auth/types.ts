import { AuthSessionResult } from 'expo-auth-session';

interface AuthState {
  isLoggedIn: boolean;
  currentUser: string;
  isLoading: boolean;
  isError: boolean;
  login: (response: AuthSessionResult | null, navigation: any) => void;
  logout: (navigation: any) => void;
}

export default AuthState;
