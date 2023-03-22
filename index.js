let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat() {
  return cats.push("Ralph");
}

function destructivelyPrependCat() {
  return cats.unshift("Bob");
}

function destructivelyRemoveLastCat() {
  return cats.pop();
}

function destructivelyRemoveFirstCat() {
  return cats.shift();
}

function appendCat() {
  let newCats = [...cats, "Broom"];
  return newCats;
}

function prependCat() {
  let newCats = ["Arnold", ...cats];
  return newCats;
}

function removeLastCat() {
  let newCats = cats.slice(0, -1);
  return newCats;
}

function removeFirstCat() {
  let newCats = cats.slice(1);
  return newCats;
}