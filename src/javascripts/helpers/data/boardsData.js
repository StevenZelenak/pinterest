import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseURL = apiKeys.firebaseKeys.databaseURL;


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

const deleteBoard = (boardId) => axios.delete(`${baseURL}/boards/${boardId}.json`);

export default {
  getBoards,
  getBoardsByUid,
  deleteBoard,
};
