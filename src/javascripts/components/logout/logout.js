import firebase from 'firebase/app';
import 'firebase/auth';

const logout = () => {
  $('#logout').click(() => {
    // e.preventDefault();
    firebase.auth().signOut();
  });
};

export default {
  logout,
};
