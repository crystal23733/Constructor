class MakeCoffee{
  constructor(coffeeBean, water, sugar){
    this.coffeeBean = coffeeBean;
    this.water = water;
    this.sugar = sugar;
  }
  // *규격만들기

  set coffeeBean(value) {
    if(typeof value === 'string'){
      this._coffeeBean = value;
    } else {
      console.error('coffeeBean은 문자열이어야 함');
    }
  }
  get coffeeBean(){
    return this._coffeeBean + '산';
  }

  set water(value){
    if(typeof value === 'number'){
      this._water = value;
    } else {
      console.error('water는 숫자여야 함');
    }
  }
  get water(){
    return this._water + 'ml';
  }

  set sugar(value){
    if(typeof value === 'boolean'){
      this._sugar = value;
    } else {
      console.error('sugar는 Boolean이어야 함');
    }
  }
  get sugar(){
    if(this._sugar === true){
      return '단맛';
    } else {
      return '쓴맛';
    }
  }
}

let test = new MakeCoffee('Dajeon', 300, false);

console.log(test);
console.log(test.coffeeBean);
console.log(test.water);
console.log(test.sugar);