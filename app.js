
let textArea = document.getElementById('lengthField');
const saveButton = document.getElementById('save');

saveButton.addEventListener('click', check);

function check() {
  let lengthBlock = textArea.value;
  console.log(/\d/.test(lengthBlock));
  if (isNumber(lengthBlock) === true){
    addBlock(lengthBlock);
  }else {
    alert('Нужно ввести число');
  }

}

function addBlock(width){
  let div = `<div id="${width}" style="width: ${width}px; height: 25px; background-color: ${randomColor()}"></div>`;
  document.getElementById('headerSection').insertAdjacentHTML('beforeend', div);
}

//Проверка на число
function isNumber(value) {
  return /\d/.test(value);
}

function randomColor(){
  return "#" + ((1 << 24) * Math.random() | 0).toString(16).padStart(6, "0");
}