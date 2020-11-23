import axios from 'axios';

const token = localStorage.getItem('@spotifood:token') || '';
const { access_token } = token ? JSON.parse(token) : { access_token: '' };
export const isAuthenticated = () => access_token;

export const api = axios.create({
  baseURL: 'https://api.spotify.com/v1/',
  headers: {
    Authorization: `Bearer ${access_token}`,
  },
});

export const apiMocky = axios.create({
  baseURL: 'http://www.mocky.io/v2/5a25fade2e0000213aa90776',
});

export const spotifyAccounts = axios.create({
  baseURL: 'https://accounts.spotify.com/',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    Authorization: `Basic ${btoa(
      'e24c264306ca449c8c847ed46caad5ad:72cf29e82b0d49fc9b68b008e138e6a5',
    )}`,
  },
});
