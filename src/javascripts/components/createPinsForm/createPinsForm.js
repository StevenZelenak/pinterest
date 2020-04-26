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


export default {
  createPinForm,
};
