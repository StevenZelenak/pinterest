import pinsData from '../../helpers/data/pinsData';
import pinsMaker from '../pinsMaker/pinsMaker';
import utils from '../../helpers/utils';


const pinDiv = $('#pint-pin');
const boardDiv = $('#pint-board');

const returnToBoards = () => {
  pinDiv.addClass('hide');
  boardDiv.removeClass('hide');
};

const removePinFromSingeleBoard = (e) => {
  const pinId = e.target.closest('.card').id;
  const BoardId = e.target.closest('.boardId').id;
  pinsData.deletePin(pinId)
    // eslint-disable-next-line no-use-before-define
    .then(() => buildSingleBoard(BoardId))
    .catch((err) => console.error('the removes pin function did not work', err));
};

const buildSingleBoard = (boardId) => {
  pinsData.getPins(boardId)
    .then((pins) => {
      let domString = '';
      domString += '<h1 class="text-center my-4 ">Pins</h1>';
      domString += '<div class= "mb-3 text-center">';
      domString += '<button id="create-pin-form" class="btn btn-success my-2 my-sm-0" type="submit">Create Pin</button>';
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
  window.localStorage.setItem('boardId', boardId);
  buildSingleBoard(boardId);
};

export default {
  singleBoardEvent,
  removePinFromSingeleBoard,
  buildSingleBoard,
};
