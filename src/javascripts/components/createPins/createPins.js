import utils from '../../helpers/utils';
import pinsData from '../../helpers/data/pinsData';
import singleBoard from '../singelBoard/singleBoard';

const createFormDiv = $('#pint-create-form-pin');
const pinDiv = $('#pint-pin');

const createPinForm = () => {
  pinDiv.addClass('hide');
  createFormDiv.removeClass('hide');
  let domString = '';
  domString += '<h1 class="text-center">Create Pin</h1>';
  domString += '<form class="col-4">';
  domString += '<div class="form-group">';
  domString += '<label for="pin-image">Image Url:</label>';
  domString += '<input type="text" class="form-control" id="pin-image" aria-describedby="emailHelp" placeholder="Image Url">';
  domString += '</div>';
  domString += '<button id="create-pin" type="submit" class="btn btn-primary">Create</button>';
  domString += '</form>';
  utils.printToDom('pint-create-form-pin', domString);
};

const makeAPin = (e) => {
  e.preventDefault();
  const pinBoardId = window.localStorage.getItem('boardId');
  const newPin = {
    imageURL: $('#pin-image').val(),
    boardId: pinBoardId,
  };
  pinsData.addPin(newPin)
    .then(() => {
      pinDiv.removeClass('hide');
      singleBoard.buildSingleBoard(pinBoardId);
      utils.printToDom('pint-create-form-pin', '');
    })
    .catch((err) => console.error('could not add board', err));
};

export default {
  createPinForm,
  makeAPin,
};
