class ItsMe {
  constructor(name, age, adress, email, favorite, hate){
    this.name = name;
    this.age = age;
    this.adress = adress;
    this.email = email;
    this.favorite = favorite;
    this.hate = hate;
  }

  set name(value) {
    if(typeof value === 'string'){
      this._name = value;
    } else {
      console.error('name은 string이어야 함');
    }
  }
  get name(){
    return this._name;
  }
}

let test = new ItsMe(1, 28, 'Daejeon', 'c', 'mma', 'vegetable');

console.log(test);
console.log(test._name);