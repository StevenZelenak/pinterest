import firebase from 'firebase/app';
import 'firebase/auth';

import utils from '../../helpers/utils';

const signMeIn = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider);
};

const loginButton = () => {
  const domString = '<button id="google-auth" class="btn btn-outline-success my-2 mr-2 my-sm-0" type="">Google-Login</button>';
  utils.printToDom('login', domString);
  $('#google-auth').click(signMeIn);
};

export default {
  loginButton,
};
