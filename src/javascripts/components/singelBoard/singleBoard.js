import pinsData from '../../helpers/data/pinsData';
import pinsMaker from '../pinsMaker/pinsMaker';
import createPinsForm from '../createPinsForm/createPinsForm';
import utils from '../../helpers/utils';


const pinDiv = $('#pint-pin');
const boardDiv = $('#pint-board');
const createFormDiv = $('#pint-create-form-pin');

const returnToBoards = () => {
  pinDiv.addClass('hide');
  boardDiv.removeClass('hide');
};

const removePinFromSingleBoard = (e) => {
  const pinId = e.target.closest('.card').id;
  const BoardId = e.target.closest('.boardId').id;
  pinsData.deletePin(pinId)
    // eslint-disable-next-line no-use-before-define
    .then(() => buildSingleBoard(BoardId))
    .catch((err) => console.error('the removes pin function did not work', err));
};

const makeAPinForASingleBoard = (e) => {
  e.preventDefault();
  const pinBoardId = e.target.dataset.boardId;
  const newPin = {
    imageURL: $('#pin-image').val(),
    boardId: pinBoardId,
  };
  pinsData.addPin(newPin)
    .then(() => {
      pinDiv.removeClass('hide');
      // eslint-disable-next-line no-use-before-define
      buildSingleBoard(pinBoardId);
      utils.printToDom('pint-create-form-pin', '');
    })
    .catch((err) => console.error('could not add pin', err));
};

const callPinCreateForm = (e) => {
  const {
    boardId,
  } = e.target.dataset;
  pinDiv.addClass('hide');
  createFormDiv.removeClass('hide');
  let domString = '';
  domString += createPinsForm.createPinForm(boardId);
  utils.printToDom('pint-create-form-pin', domString);
};

const buildSingleBoard = (boardId) => {
  pinsData.getPins(boardId)
    .then((pins) => {
      let domString = '';
      domString += '<h1 class="text-center my-4 ">Pins</h1>';
      domString += '<div class= "mb-3 text-center">';
      domString += `<button id="create-pin-form" data-board-Id=${boardId} class="btn btn-success my-2 my-sm-0" type="submit">Create Pin</button>`;
      domString += '</div>';
      domString += `<div id="${boardId}" class="boardId d-flex flex-wrap justify-content-center">`;
      domString += '<button id="backButton"><i class="fas fa-arrow-left"></i> Back</button>';
      pins.forEach((pin) => {
        domString += pinsMaker.pinMaker(pin);
      });
      domString += '</div>';
      utils.printToDom('pint-pin', domString);
      pinDiv.removeClass('hide');
      boardDiv.addClass('hide');
      $('#backButton').click(returnToBoards);
    })
    .catch((err) => console.error('get pins by boardId broke', err));
};


const singleBoardEvent = (e) => {
  const boardId = e.target.closest('.card').id;
  buildSingleBoard(boardId);
};

export default {
  singleBoardEvent,
  removePinFromSingleBoard,
  buildSingleBoard,
  makeAPinForASingleBoard,
  callPinCreateForm,
};
