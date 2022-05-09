var button1 = document.querySelector("#button1");
var res1 = document.querySelector("#res1");
var task1 = document.querySelector("#task1");
const eth = {
  usd: 2811,
  rub: 200612,
  eur: 2666,
};

var button2 = document.querySelector("#button2");
var res2 = document.querySelector("#res2");
const arr2 = {
  lang: "JavaScript",
  course: "thrid",
};

var res3 = document.querySelector("#res3");
var button3 = document.querySelector("#button3");
const arr3 = {
  street: "Lenina",
  building: 1,
  flat: 40,
};

var res4 = document.querySelector("#res4");
var button4 = document.querySelector("#button4");
const arr4_1 = {
  name: "ivan",
  age: 23,
};
const arr4_2 = {
  street: "Lenina",
  building: 1,
  flat: 40,
};

function getRate(ethirium) {
  return ethirium[task1.value] + " " + task1.value;
}

function getValues(arr) {
  var keys = Object.values(arr);
  for (var i = 0; i < keys.length; i++) {
    keys[i] = keys[i].toUpperCase();
  }
  return keys;
}

function getInfo(arr) {
  return Object.entries(arr);
}

function joinArr(arr1, arr2) {
  let array = { ...arr1, ...arr2 };
  return array;
}

button1.onclick = function () {
  res1.innerHTML = "Резултат: " + getRate(eth);
};
button2.onclick = function () {
  res2.innerHTML = "Резултат: " + getValues(arr2);
};
button3.onclick = function () {
  res3.innerHTML = "Резултат: " + getInfo(arr3);
};
button4.onclick = function () {
  console.log(joinArr(arr4_1, arr4_2));
};
