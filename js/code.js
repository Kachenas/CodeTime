
function typeName (name) {
    return name;
}

function displayNumber(arrLength) {
    let arr = [];
    for (let index = 0; index < arrLength; index++) {
        arr[index] = index;
    }
    return arr;
}
//console.log(displayNumber(20));

function oddEven (number) {
    if (number % 2 == 0) {
        console.log("number is even");
    } else {
        console.log("number is odd");
    }
}

function increment (counter) {
    //console.log(counter++);
    console.log(++counter);
    
}

function showMessage(from, text) {

  from = '*' + from + '*'; // make "from" look nicer

  console.log( from + ': ' + text );
}

let success = 'congrats';

// console.log(oddEven(1));
// console.log(2 + 2 + '1');
// console.log('2' + 2 + '1');
// console.log('2' + 2 + 1);
console.log(increment(18));
console.log(null == 0); 
console.log(success == 'congrats' ? 'hello' : 'hi');
if ("0") {
  console.log( 'javascript is cool' );
}

answer = 'ECMASCRIPT';
if (answer == 'ECMASCRIPT') {
    console.log('You know Javascript');
} else {
    console.log('You dont know Javascript');
}

console.log("==================");
console.log((null || 2 || undefined));
console.log((1 && null && 2));

let browser = 'Chrome';
if (browser == 'Chrome' || browser == 'Firefox' || browser == 'Safari' || browser == 'Opera') {
    console.log('we support these browsers');
} else {
    console.log('try getting the browser');
}

console.log("==================");

let from = "Ann";

console.log(showMessage(from, "Hello"));

console.log("==================");

function showPrimes(primeNumber) {

  for (let i = 2; i < primeNumber; i++) {
    if (!isPrime(i)) continue;
    console.log(i);  // a prime
  }
}

function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if ( n % i == 0) return false;
  }
  return true;
}

console.log(showPrimes(5));

console.log("==================");

function sayHi() {    //line 1
    return "Hello";
};

let func = sayHi;    //line 2

console.log(func()); 
console.log(sayHi()); 
/* 
 1. The Function Declaration (1) creates the function and puts it into the variable named sayHi.
 2. Line (2) copies it into the variable func. 
 Please note again: there are no parentheses after sayHi. 
 If there were, then func = sayHi() would write the result of the call sayHi() into func, 
 not the function sayHi itself.
*/

console.log("==================");

let user = {     // an object
  name: "John",  // by key "name" store value "John"
  age: 30        // by key "age" store value 30
};

console.log(user.name);
console.log(user.age);

let sayMyName = function () {
  return "Chester";
};

console.log(sayMyName());

//sample arrow function
let sayAge = (age,name) => {
  console.log(`Age is ${age}` + ` Name is ${name}`);
};

sayAge(20, "chester");

let ask = (question, yes, no) => {
  if (confirm(question)) {
    return "agreed";
  } else {
    return "not agreed";
  }
}

console.log(ask("UNderstand","yes","no"))