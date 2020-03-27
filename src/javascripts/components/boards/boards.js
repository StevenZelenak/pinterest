import utils from '../../helpers/utils';

const createBoardPage = () => {
  const domString = '<h1>Board</h1>';
  utils.printToDom('pint-board', domString);
};

const removeBoardPage = () => {
  const domString = '';
  utils.printToDom('pint-board', domString);
};

export default {
  createBoardPage,
  removeBoardPage,
};
