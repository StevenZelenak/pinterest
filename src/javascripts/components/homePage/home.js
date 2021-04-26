import utils from '../../helpers/utils';

const HomePage = () => {
  let domString = '';
  domString = '<h1>Pinterest</h1>';
  utils.printToDom('pint-home', domString);
};


export default {
  HomePage,
};
