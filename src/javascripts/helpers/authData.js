import firebase from 'firebase/app';
import 'firebase/auth';

const loginDiv = $('#login');
const logoutButton = $('#logout');

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      loginDiv.addClass('hide');
      logoutButton.removeClass('hide');
    } else {
      loginDiv.removeClass('hide');
      logoutButton.addClass('hide');
    }
  });
};

export default {
  checkLoginStatus,
};
