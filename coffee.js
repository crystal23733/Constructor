class MakeCoffee{
  constructor(coffeeBean, water, sugar, milk){
    this.coffeeBean = coffeeBean;
    this.water = water;
    this.sugar = sugar;
    this.milk = milk;
  }
}

let test = new MakeCoffee('Daejeon', '300ml', false, false);

console.log(test);