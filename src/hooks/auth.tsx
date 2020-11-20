import React, { createContext, useContext, useEffect, useState } from 'react';
import { spotifyAccounts, api } from '../services/api';

interface AuthContextData {
  loginSpotifood(): void;
  logoutSpotifood(): void;
  user: User;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

interface User {
  display_name: string;
}

interface IAuthState {
  token: object;
  user: User;
}

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<IAuthState>(() => {
    const token = localStorage.getItem('@spotifood:token');
    const user = localStorage.getItem('@spotifood:user');

    if (token && user) {
      return {
        token: JSON.parse(token),
        user: JSON.parse(user),
      };
    }

    return {} as IAuthState;
  });

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const code = params.get('code');
    const error = params.get('error');

    const requestToken = async (codeToken: string) => {
      const paramsToken = new URLSearchParams();
      paramsToken.append('grant_type', 'authorization_code');
      paramsToken.append('redirect_uri', 'http://localhost:3000/dashboard');
      paramsToken.append('code', codeToken);

      const token = await spotifyAccounts.post(
        '/api/token',
        paramsToken.toString(),
      );
      localStorage.setItem('@spotifood:token', JSON.stringify(token.data));

      const { access_token } = token.data;
      const user = await api.get('/me', {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });
      localStorage.setItem('@spotifood:user', JSON.stringify(user.data));

      setData({
        token: token.data,
        user: user.data,
      });

      window.location.assign('http://localhost:3000/dashboard');
    };

    if (code) {
      requestToken(code);
    }

    if (error) {
      throw new Error(error);
    }
  }, []);

  const loginSpotifood = () => {
    const params = new URLSearchParams();
    params.append('response_type', 'code');
    params.append('redirect_uri', 'http://localhost:3000/dashboard');
    params.append('client_id', 'e24c264306ca449c8c847ed46caad5ad');
    params.append('scope', 'user-read-private user-read-email');

    window.location.assign(
      `https://accounts.spotify.com/authorize?${params.toString()}`,
    );
  };

  const logoutSpotifood = () => {
    localStorage.removeItem('@spotifood:token');
    localStorage.removeItem('@spotifood:user');

    setData({} as IAuthState);

    window.location.assign('http://localhost:3000/');
  };

  const { user } = data;

  return (
    <AuthContext.Provider value={{ user, loginSpotifood, logoutSpotifood }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth needs AuthProvider');
  }

  return context;
}
