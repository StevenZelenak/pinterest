import firebase from 'firebase/app';
import 'firebase/auth';
import home from '../../components/homePage/home';
import boardsPage from '../../components/boardsPage/boardsPage';
import singleBoard from '../../components/singelBoard/singleBoard';

const loginDiv = $('#login');
const logoutButton = $('#logout');
const boardPageDiv = $('#pint-board');
const homePageDiv = $('#pint-home');

const getCurrentUid = () => firebase.auth().currentUser.uid;

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      loginDiv.addClass('hide');
      homePageDiv.addClass('hide');
      logoutButton.removeClass('hide');
      boardPageDiv.removeClass('hide');
      boardsPage.buildBoardPage();
      home.HomePage(user);
      $('body').on('click', '.board-card', singleBoard.singleBoardEvent);
    } else {
      homePageDiv.removeClass('hide');
      loginDiv.removeClass('hide');
      logoutButton.addClass('hide');
      boardPageDiv.addClass('hide');
      home.HomePage(user);
    }
  });
};

export default {
  checkLoginStatus,
  getCurrentUid,
};
