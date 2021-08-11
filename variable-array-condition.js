var bottleColor = 'yellow';
var waterQuantity = 1;
var isFull = false;

// array

var items = ['bottle', 'mug', 'paper', 'pen'];
var itemsNumber = items.indexOf('bottle');
// console.log(itemsNumber);
var anItem = items[2];
// console.log(anItem);
console.log(items[3]);

items.push('penholder');
var newItems = items[4]
console.log(items);
console.log(newItems);
// var numbers = [1, 2, 3, 4, 5];
// console.log(numbers.indexOf(8));
items.pop();
console.log(items);
if(items.length > 4){
    console.log('You have too many stuff on your desk.')
}
else if(items.length == 4){
    console.log('You have only one hali items');
}
else{
    console.log('WOW! You have a clean desk.')
}