import firebase from 'firebase/app';
import 'firebase/auth';

import utils from '../../helpers/utils';
import boardsData from '../../helpers/data/boardsData';
import boards from '../boardsMaker/boardsMaker';
import pinsData from '../../helpers/data/pinsData';

const removeBoardFromPage = (e) => {
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

const buildBoardPage = () => {
  const getFireCurrentUser = firebase.auth().currentUser;
  const getUserUid = getFireCurrentUser.uid;
  boardsData.getBoardsByUid(getUserUid)
    .then((itworked) => {
      let domString = '';
      domString += '<h1 class="mb-4">Boards</h1>';
      domString += '<div class="d-flex flex-wrap justify-content-center">';
      itworked.forEach((board) => {
        domString += boards.boardMaker(board);
      });
      domString += '</div>';
      utils.printToDom('pint-board', domString);
      $('body').on('click', '.delete-board', removeBoardFromPage);
    })
    .catch((err) => console.error('it did not work', err));
};


export default {
  buildBoardPage,
  removeBoardFromPage,
};
