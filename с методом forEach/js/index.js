"use strict"

function countVowels(str) {
	str = str.toLowerCase().split("");

	var vowels = "ауоыиэяюёе",
		count = 0;

	str.forEach(function(value, index, arr) {
		var letter = String(arr[index]);
		
		if (vowels.indexOf(letter) !== -1) {
			count++;
		}
	});

	return count;
}

var str = prompt("Напишите строку", 'программист');

console.log("В строке " + "'" + str + "'" + " - " + countVowels(str) + " русских гласных букв");