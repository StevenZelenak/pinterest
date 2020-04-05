const pinMaker = (pin) => {
  let domString = '';
  domString += `<div id="${pin.id}" class="card col-3 mx-2" style="width: 20rem";>`;
  domString += `<img class="card-img-top" src=${pin.imageURL} alt="Card image cap">`;
  domString += '<div class="card-body">';
  domString += '</div>';
  domString += '</div>';

  return domString;
};

export default {
  pinMaker,
};
