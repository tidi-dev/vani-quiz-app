import Cookies from 'js-cookie';

export function setAccessToken(accessToken: string) {
  Cookies.set('accessToken', accessToken);
}

export function getAccessToken(): string | undefined {
  return Cookies.get('accessToken');
}
