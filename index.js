// Write your solution here!
// create an initial array of cats
const cats = ["Milo", "Otis", "Garfield"];

// append a cat to the end of the array
function destructivelyAppendCat(name) {
cats.push(name);
}

// prepend a cat to the beginning of the array
function destructivelyPrependCat(name) {
cats.unshift(name);
}

// remove the last cat from the array
function destructivelyRemoveLastCat() {
cats.pop();
}

// remove the first cat from the array
function destructivelyRemoveFirstCat() {
cats.shift();
}

// append a cat to the end of the array and return a new array
function appendCat(name) {
const newCats = [...cats, name];
return newCats;
}

// prepend a cat to the beginning of the array and return a new array
function prependCat(name) {
const newCats = [name, ...cats];
return newCats;
}

// remove the last cat from the array and return a new array
function removeLastCat() {
const newCats = cats.slice(0, -1);
return newCats;
}

// remove the first cat from the array and return a new array
function removeFirstCat() {
const newCats = cats.slice(1);
return newCats;
}