import {containerBlock} from "./block.js"

const textArea = document.getElementById('lengthField');
const saveButton = document.getElementById('save');
const headerSection = document.getElementById('headerSection');

saveButton.addEventListener('click', check);
headerSection.addEventListener('click', highlight);
headerSection.addEventListener('dblclick', deleteBlock);

function check() {
  let lengthBlock = Number(textArea.value);
  if (lengthBlock.length !==0 && isNumber(lengthBlock) === true && containerBlock.arr.length === 0){
    containerBlock.addBlock(lengthBlock);
    containerBlock.drawBox();

  } else if(lengthBlock.length !==0 && isNumber(lengthBlock) === true && containerBlock.arr.length > 0){
    containerBlock.addBlock(lengthBlock);
    containerBlock.changeWidth();
    containerBlock.drawBox();
  }
}

//Выделение блока, по которому кликнули
function highlight(eo) {
  let selectBlock = eo.target;
  if (selectBlock !== headerSection && !selectBlock.classList.contains('redBorder')) {
    selectBlock.classList.add("redBorder");
  } else {
    selectBlock.classList.remove("redBorder");
  }
}

function deleteBlock(eo) {
  containerBlock.deleteBlock(eo);
}

//Проверка на число
function isNumber(value) {
  if (value <= headerSection.clientWidth && (/\d/.test(value) === true)) {
    return true;
  } else {
    alert("Введенное вами значение не является числом или превышает допустимое значение (Допустимое значение 400)")
  }
}