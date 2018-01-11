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
  var numPrimes = 0;
  var sum = 0;
  var i = 2;

  while (numPrimes < n) {
    if (isPrime(i)) {
      numPrimes ++;
      sum += i;
    }

    i++;
  }
  return sum;
}

console.log(sumOfNPrimes(0));
// 0

console.log(sumOfNPrimes(1));
// 2

console.log(sumOfNPrimes(4));
// 17
