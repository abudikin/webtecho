var button1 = document.querySelector('#button1');
var task1 =document.querySelector('#task1');
var res1 = document.querySelector('#res1');

var button2 = document.querySelector('#button2');
var task21 = document.querySelector('#task21');
var task22 = document.querySelector('#task22');
var res2 = document.querySelector('#res2');

var button3 = document.querySelector('#button3');
var task3 =document.querySelector('#task3');
var res3 = document.querySelector('#res3');

var button4 = document.querySelector('#button4');
var task4 =document.querySelector('#task4');
var res4 = document.querySelector('#res4');

var button5 = document.querySelector('#button5');
var task5 =document.querySelector('#task5');
var res5 = document.querySelector('#res5');

function getAge(arg1){
    return parseInt(arg1)+1;
}
function Remainder(first,second){
    if (first.length>0 && second.length>0){
        return parseInt(first)%parseInt(second)
    }else{
        return 0;
    }
}
function FaceControl(age){
    if(parseInt(age)>=18){
        return "Welcome!"
    }else return "Отказ"
}

function getNextAge(age){
    if(parseInt(age)>=0){
        return parseInt(age)+1;
    }else return 0;
}
function canRide(arg2){
	let h = parseInt(arg2);
	return h >= 140;
}

button1.onclick = function(){
    res1.innerHTML="Резултат: "+getAge(task1.value);
}
button2.onclick = function(){
    res2.innerHTML="Резултат: "+Remainder(task21.value,task22.value);
}
button3.onclick = function(){
    res3.innerHTML="Резултат: "+FaceControl(task3.value);
}
button4.onclick = function(){
    res4.innerHTML="Резултат: "+getNextAge(task4.value);
}
button5.onclick = function(){
    res5.innerHTML="Резултат: "+canRide(task5.value);
}