import 'bootstrap';

import firebase from 'firebase/app';
import apiKeys from './helpers/apiKeys.json';

import '../styles/main.scss';
import auth from './components/auth/auth';
import authData from './helpers/data/authData';
import logout from './components/logout/logout';

const init = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  authData.checkLoginStatus();
  auth.loginButton();
  logout.logout();
};

init();
