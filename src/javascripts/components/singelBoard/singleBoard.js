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
  const BoardId = e.data;
  pinsData.deletePin(pinId)
    // eslint-disable-next-line no-use-before-define
    .then(() => refreshSingleBoard(BoardId))
    .catch((err) => console.error('the removes pin function did not work', err));
};

const buildSingleBoard = (BoardId) => {
  pinsData.getPins(BoardId)
    .then((pins) => {
      let domString = '';
      domString += '<h1 class="text-center my-4 ">Pins</h1>';
      domString += `<div id="${BoardId}pin" class="d-flex flex-wrap justify-content-center">`;
      domString += '<button id="backButton"><i class="fas fa-arrow-left"></i> Back</button>';
      pins.forEach((pin) => {
        domString += pinsMaker.pinMaker(pin);
      });
      domString += '</div">';
      utils.printToDom('pint-pin', domString);
      pinDiv.removeClass('hide');
      boardDiv.addClass('hide');
      $('#backButton').click(returnToBoards);
      $('body').on('click', '.delete-pin', BoardId, removePinFromSingeleBoard);
    })
    .catch((err) => console.error('get pins by boardId broke', err));
};

const refreshSingleBoard = (BoardId) => {
  pinsData.getPins(BoardId)
    .then((pins) => {
      let domString = '';
      domString += '<h1 class="text-center my-4 ">Pins</h1>';
      domString += `<div id="${BoardId}pin" class="d-flex flex-wrap justify-content-center">`;
      domString += '<button id="backButton"><i class="fas fa-arrow-left"></i> Back</button>';
      pins.forEach((pin) => {
        domString += pinsMaker.pinMaker(pin);
      });
      domString += '</div">';
      utils.printToDom('pint-pin', domString);
      $('#backButton').click(returnToBoards);
      $('body').on('click', '.delete-pin', BoardId, removePinFromSingeleBoard);
    })
    .catch((err) => console.error('get pins by boardId broke', err));
};

const singleBoardEvent = (e) => {
  const BoardId = e.target.closest('.card').id;
  buildSingleBoard(BoardId);
};

export default {
  singleBoardEvent,
};
