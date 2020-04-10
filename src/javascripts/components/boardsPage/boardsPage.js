import firebase from 'firebase/app';
import 'firebase/auth';

import utils from '../../helpers/utils';
import boardsData from '../../helpers/data/boardsData';
import boards from '../boardsMaker/boardsMaker';

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
    })
    .catch((err) => console.error('it did not work', err));
};


export default {
  buildBoardPage,
};
