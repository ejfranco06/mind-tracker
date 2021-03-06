import React, { createContext, FC, useState } from 'react';

// Test url for now
// TODO: replace to hosted UR
const API_URL = 'https://mind-tracker-api-v2.herokuapp.com/'
// const API_URL = 'http://localhost:8000/';

interface AuthData {
  token: string;
  isLoggedIn(): boolean;
  login(username: string, password: string): void;
  logout(): void;
  register(username: string, password: string): void;
  authError: Error | null;
}

const AuthContext = createContext<AuthData>({} as AuthData);

export const useAuth = (): AuthData => React.useContext<AuthData>(AuthContext);

export const AuthProvider: FC = ({ children }) => {
  const [token, setToken] = useState('');
  const [authError, setAuthError] = useState(null);

  const login = async (username: string, password: string) => {
    clearAuthError();
    const url = `${API_URL}user/login`;
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
      const json = await response.json();
      if (response.status !== 200) throw new Error(`Unable to login: ${json.message}`);
      
      setToken(json.token);
    } catch (err) {
      setAuthError(err);
    }
  };

  const register = async (username: string, password: string) => {
    clearAuthError();
    const url = `${API_URL}user/register`;
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
      const json = await response.json();
      if (response.status !== 201) throw new Error(`Unable to register: ${json.message}`);
      setToken(json.token);
    } catch (err) {
      setAuthError(err);
    }
  };

  const isLoggedIn = (): boolean=>{
    return token.trim().length > 0;
  }

  const clearAuthError = () => {
    if (authError) setAuthError(null);
  };

  const logout = async () => {
    setToken('');
  };
  return (
    <AuthContext.Provider value={{ token, authError, login, logout, register, isLoggedIn: isLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};
