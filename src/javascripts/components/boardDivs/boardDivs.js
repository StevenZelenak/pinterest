const boardCardCreator = (board) => {
  let domString = '';
  domString += `<div id="${board.id}"class="card mb-2 col-3 mx-2">`;
  domString += '<div class="card-body board-card ">';
  domString += `<h5 class="card-title">${board.name}</h5>`;
  domString += `<p class="card-text">${board.description}</p>`;
  domString += '</div>';
  domString += '<div class="wrap">';
  domString += '<button class="btn btn-danger delete-board my-2 mx-2"><i class="fas fa-dumpster-fire"> Delete</i></button>';
  domString += '<button class="btn btn-success edit-board-form my-2 mx-2"><i class="far fa-edit"> Edit</i></button>';
  domString += '</div>';
  domString += '</div>';

  return domString;
};

const createBoardForm = () => {
  let domString = '';
  domString += '<h1 class="text-center mb-3" >Create Board</h1>';
  domString += '<div class="container text-center">';
  domString += '<div class="row justify-content-center">';
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
  domString += '</div>';
  domString += '</div>';

  return domString;
};

const createEditBoardForm = (boardId, selectedBoard) => {
  let domString = '';
  domString += '<h1 class="text-center mb-3" >Edit Board</h1>';
  domString += '<div class="container text-center">';
  domString += '<div class="row justify-content-center">';
  domString += `<form id=${boardId} class="col-4">`;
  domString += '<div class="form-group">';
  domString += '<label for="edit-board-name">Board Name:</label>';
  domString += `<input type="text" class="form-control" id="edit-board-name" aria-describedby="emailHelp" value="${selectedBoard.data.name}">`;
  domString += '</div>';
  domString += '<div class="form-group">';
  domString += '<label for="edit-board-description">Board Description:</label>';
  domString += `<input type="text" class="form-control" id="edit-board-description" value="${selectedBoard.data.description}">`;
  domString += '</div>';
  domString += '<button id="edit-board" type="submit" class="btn btn-primary">Complete Edit</button>';
  domString += '</form>';
  domString += '</div>';
  domString += '</div>';

  return domString;
};

export default {
  boardCardCreator,
  createBoardForm,
  createEditBoardForm,
};
