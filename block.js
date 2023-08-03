export class Block {
  constructor() {
    this.arr = [];
  };

  addBlock(width){
    this.arr.push({
      id: this.randomColor(),
      width: width,
      height: 25,
      left: 0,
      color: this.randomColor()
    });
  };

  drawBox(){
    let lastElem = this.arr[this.arr.length-1];
      let div = `<div id="${lastElem.id}"
                    style="position: absolute;
                           width: ${lastElem.width}px;
                           height: ${lastElem.height}px;
                           left: ${lastElem.left}px;
                           background-color: ${lastElem.color}"></div>`;
      document.getElementById('headerSection').insertAdjacentHTML('beforeend', div);
  };

  checkBlock() {
    const headerSection = document.getElementById('headerSection');
    let arrHeaderSection= headerSection.querySelectorAll('div');
    /*const divIds = Array.from(headerSection).map(div => div.id);*/
    console.log(arrHeaderSection);
    console.log(uniqueArray);
  };

  //Находим элемент
  getValue(id){
    return this.arr.find(el => el.id === id);
  };

  //Меняем отступ для новых блоков
  changeWidth(){
    let lastElem = this.arr[this.arr.length-1];
    const widthArray = this.arr.map(subarray => subarray.width);
    lastElem.left = this.sumPreviousElements(widthArray);

    /*return this.arr.width.reduce((a,b) => a + b,0);*/
    /*return this.arr;*/
  };

   sumPreviousElements(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length - 1; i++) {
      sum += arr[i];
    }
    return sum;
  }

  //Рандомный цвет
  randomColor(){
    return "#" + ((1 << 24) * Math.random() | 0).toString(16).padStart(6, "0");
  };

}

export const containerBlock = new Block();