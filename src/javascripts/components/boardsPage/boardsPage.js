import firebase from 'firebase/app';
import 'firebase/auth';

import utils from '../../helpers/utils';
import boardsData from '../../helpers/data/boardsData';
import boardDivs from '../boardDivs/boardDivs';
import pinsData from '../../helpers/data/pinsData';

const createFormDiv = $('#pint-create-form');
const editFormBoardDiv = $('#pint-edit-board-form');
const boardDiv = $('#pint-board');

// All Functions relating to the boards overall
const buildCreateBoardForm = () => {
  boardDiv.addClass('hide');
  createFormDiv.removeClass('hide');
  // Calls the create board form and attaches it to the domString to print out
  let domString = '';
  domString += boardDivs.createBoardForm();
  utils.printToDom('pint-create-form', domString);
};

const createABoardCard = (e) => {
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
      buildBoardPage();
      utils.printToDom('pint-create-form', '');
    })
    .catch((err) => console.error('could not add board', err));
};

const removeBoardCardFromPage = (e) => {
  const boardId = e.target.closest('.card').id;
  boardsData.deleteBoard(boardId)
    .then(() => {
      pinsData.getPins(boardId).then((pins) => {
        pins.forEach((pin) => {
          pinsData.deletePin(pin.id);
        });
      });
      // eslint-disable-next-line no-use-before-define
      buildBoardPage();
    })
    .catch((err) => console.error('the removes board function did not work', err));
};

const callBoardEditForm = (boardId) => {
  boardDiv.addClass('hide');
  editFormBoardDiv.removeClass('hide');

  boardsData.getSingleBoard(boardId)
    .then((selectedBoard) => {
      let domString = '';
      domString += boardDivs.createEditBoardForm(boardId, selectedBoard);
      utils.printToDom('pint-edit-board-form', domString);
    })
    .catch((err) => console.error('edit board did not work', err));
};

const editBoardEvent = (e) => {
  const boardId = e.target.closest('.card').id;
  callBoardEditForm(boardId);
};

const submitEditBoardEvent = (e) => {
  e.preventDefault();
  const selectedBoardId = e.target.closest('form').id;
  const modifiedBoard = {
    name: $('#edit-board-name').val(),
    description: $('#edit-board-description').val(),
    uid: firebase.auth().currentUser.uid,
  };
  boardsData.updateBoard(selectedBoardId, modifiedBoard)
    .then(() => {
      // eslint-disable-next-line no-use-before-define
      buildBoardPage();
      utils.printToDom('pint-edit-board-form', '');
    })
    .catch((err) => console.error('could not update board', err));
};


const buildBoardPage = () => {
  const getFireCurrentUser = firebase.auth().currentUser;
  const getUserUid = getFireCurrentUser.uid;
  boardDiv.removeClass('hide');
  boardsData.getBoardsByUid(getUserUid)
    .then((itworked) => {
      let domString = '';
      domString += '<h1 class="mb-4">Boards</h1>';
      domString += '<div class= "mb-3">';
      domString += '<button id="create-board-form" class="btn btn-success my-2 my-sm-0" type="submit">Create Board</button>';
      domString += '</div>';
      domString += '<div class="d-flex flex-wrap justify-content-center">';
      itworked.forEach((board) => {
        domString += boardDivs.boardCardCreator(board);
      });
      domString += '</div>';
      utils.printToDom('pint-board', domString);
    })
    .catch((err) => console.error('it did not work', err));
};

const goHome = () => {
  boardDiv.removeClass('hide');
  createFormDiv.addClass('hide');
  editFormBoardDiv.addClass('hide');
  $('#pint-pin').addClass('hide');
  $('#pint-create-form-pin').addClass('hide');
  $('#pint-edit-pin-form').addClass('hide');
  buildBoardPage();
};

export default {
  buildBoardPage,
  removeBoardCardFromPage,
  createABoardCard,
  buildCreateBoardForm,
  callBoardEditForm,
  editBoardEvent,
  submitEditBoardEvent,
  goHome,
};
