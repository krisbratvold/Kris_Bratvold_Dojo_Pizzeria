function pizzaOven(crust,sauce,cheese,toppings){
    var pizza = {};
    pizza.crust = crust;
    pizza.sauce = sauce;
    pizza.cheese = cheese;
    pizza.toppings = toppings;
    return pizza;
    }
var pizza1 = pizzaOven("deep dish","traditional","mozzarella",["pepperoni","sausage"]);
console.log(pizza1);
var pizza2 = pizzaOven("hand tossed","marinara",["mozzarella","feta"],["mushrooms","olives", "onions"])
console.log(pizza2)
var pizza3 = pizzaOven("thin","alfredo","feta","chicken")
console.log(pizza3)
var pizza4 = pizzaOven("hand-tossed","bbq","mozzarella",["jalapenos","chicken"])
console.log(pizza4)

var crusts = ["thin","hand tossed","deep dish"];
var sauces = ["alfredo","marinara","bbq"];
var cheeses = ["mozzarella","feta","cheddar"];
var toppingschoice = ["sausage","mushroooms","jalapenos","onions"];


function randomPizza(crust,sauce,cheese,toppings){
    var randpizza = {};
    randpizza.crust = crusts[Math.floor(Math.random()*crusts.length)];
    randpizza.sauce = sauces[Math.floor(Math.random()*sauces.length)];
    randpizza.cheese = cheeses[Math.floor(Math.random()*cheeses.length)];
    randpizza.toppings = toppingschoice[Math.floor(Math.random()*toppingschoice.length)];
    return randpizza;
}
console.log(randomPizza())
