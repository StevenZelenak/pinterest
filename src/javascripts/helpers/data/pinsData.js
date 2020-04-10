import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseURL = apiKeys.firebaseKeys.databaseURL;

const getPins = (boardsId) => new Promise((resolve, reject) => {
  axios.get(`${baseURL}/pins.json?orderBy="boardId"&equalTo="${boardsId}"`)
    .then((thisIsBasicallyTheURL) => {
      const thePins = thisIsBasicallyTheURL.data;
      const pins = [];
      Object.keys(thePins).forEach((pinId) => {
        thePins[pinId].id = pinId;
        pins.push(thePins[pinId]);
      });

      resolve(pins);
    })
    .catch((err) => reject(err));
});

const deletePin = (pinId) => axios.delete(`${baseURL}/pins/${pinId}.json`);


export default {
  getPins,
  deletePin,
};
