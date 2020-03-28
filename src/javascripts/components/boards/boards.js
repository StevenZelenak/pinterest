import utils from '../../helpers/utils';
import boardsData from '../../helpers/data/boardsData';

const createBoards = () => {
  boardsData.getBoards()
    .then((itworked) => console.error('it worked', itworked))
    .catch((err) => console.error('it did not work', err));
};

const createBoardPage = () => {
  const domString = '<h1>Boards</h1>';
  utils.printToDom('pint-board', domString);
  createBoards();
};

const removeBoardPage = () => {
  const domString = '';
  utils.printToDom('pint-board', domString);
};


export default {
  createBoardPage,
  removeBoardPage,
  createBoards,
};
