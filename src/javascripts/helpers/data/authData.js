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

const events = () => {
  $('body').on('click', '.board-card', singleBoard.singleBoardEvent);
  $('body').on('click', '.delete-pin', singleBoard.removePinFromSingleBoard);
  $('body').on('click', '#create-board-form', boardsPage.buildCreateBoardForm);
  $('body').on('click', '.delete-board', boardsPage.removeBoardCardFromPage);
  $('body').on('click', '#create-board', boardsPage.createABoardCard);
  $('body').on('click', '#create-pin', singleBoard.makeAPinForASingleBoard);
  $('body').on('click', '#create-pin-form', singleBoard.callPinCreateForm);
  $('body').on('click', '.edit-board-form', boardsPage.editBoardEvent);
  $('body').on('click', '#edit-board', boardsPage.submitEditBoardEvent);
  $('body').on('click', '.edit-pin-form', singleBoard.editPinEvent);
  $('body').on('click', '#edit-pin', singleBoard.submitEditPinEvent);
};

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      loginDiv.addClass('hide');
      homePageDiv.addClass('hide');
      logoutButton.removeClass('hide');
      boardPageDiv.removeClass('hide');
      boardsPage.buildBoardPage();
      home.HomePage(user);
      events();
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
