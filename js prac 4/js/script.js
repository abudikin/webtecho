var button1 = document.querySelector("#button1");
var res1 = document.querySelector("#res1");
var task1 = document.querySelector("#task1");

var button2 = document.querySelector("#button2");
var res2 = document.querySelector("#res2");
var task2 = document.querySelector("#task2");

var task3 = document.querySelector("#task3");
var res3 = document.querySelector("#res3");
var button3 = document.querySelector("#button3");

var task4 = document.querySelector("#task4");
var res4 = document.querySelector("#res4");
var button4 = document.querySelector("#button4");

var button5 = document.querySelector("#button5");
var res5 = document.querySelector("#res5");
var arr5 = [
  ["Bitcoin", 40468],
  ["Ethereum", 3005],
  ["Solana", 106],
  ["Tether", 1],
];

var button6 = document.querySelector("#button6");
var res6 = document.querySelector("#res6");
var arr6 = [4, 2, 3, 5];
//var arr6 = [5,4,3,4];

var button7 = document.querySelector("#button7");
var res7 = document.querySelector("#res7");
var arr7 = ["moderator", "user", "admin"];

var res8 = document.querySelector("#res8");
var button8 = document.querySelector("#button8");
var arr8 = [504, 503, 807];

var res9 = document.querySelector("#res9");
var button9 = document.querySelector("#button9");
var arr9 = ["Артур", 21];

var res10 = document.querySelector("#res10");
var button10 = document.querySelector("#button10");
var arr10_1 = ["Save","Money"];
var arr10_2 = ["Live","Better"];

function getNickName(name) {
  if (name.startsWith("@")) return name;
  else return "@" + name;
}

function getCurrency(money) {
  if (money.includes("$")) return "Доллар";
  else if (money.includes("€")) return "Евро";
  else return "Недоступно";
}

function getSlug(title) {
  let count = 0;
  title = title.toLowerCase();
  let slug = "";
  for (var i = 0; i < title.length; i++) {
    if (count < 15) {
      slug = slug + title[i];
    }
    count++;
  }
  return slug.replace(" ", "-");
}

function getTodosNumber(title) {
  let count = 0;
  for (var i = 0; i < title.length; i++) {
    if (title[i] == ",") count++;
  }
  if (title.endsWith(",") == true) count--;
  if (title.length > 0 && count >= 0) count++;
  return count;
}

function renderTableRows(array) {
  let str = "";
  for (let i = 0; i < array.length; i++) {
    str = str + `<tr><td>${array[i][0]}</td><td>${array[i][1]}</td></tr>`;
  }
  return str;
}

function notAnExcellent(array) {
  const mark = array.some((mrk) => mrk < 3);
  return mark;
}

function deleteUserRole(array) {
  array.splice(0, 1);
  return array;
}

function multiply(array) {
  let sum = 0;
  if (array.length > 0) {
    sum = 1;
    for (var i = 0; i<array.length; i++) {
      sum = array[i] * sum;
    }
  }
  return sum;
}

function getUserInfo(array){
    var [name, age]=array;
    return `Пользователю ${name} - ${age} лет`;
}

function joinArrays(arr1,arr2){
    var array=[...arr1, ...arr2];
    return array;
}

button1.onclick = function () {
  res1.innerHTML = "Резултат: " + getNickName(task1.value);
};
button2.onclick = function () {
  res2.innerHTML = "Резултат: " + getCurrency(task2.value);
};
button3.onclick = function () {
  res3.innerHTML = "Резултат: " + getSlug(task3.value);
};
button4.onclick = function () {
  res4.innerHTML = "Резултат: " + getTodosNumber(task4.value);
};
button5.onclick = function () {
  res5.innerHTML = "Резултат: " + renderTableRows(arr5);
  console.log("задание 5 " + renderTableRows(arr5));
};
button6.onclick = function () {
  res6.innerHTML = "Резултат: " + notAnExcellent(arr6);
};
button7.onclick = function () {
  res7.innerHTML = "Резултат: " + deleteUserRole(arr7);
};
button8.onclick = function () {
  res8.innerHTML = "Резултат: " + multiply(arr8);
};
button9.onclick = function () {
  res9.innerHTML = "Резултат: " + getUserInfo(arr9);
};
button10.onclick = function () {
    res10.innerHTML = "Резултат: " + joinArrays(arr10_1,arr10_2);
  };
