
const textArea = document.getElementById('lengthField');
const saveButton = document.getElementById('save');
const  headerSection = document.getElementById('headerSection');
let totalBlockLength = 0;

saveButton.addEventListener('click', check);
headerSection.addEventListener('click', highlight);
headerSection.addEventListener('dblclick', deleteBlock);

function check() {
  let lengthBlock = textArea.value;

 if (isNumber(lengthBlock) === true && totalBlockLength+ Number(lengthBlock) <= 400){
     addBlock(lengthBlock);
     checkTotalBlockLength();
 }else if (totalBlockLength+Number(lengthBlock) > 400){
     alert('Длинна блоков превышает допустимое значение');
   }
}

function highlight(eo){
  let selectBlock = eo.target;
  if(selectBlock !== headerSection && !selectBlock.classList.contains('redBorder')){
    selectBlock.classList.add("redBorder");
    console.log(eo.target);
  } else {
    selectBlock.classList.remove("redBorder");
  }
}

function deleteBlock(eo){
  totalBlockLength -= eo.target.offsetWidth;
  eo.target.remove();
}

//Добавляем блок
function addBlock(width){
  let div = `<div id="${width}" style="width: ${width}px; height: 25px; background-color: ${randomColor()}"></div>`;
  document.getElementById('headerSection').insertAdjacentHTML('beforeend', div);
}

//Проверка длинны всех блоков
function checkTotalBlockLength() {
  let nestedDiv = headerSection.querySelectorAll('div');
  let totalWidth = 0;
  nestedDiv.forEach((div) => {
    const divWidth = div.offsetWidth;
    totalWidth += divWidth;
    totalBlockLength = totalWidth;
  });
  console.log(totalWidth);
}

//Рандомный цвет блока
function randomColor(){
  return "#" + ((1 << 24) * Math.random() | 0).toString(16).padStart(6, "0");
}

//Проверка на число
function isNumber(value) {
  if( value <= headerSection.clientWidth && (/\d/.test(value) === true)) {
    return true;
  }else {
    alert("Введенное вами значение не является числом или превышает допустимое значение (Допустимое значение 400)")
  }
}

console.log(headerSection.clientWidth);