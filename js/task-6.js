function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const form = document.getElementById('controls');
const number = form.firstElementChild;
const create = document.querySelector('button[data-create]');
const destroy = document.querySelector('button[data-destroy]');
const boxes = document.getElementById('boxes');
let boxesList;


create.addEventListener('click', handleCreate);

destroy.addEventListener('click', destroyBoxes);



function handleCreate(event) {
  let amount = number.value;
  if(amount > 0 && amount <= 100) {
    createBoxes(amount);
  }
}


function createBoxes(amount){
  if(boxesList === undefined) {
    boxesList = document.createElement('ul');
    boxesList.classList.add('boxes-list');
    boxes.appendChild(boxesList);
  } else {
    boxesList.remove();
    boxesList = document.createElement('ul');
    boxesList.classList.add('boxes-list');
    boxes.appendChild(boxesList);
  }


  const box = {
    height: 20,
    width: 20,
  };


  for(let i = 1; i <= amount; i++) {
    const boxesItem = document.createElement('li');
    boxesItem.style.listStyleType = 'none';
    boxesItem.style.margin = '10px';
    boxesList.append(boxesItem);

    const squareBox = document.createElement('div');
    squareBox.style.backgroundColor = getRandomHexColor();
    squareBox.style.height = `${box.height += 10}px`;
    box.height += 10;
    squareBox.style.width = `${box.width += 10}px`;
    box.width += 10;
    boxesItem.append(squareBox);

  }
  number.value = ' ';
}


function destroyBoxes() {
  boxesList.remove();
};