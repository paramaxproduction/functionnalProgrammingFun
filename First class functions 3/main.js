var products = [
  {name: "Grapefruit", calories: 170, color: "red", sold: 8200},
  {name: "Orange", calories: 160, color: "orange", sold: 12101},
  {name: "Cola", calories: 210, color: "caramel", sold: 25412},
  {name: "Diet Cola", calories: 0, color: "caramel", sold: 43922},
  {name: "Lemon", calories: 200, color: "clear", sold: 14983},
  {name: "Raspberry", calories: 180, color: "pink", sold: 9427},
  {name: "Root Beer", calories: 200, color: "caramel", sold: 9909},
  {name: "Water", calories: 0, color: "clear", sold: 62123}
];

function compareSold(colaA, colaB) {
  return colaA.sold - colaB.sold;
}

function compareName(colaA, colaB) {
  return colaA.name > colaB.name;
}

function compareCalories(colaA, colaB) {
  return colaB.calories - colaA.calories;
}

function compareColor(colaA, colaB) {
  return colaA.color > colaB.color;
}

function printProducts(products) {
  for (var i = 0; i < products.length; i++) {
    console.log("Name: " + products[i].name + ", Calories: " + products[i].calories + ", Color: " + products[i].color + ", Sold: " + products[i].sold);
  }
}

products.sort(compareSold);
console.log("Products sorted by sold:");
printProducts(products);

products.sort(compareName);
console.log("Products sorted by name:")
printProducts(products);

products.sort(compareCalories);
console.log("Products sorted by calories:")
printProducts(products);

products.sort(compareColor);
console.log("Products sorted by color:")
printProducts(products);
