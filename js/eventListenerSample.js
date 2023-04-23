let clickBTN = document.getElementById("clickeMe");
let nameDiv = document.getElementById("name");

clickBTN.addEventListener('click', hello);

function hello () {
    nameDiv.innerHTML = "New text!";
}

let anime = {
    "name": "naruto",
    "anime": "shippuden",
    "genre": "anime",
}

for (const key in anime) {
    console.log(key);
}

console.log(anime.name);
console.log(anime['anime']);

let user = {
    name: "Chester"
}

let num = 0.128;
console.log(typeof(+num.toFixed(2)));

//alert( 7.3e9 );  // 7.3 billions (same as 7300000000 or 7_300_000_000)
//let mcs = 1e-6; // five zeroes to the left from 1

//alert( num.toString(16) );  // ff
//alert( num.toString(2) );   // 11111111

let str = 'As sly as a fox, as strong as an ox';

let target = 'as'; // let's look for it

let pos = 0;
while (true) {
  let foundPos = str.indexOf(target, pos);
  if (foundPos == -1) break;

  console.log( `Found at ${foundPos}` );
  pos = foundPos + 1; // continue the search from the next position
}