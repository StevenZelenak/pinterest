const boardMaker = (board) => {
  let domString = '';
  domString += `<div id="${board.id}"class="card board-card col-3 mx-2">`;
  domString += '<div class="card-body">';
  domString += `<h5 class="card-title">${board.name}</h5>`;
  domString += `<p class="card-text">${board.description}</p>`;
  domString += '</div>';
  domString += '</div>';

  return domString;
};

export default {
  boardMaker,
};
