const pinMaker = (pin) => {
  let domString = '';
  domString += `<div id="${pin.id}" class="card col-3 mx-2" style="width: 20rem";>`;
  domString += `<img class="card-img-top" src="${pin.imageURL}" alt="Card image cap">`;
  domString += '<div class="card-body text-center">';
  domString += '<button class="btn btn-danger delete-pin"><i class="fas fa-dumpster-fire px-3"></i></button>';
  domString += `<button data-board-Id=${pin.boardId} class="btn btn-success edit-pin-form my-2 mx-2">Edit</button>`;
  domString += '</div>';
  domString += '</div>';

  return domString;
};

const createPinForm = (boardId) => {
  let domString = '';
  domString += '<h1 class="text-center">Create Pin</h1>';
  domString += '<form class="col-4">';
  domString += '<div class="form-group">';
  domString += '<label for="pin-image">Image Url:</label>';
  domString += '<input type="text" class="form-control" id="pin-image" aria-describedby="emailHelp" placeholder="Image Url">';
  domString += '</div>';
  domString += `<button data-board-Id=${boardId} id="create-pin" type="submit" class="btn btn-primary">Create</button>`;
  domString += '</form>';
  return domString;
};

const EditPinForm = (pinId, selectedPin, pinBoardId) => {
  let domString = '';
  domString += '<h1 class="text-center">Edit Pin</h1>';
  domString += `<form id=${pinId} class="col-4">`;
  domString += '<div class="form-group">';
  domString += '<label for="edit-pin-image">Image Url:</label>';
  domString += `<input type="text" class="form-control" id="edit-pin-image" aria-describedby="emailHelp" value="${selectedPin.data.imageURL}">`;
  domString += '</div>';
  domString += `<button data-board-Id=${pinBoardId} id="edit-pin" type="submit" class="btn btn-primary">Complete Edit</button>`;
  domString += '</form>';
  return domString;
};

export default {
  pinMaker,
  createPinForm,
  EditPinForm,
};
