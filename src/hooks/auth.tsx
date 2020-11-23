import React, { createContext, useContext, useEffect, useState } from 'react';
import { spotifyAccounts, api } from '../services/api';

import { REACT_APP_URL, CLIENT_ID } from '../utils/config';

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
      paramsToken.append('redirect_uri', `${REACT_APP_URL}dashboard`);
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
      console.log('entrou aq');

      window.location.assign(`${REACT_APP_URL}dashboard`);
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
    params.append('redirect_uri', `${REACT_APP_URL}dashboard`);
    params.append('client_id', CLIENT_ID);
    params.append('scope', 'user-read-private user-read-email');

    window.location.assign(
      `https://accounts.spotify.com/authorize?${params.toString()}`,
    );
  };

  // const loginSpotifood = () => {
  //   const params = new URLSearchParams();
  //   params.append('client_id', CLIENT_ID);
  //   params.append('response_type', 'token');
  //   params.append('redirect_uri', `${REACT_APP_URL}/dashboard`);

  //   window.location.assign(
  //     `https://accounts.spotify.com/authorize?${params.toString()}`,
  //   );
  // };

  const logoutSpotifood = () => {
    localStorage.removeItem('@spotifood:token');
    localStorage.removeItem('@spotifood:user');

    setData({} as IAuthState);

    window.location.assign(REACT_APP_URL);
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
