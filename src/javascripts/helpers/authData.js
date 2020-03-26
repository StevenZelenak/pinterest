import firebase from 'firebase/app';
import 'firebase/auth';

const loginDiv = $('#login');

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      loginDiv.addClass('hide');
    } else {
      loginDiv.removeClass('hide');
    }
  });
};

export default {
  checkLoginStatus,
};
