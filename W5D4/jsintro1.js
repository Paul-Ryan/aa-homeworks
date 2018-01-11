// Write a function that takes three strings - a verb, an adjective, and a noun - uppercases and interpolates them into the sentence "We shall VERB the ADJECTIVE NOUN". Use ES6 template literals.
//
// For example,
//
// > madLib('make', 'best', 'guac');
// "We shall MAKE the BEST GUAC."

function madLib(verb, adjective, noun) {
  return 'We shall ${verb.toUpperCase()} the ${adjective.toUpperCase()} ${noun.toUpperCase()}';
}

// function madLib(verb, adj, noun) {
//   return `We shall ${verb.toUpperCase()} the ${adj.toUpperCase()} ${noun.toUpperCase()}.`
// }

// console.log(madLib('make', 'best', 'guac'));


function isSubstring(str1, str2) {
  return str1.includes(str2);
}
//
// console.log(isSubstring("time to program", "time"));
// console.log(isSubstring("Jump for joy", "joys"));




// fizzBuzz
// 3 and 5 are magic numbers.
//
// Define a function fizzBuzz(array) that takes an array and returns a new array of every number in the array that is divisible by either 3 or 5, but not both.

function fizzBuzz(arr) {
  var fizzArr = [];

  for (var i = 0; i < arr.length; i++ ) {
    let num = arr[i];
    if (num % 3 === 0 && num % 5 === 0) {
      continue;
    }
    if (arr[i] % 3 === 0 || arr[i] % 5 === 0) {
      fizzArr.push(num);
    }
  }

  return fizzArr;
}

// console.log(fizzBuzz([1, 2, 3, 4, 5, 6, 7, 8, 9, 15, 18]));
// console.log(fizzBuzz([15, 18]));


// isPrime
// Define a function isPrime(number) that returns true if number is prime. Otherwise, false. Assume number is a positive integer.
//

function isPrime(num) {
  if (num < 2) { return false; }

  for (var i = 2; i < num; i++) {
    if (num % i === 0) { return false; }
  }

  return true;
}

console.log(isPrime(2));
console.log(isPrime(10));
console.log(isPrime(15485863));
console.log(isPrime(3548563));
// false
// sumOfNPrimes
// Using firstNPrimes, write a function sumOfNPrimes(n) that returns the sum of the first n prime numbers. Hint: use isPrime as a helper method.

function sumOfNPrimes(n) {
  let numPrimes = 0;
  let sum = 0;
  let i = 2;

  while (numPrimes < n) {
    if (isPrime(i)) {
      numPrimes ++;
      sum += i;
    }

    i++;
  }
  return sum;
}

// console.log(sumOfNPrimes(0));
// // 0
//
// console.log(sumOfNPrimes(1));
// // 2
//
// console.log(sumOfNPrimes(4));
// // 17


// part II

// Write a function titleize that takes an array of names and a function (callback). titleize should use Array.prototype.map to create a new array full of titleized versions of each name - titleize meaning "Roger" should be made to read "Mx. Roger Jingleheimer Schmidt". Then pass this new array of names to the callback, which should use Array.prototype.forEach to print out each titleized name.
//
// > titleize(["Mary", "Brian", "Leo"], printCallback);
// Mx. Mary Jingleheimer Schmidt
// Mx. Brian Jingleheimer Schmidt
// Mx. Leo Jingleheimer Schmidt
// undefined


function titleize(names, callback) {
  let titles = names.map(name => `Mx. ${name} Jingleheimer Schmidt`);
  printCallback(titles);
}

function printCallback(names) {
  names.forEach(name => console.log(name));
}

// titleize(["Mary", "Brian", "Leo"], printCallback);



// First write a constructor function for an elephant. Each elephant should have a name, height (in inches), and array of tricks in gerund form (e.g. "painting a picture" rather than "paint a picture").
//
// Next write a few prototype functions that will be shared among all elephants:
//
// Elephant.prototype.trumpet: should print "(name) the elephant goes 'phrRRRRRRRRRRR!!!!!!!'"
// Elephant.prototype.grow: should increase the elephant's height by 12 inches
// Elephant.prototype.addTrick(trick): add a new trick to their existing repertoire
// Elephant.prototype.play: print out a random trick, e.g. "(name) is (trick)!"
// Hint: look up some JS Math methods!
// Make sure to create an elephant and test all of these functions out on them method style!


function Elephant(name, height, tricks) {
  this.name = name;
  this.height = height;
  this.tricks = tricks;
}

Elephant.prototype.trumpet = function() {
  console.log(`${this.name} goes phrRRRRRRRRRRR!!!!!!!`);
};

Elephant.prototype.grow = function() {
  this.height += 12;
};

Elephant.prototype.play = function() {
  let idx = Math.floor(Math.random() * this.tricks.length);
  console.log(this.tricks[idx]);
};

let ellie = new Elephant("Ellie", 185, ["giving human friends a ride", "playing hide and seek"]);
let charlie = new Elephant("Charlie", 200, ["painting pictures", "spraying water for a slip and slide"]);
let kate = new Elephant("Kate", 234, ["writing letters", "stealing peanuts"]);
let micah = new Elephant("Micah", 143, ["trotting", "playing tic tac toe", "doing elephant ballet"]);

let herd = [ellie, charlie, kate, micah];


// Now let's create a function called paradeHelper that we'll use to have an elephant parade. It should take a single elephant as an argument; this way, we can pass it as a callback to forEach when called on our herd. Make sure to store it as a property on the Elephant object. You can populate it with any console.log statement you want to build your parade (e.g. "_______ is trotting by!").
//
// For example:
//
// > Elephant.paradeHelper(micah);
// Micah is trotting by!
// undefined
// Once you have this function, call forEach on the herd and pass it in as the callback without invoking it. Elephants galore!

// Elephant.prototype.trumpet = function() {
//   console.log(`${this.name} goes phrRRRRRRRRRRR!!!!!!!`);
// };


Elephant.paradeHelper = function(elephant) {
  console.log(`${this.name} is ${this.play}`);
};


// invoking the function
// titleize(["Mary", "Brian", "Leo"], (names) => {
//   names.forEach(name => console.log(name));
// });

// herd.forEach(elephant => Elephant.paradeHelper(elephant));





// Phase IV - Closures

function dinerBreakfast() {
  let order = "I'd like cheesy scrambled eggs please.";
  console.log(order);

  return function (food) {
    order = `${order.slice(0, order.length - 8)} and ${food} please.`;
    console.log(order);
  };
};
