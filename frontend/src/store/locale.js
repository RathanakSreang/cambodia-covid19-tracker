import cookie from 'js-cookie';

export function getLocale() {
  return 'en';//cookie.get('locale') || 'en';
}

export function setLocale(lang) {
  cookie.set('locale', lang);
}
