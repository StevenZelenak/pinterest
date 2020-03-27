import utils from '../../helpers/utils';

const createHomePage = () => {
  const domString = '<h1>Pintrest</h1>';
  utils.printToDom('pint-home', domString);
};

const removeHomePage = () => {
  const domString = '';
  utils.printToDom('pint-home', domString);
};

export default {
  createHomePage,
  removeHomePage,
};
