import food from './food.json' assert {type: 'json'};

//1) list all the food items
console.log(food);

//2) list all the food items with category vegetables
var vegetables = food.filter((item, index, array) => {
    if (item.category === 'Vegetable')
        return item;
})

console.log(vegetables);

//3) list all the food items with category fruit
var fruits = food.filter((item, index, array) => {
    if (item.category === 'Fruit')
        return item;
})

console.log(fruits);

// 4) list all the food items with category protien
var proteins = food.filter((item, index, array) => {
    if (item.category === 'Protein')
        return item;
})

console.log(proteins);

// 5) list all the food items with category nuts
var nuts = food.filter((item, index, array) => {
    if (item.category === 'Nuts')
        return item;
})

console.log(nuts);

// // 6) list all the food items with category grains
var grains = food.filter((item, index, array) => {
    if (item.category === 'Grain')
        return item;
})

console.log(grains);

// // 7) list all the food items with category dairy
var dairy = food.filter((item, index, array) => {
    if (item.category === 'Dairy')
        return item;
})

console.log(dairy);

// 8) list all the food items with calorie above 100
var foodItem = food.filter((item, index, array) => {
    if (item.calorie > 100)
        return item;
})

console.log(foodItem);

// 9) list all the food items with calorie below 100
var foodItem = food.filter((item, index, array) => {
    if (item.calorie < 100)
        return item;
})

console.log(foodItem);

// 10) list all the food items with highest protien content to lowest
var foodItem = food.map((item, index, array) => {
    return item;
})

foodItem.sort(function (a, b) {
    return b.protiens - a.protiens;
});

console.log(foodItem);

// 11) list all the food items with lowest cab content to highest
var foodItem = food.map((item, index, array) => {
    return item;
})

foodItem.sort(function (a, b) {
    return a.cab - b.cab;
});

console.log(foodItem);