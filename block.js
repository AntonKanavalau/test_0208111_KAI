export class Block {
  constructor() {
    this.arr = [];
    this.totalBlockLength = 0;
    this.headerSection = document.getElementById('headerSection');
    this.textArea = document.getElementById('lengthField');
  };

  addBlock(width) {
    if (this.totalBlockLength + Number(this.textArea.value) <= 400) {

      this.arr.push({
        id: this.randomColor(),
        width: width,
        height: 25,
        left: 0,
        color: this.randomColor()
      });

    } else {
      alert('Нехватает места');
    }

    this.checkTotalBlockLength();
  };


  drawBox(){
    this.headerSection.innerHTML = '';
    this.arr.forEach((elem) => {
      let div = `<div id="${elem.id}"
                    style="position: absolute;
                           width: ${elem.width}px;
                           height: ${elem.height}px;
                           left: ${elem.left}px;
                           background-color: ${elem.color}"></div>`;
      document.getElementById('headerSection').insertAdjacentHTML('beforeend', div);
    })
  };

  //Меняем отступ для новых блоков
  changeWidth(){
    let lastElem = this.arr[this.arr.length-1];
    const widthArray = this.arr.map(subarray => subarray.width);
    lastElem.left = this.sumPreviousElements(widthArray);
  };

  //Удаление блоков
  deleteBlock(eo) {
    if(eo.target.id !== 'headerSection'){
      eo.target.remove();
      return this.arr = this.arr.filter(e => e.id !== eo.target.id);
    }
  }

  //сумируем длинну старых отрезков
   sumPreviousElements(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length - 1; i++) {
      sum += arr[i];
    }
    return sum;
  }

  //Рандомный цвет
  randomColor(){
    return "#" + ((1 << 24) * Math.random() | 0).toString(16).padStart(6, "0");
  };

  //Длинна всех блоков на отрезке
  checkTotalBlockLength() {
     this.totalBlockLength = this.arr.reduce((accumulator, currentObject) => {
      return accumulator + currentObject.width;
    }, 0);
  }

  arrange(){
    for (let i = 1; i < this.arr.length; i++) {

      if(this.arr[i].left > (this.arr[i-1].left + this.arr[i-1].width)){
        this.arr[i].left = this.arr[i].left - (this.arr[i].left - (this.arr[i-1].left + this.arr[i-1].width));
      }
      this.drawBox();
    }
    return this.arr;
  }
}

export const containerBlock = new Block();