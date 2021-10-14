console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];
console.log(`basket is ${basket}`);

function addItem(item) {
  basket.push(item);
  if (isFull) {
    return true;
  } else {
    return false;
  };
};//End Function
console.log('Adding grapes', addItem('grapes'));
console.log(`basket is now ${basket}`);

function listItems(arr) {
  for (let i = 0; i <= arr.length-1; i++) {
    arr[i];
    console.log(arr[i]);
  };//End For
};//End Function
console.log('Adding apples', addItem('apples'));
console.log(`basket is now ${basket}`);
console.log(listItems(basket));

function empty(arr) {
  arr.splice(0, arr.length);
};//End Function
console.log(empty(basket));
console.log(basket);


//STRETCH

const maxItems = 5;

function isFull(arr) {
  if (arr < maxItems) {
    return false;
  } else {
    return true;
  }
};//End Function
console.log(isFull(basket));
