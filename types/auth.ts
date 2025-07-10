export interface User {
  id: string;
  email: string;
  name: string;
}

export interface AuthFormData {
  email: string;
  password: string;
}

export interface SignInResult {
  error?: string;
  status?: number;
  ok?: boolean;
  url?: string;
}
