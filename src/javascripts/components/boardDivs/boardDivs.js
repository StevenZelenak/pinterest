const boardCardCreator = (board) => {
  let domString = '';
  domString += `<div id="${board.id}"class="card mb-2 col-3 mx-2">`;
  domString += '<div class="card-body board-card ">';
  domString += `<h5 class="card-title">${board.name}</h5>`;
  domString += `<p class="card-text">${board.description}</p>`;
  domString += '</div>';
  domString += '<button class="btn btn-danger delete-board"><i class="fas fa-dumpster-fire"> Delete</i></button>';
  domString += '</div>';

  return domString;
};

const createBoardForm = () => {
  let domString = '';
  domString += '<h1 class="text-center" >Create Board</h1>';
  domString += '<form class="col-4">';
  domString += '<div class="form-group">';
  domString += '<label for="board-name">Board Name:</label>';
  domString += '<input type="text" class="form-control" id="board-name" aria-describedby="emailHelp" placeholder="Cooking">';
  domString += '</div>';
  domString += '<div class="form-group">';
  domString += '<label for="board-description">Board Description:</label>';
  domString += '<input type="text" class="form-control" id="board-description" placeholder="Where I keep all my cooking recipes">';
  domString += '</div>';
  domString += '<button id="create-board" type="submit" class="btn btn-primary">Create</button>';
  domString += '</form>';

  return domString;
};

export default {
  boardCardCreator,
  createBoardForm,
};
