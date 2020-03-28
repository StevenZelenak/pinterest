import firebase from 'firebase/app';
import 'firebase/auth';
import boards from '../../components/boards/boards';
import home from '../../components/home/home';

const loginDiv = $('#login');
const logoutButton = $('#logout');

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      loginDiv.addClass('hide');
      logoutButton.removeClass('hide');
      boards.createBoardPage();
      home.removeHomePage();
    } else {
      loginDiv.removeClass('hide');
      logoutButton.addClass('hide');
      boards.removeBoardPage();
      home.createHomePage();
    }
  });
};

export default {
  checkLoginStatus,
};