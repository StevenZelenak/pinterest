import axios from 'axios';
import apiKeys from '../apiKeys.json';
import pinsData from './pinsData';
import pinsMaker from '../../components/pinsMaker/pinsMaker';
import utils from '../utils';

const baseURL = apiKeys.firebaseKeys.databaseURL;

const pinDiv = $('#pint-pin');
const boardDiv = $('#pint-board');

const getBoards = () => new Promise((resolve, reject) => {
  axios.get(`${baseURL}/boards.json`)
    .then((thisIsBasicallyTheURL) => {
      const theBoards = thisIsBasicallyTheURL.data;
      const boards = [];
      Object.keys(theBoards).forEach((boardId) => {
        theBoards[boardId].id = boardId;
        boards.push(theBoards[boardId]);
      });

      resolve(boards);
    })
    .catch((err) => reject(err));
});

const getBoardsByUid = (uid) => new Promise((resolve, reject) => {
  axios.get(`${baseURL}/boards.json?orderBy="uid"&equalTo="${uid}"`)
    .then((thisIsBasicallyTheURL) => {
      const theBoards = thisIsBasicallyTheURL.data;
      const boards = [];
      Object.keys(theBoards).forEach((boardId) => {
        theBoards[boardId].id = boardId;
        boards.push(theBoards[boardId]);
      });

      resolve(boards);
    })
    .catch((err) => reject(err));
});

const returnToBoards = () => {
  pinDiv.addClass('hide');
  boardDiv.removeClass('hide');
};

const createSingleBoard = (selectedBoardId) => {
  pinsData.getPins(selectedBoardId)
    .then((pins) => {
      let domString = '';
      // I need to some how grab the name from the boards and put it in front of the h1 pins
      domString += '<h1 class="text-center my-4 ">Pins</h1>';
      domString += '<div class="d-flex flex-wrap justify-content-center">';
      domString += '<button id="backButton"><i class="fas fa-arrow-left"></i> Back</button>';
      pins.forEach((pin) => {
        domString += pinsMaker.pinMaker(pin);
      });
      domString += '</div">';
      utils.printToDom('pint-pin', domString);
      pinDiv.removeClass('hide');
      boardDiv.addClass('hide');
      $('#backButton').click(returnToBoards);
    })
    .catch((err) => console.error('get pins by boardId broke', err));
};

const singleBoardEvent = (e) => {
  const selectedBoardId = e.target.closest('.card').id;
  createSingleBoard(selectedBoardId);
};


export default {
  getBoards,
  getBoardsByUid,
  singleBoardEvent,
};
