"use strict"

function countVowels(str) {
	str = str.toLowerCase().split("");

	var vowels = "ауоыиэяюёе";

	return str.filter(function(value, index, arr) {
		var letter = String(arr[index]);

		return (vowels.indexOf(letter) !== -1) ? letter : null;
	}).length;														//возвращаем длину массива, длина массива равна к количеству гласных
}

var str = prompt("Напишите строку", 'программист');

console.log("В строке " + "'" + str + "'" + " - " + countVowels(str) + " русских гласных букв");