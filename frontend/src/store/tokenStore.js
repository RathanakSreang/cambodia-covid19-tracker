import cookie from 'js-cookie';
import uuid  from 'uuid/v4';

export function setTokens(token, refresh_token) {
  cookie.set('refresh_token', refresh_token);
  cookie.set('token', token);
  // localStorage.setItem('refresh_token', refresh_token);
  // localStorage.setItem('token', token);
}

export function setToken(token) {
  cookie.set('token', token);
  // localStorage.setItem('token', token);
}

export function getAccessToken() {
  return cookie.get('token')
  // return localStorage.getItem('token')
}

export function getRefreshToken() {
  return cookie.get('refresh_token')
  // return localStorage.getItem('refresh_token')
}

export function removeTokens() {
  cookie.remove('refresh_token');
  cookie.remove('token');
  // localStorage.removeItem('refresh_token')
  // localStorage.removeItem('token')
}

export function getSessionUUID() {
  let sessionUUID = sessionStorage.getItem("uuid");
  if(sessionUUID) {
    return sessionUUID;
  }

  // generate uuid
  sessionUUID = uuid();
  sessionStorage.setItem("uuid", sessionUUID);
  return sessionUUID;
}
