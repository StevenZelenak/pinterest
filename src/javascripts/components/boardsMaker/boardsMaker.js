const boardMaker = (board) => {
  let domString = '';
  domString += `<div id="${board.id}"class="card col-3 mx-2">`;
  domString += '<div class="card-body board-card ">';
  domString += `<h5 class="card-title">${board.name}</h5>`;
  domString += `<p class="card-text">${board.description}</p>`;
  domString += '</div>';
  domString += '<button class="btn btn-danger delete-board"><i class="fas fa-dumpster-fire"> Delete</i></button>';
  domString += '</div>';

  return domString;
};

export default {
  boardMaker,
};
