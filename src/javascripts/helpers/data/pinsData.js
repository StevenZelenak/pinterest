import axios from 'axios';
import apiKeys from '../apiKeys.json';
import boardsData from './boardsData';

const baseURL = apiKeys.firebaseKeys.databaseURL;

const getPins = (e) => new Promise((resolve, reject) => {
  const boardsId = e.target.closest('.card').id;
  axios.get(`${baseURL}/pins.json`)
    .then((thisIsBasicallyTheURL) => {
      const thePins = thisIsBasicallyTheURL.data;
      const pins = [];
      const boardArr = boardsData.getSingleBoard(boardsId);
      Object.keys(thePins).forEach((pinId) => {
        thePins[pinId].id = pinId;
        pins.push(thePins[pinId]);
        console.error('board array', boardArr);
      });

      resolve(console.error('array of pins', pins));
    })
    .catch((err) => reject(err));
});

export default {
  getPins,
};
