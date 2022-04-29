var button1 = document.querySelector('#button1');
var res1 = document.querySelector('#res1');
var arr1 = [4,6,16,73,5];

var button2 = document.querySelector('#button2');
var res2 = document.querySelector('#res2');
var arr2=[1, -3, -2, 4, 10];

var task3 =document.querySelector('#task3');
var res3 = document.querySelector('#res3');
var arr3=["TwilightSparkle", "RainbowDash", "AppleJack", "Rarity", "Pinkie Pie", "Fluttershy"];

var task4 =document.querySelector('#task4');
var res4 = document.querySelector('#res4');
var arr4 =["0xaea0","0x8f80", "0xf3ad", "0x17ec"];

var button5 = document.querySelector('#button5');
var res5 = document.querySelector('#res5');
var arr5=["Moscow","Coding", "School"];

var button6 = document.querySelector('#button6');
var res6 = document.querySelector('#res6');
var arr6=["Moscow","never", "sleep"];

var task7name =document.querySelector('#task7name');
var task7ep =document.querySelector('#task7ep');
var button7 = document.querySelector('#button7');
var res7 = document.querySelector('#res7');

var task8 =document.querySelector('#task8');
var res8 = document.querySelector('#res8');
var button8 = document.querySelector('#button8');

var res9 = document.querySelector('#res9');
var button9 = document.querySelector('#button9');
var arr9=[5.4, 8.1, 6.3, 4.9];

function sumArray(array){
    var sum=0;
    array.forEach(function(num){
        sum=parseInt(sum)+parseInt(num);
    });
    return parseInt(sum);
}

function getAboveZero(array){
    let plusarrays = array.filter(function(num){
		return parseInt(num) > 0;
	});
	return plusarrays;
}
function getPonies(array, poni) {
	let pon = array.filter(function(ponis){
		return ponis == poni;
	});
	return pon;
}
function isTxIncluded(array,code){
    let some=array.includes(code);
    return some;
}
function getSizes(array){
    let arr = array.map(function(word){
		return word.length
	});
	return arr;
}
function getWithSpace(array){
    var sum=0;
    array.forEach(function(word){
        sum=parseInt(sum)+parseInt(word.length);
    
    });
    var text=[array.join(" "),parseInt(sum)];
    return text;
}
function getEpisodes(name = 'task7name', episode = 'task7ep'){
    return `Аниме : ${name} включает: ${episode} серий`
}
const triple = (num)=>{
    return parseInt(num)*3
}
const getAvgGlucose=(array)=>{
    var sum=0;
    array.forEach(function(num){
        sum=sum+num;
        console.log(sum)
    });
    sum=sum/array.length;
    return Math.ceil(sum*10)/10;
}
button1.onclick = function(){
    res1.innerHTML="Резултат: "+ (sumArray(arr1));
    
}
button2.onclick = function(){
    res2.innerHTML="Резултат: "+getAboveZero(arr2);
}
task3.addEventListener("input", () => {
	res3.innerHTML = "Ваш результат: " + getPonies(arr3, task3.value);
})
task4.addEventListener("input", () => {
	res4.innerHTML = "Ваш результат: " + isTxIncluded(arr4, task4.value);
})
button5.onclick = function(){
    res5.innerHTML="Резултат: "+ getSizes(arr5);
}
button6.onclick = function(){
    res6.innerHTML="Резултат: "+ getWithSpace(arr6);
}
button7.onclick = function(){
    res7.innerHTML="Резултат: "+ getEpisodes(task7name.value,task7ep.value);
}
button8.onclick = function(){
    res8.innerHTML="Резултат: "+ triple(task8.value);
}
button9.onclick = function(){
    res9.innerHTML="Резултат: "+ getAvgGlucose(arr9);
}