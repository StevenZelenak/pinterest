import firebase from 'firebase/app';
import 'firebase/auth';

import utils from '../../helpers/utils';
import boardsData from '../../helpers/data/boardsData';
import boardsPage from '../boardsPage/boardsPage';

const createFormDiv = $('#pint-create-form');
const boardDiv = $('#pint-board');

const createBoardForm = () => {
  boardDiv.addClass('hide');
  createFormDiv.removeClass('hide');
  let domString = '';
  domString += '<h1 class="text-center" >Create Board</h1>';
  domString += '<form class="col-4">';
  domString += '<div class="form-group">';
  domString += '<label for="board-name">Board Name:</label>';
  domString += '<input type="text" class="form-control" id="board-name" aria-describedby="emailHelp" placeholder="Cooking">';
  domString += '</div>';
  domString += '<div class="form-group">';
  domString += '<label for="board-description">Board Description:</label>';
  domString += '<input type="text" class="form-control" id="board-description" placeholder="Where I keep all my cooking recipes">';
  domString += '</div>';
  domString += '<button id="create-board" type="submit" class="btn btn-primary">Create</button>';
  domString += '</form>';
  utils.printToDom('pint-create-form', domString);
};

const makeABoard = (e) => {
  e.preventDefault();
  const newBoard = {
    name: $('#board-name').val(),
    description: $('#board-description').val(),
    uid: firebase.auth().currentUser.uid,
  };
  boardsData.addBoard(newBoard)
    .then(() => {
      boardDiv.removeClass('hide');
      // eslint-disable-next-line no-use-before-define
      boardsPage.buildBoardPage();
      utils.printToDom('pint-create-form', '');
    })
    .catch((err) => console.error('could not add board', err));
};

export default {
  createBoardForm,
  makeABoard,
};
