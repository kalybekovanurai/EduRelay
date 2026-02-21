export interface User {
  id: number;
  name: string;
  major: string;
  faculty: string;
  skills: string;
  canTeach: string;
  wantsToLearn: string;
  contacts: string;
  email: string;
  avatar: string;
}

export interface AuthResponse {
  accessToken: string;
  user: User;
}

export interface LoginPayload {
  email: string;
  password: string;
}
export interface AuthState {
  isAuth: boolean;
  user: {
    id: number;
    name: string; 
    email: string;
    avatar: string;
  } | null;
  accessToken: string | null;
  loading: boolean;
  error: string | null;
}