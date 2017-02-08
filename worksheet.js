// PART 0: Write a function called squareDance() that squares each number in an array.
var squareDance = function(array) {
	var squared = []
	for (var i = 0; i < array.length; i++) {
		squared[i] = (array[i]**2)
	}
	return squared
}

// PART 1: write a function called nicer(). 
// It should clean up the language in its input sentence. 
// Forbidden words include heck, dang, crappy, and dang.
var nicer = function(input) {
	var badArray = input.split(" ")
	var niceString = ""
	for(var i = 0; i < badArray.length; i++) {
		if (badArray[i] != 'heck' && badArray[i] != 'dang' && badArray[i] != 'crappy' && badArray[i] != 'darn' && i === (badArray.length-1)) {
			niceString += badArray[i]
		}
		else if (badArray[i] != 'heck' && badArray[i] != 'dang' && badArray[i] != 'crappy' && badArray[i] != 'darn') {
			niceString += (badArray[i] + " ")
		}
	}
	return niceString
}

// // PART 2: write a function called capitalizeAll(). 
// It should take as input a sentence and capitalize the first letter
// of every word in the sentence. 
var capitalizeWord = function(word) {
	var capWord = word[0].toUpperCase() + word.substring(1)
    return capWord
}

var capitalizeAll = function(sentence) {
	var splitArray = sentence.split(' ')
	var capSentence = ''
	for (var i = 0; i < splitArray.length; i++) {
		if (i === (splitArray.length-1)) {
			capSentence += capitalizeWord(splitArray[i])
		}
		else {
			capSentence += (capitalizeWord(splitArray[i]) + " ")
		}
	}
	return capSentence
}


// // PART 3: write a function called properSentences(). It should take as input a string and capitalize the first letter of every sentence in that string. (For our purposes, all sentences will end with periods. Write one that works with ? and ! and receive a gratifying high five, right on the hand!)
var properSentences = function(sentence) {
	var splitSen = sentence.split(". ")
	var prop = ''
	for (var i = 0; i < splitSen.length; i++) {
		if (i === (splitSen.length-1)) {
			prop += capitalizeWord(splitSen[i])
		}
		else {
			prop += (capitalizeWord(splitSen[i]) + ". ")
		}
	}
	return prop
}

// // PART 4: write a function called iPutTheFunIn(). It should take a string as input. The output should be a copy of the original string with the word 'fun' inserted into the center of the string. 
var iPutTheFunIn = function(string) {
	var funString = (string.substring(0,Math.floor(string.length/2)) + "fun" + string.substring(Math.floor(string.length/2)))
	return funString
}

// // HARD MODE

// // PART 5: write a function called split(). it should take two inputs: (1) a string and (2) a delimiter

// // obviously, you may not use the native .split() method. your task here is to reverse-engineer .split() and write your own. 
var split = function(string,delimiter) {
	var holderString = ''
	var splitArray = []
	for (var i = 0; i < string.length; i++) {
		if (string[i] != delimiter) {
			holderString += string[i]
		}
		else {
			splitArray.push(holderString)
			holderString = ''
		}
	}
	return splitArray
}

// // PART 6: write a function called pipeline(). it should take three inputs: (1) a starting value, (2) a function, and (3) another function. it should use functions (2) and (3) on the starting value, one after the other, and return a new value that has been processed by both function (2) and function (3).

// // visit test.js to see the tests that will be run against your code.

var pipeline = function(input,func1,func2) {
	var halfWay = func1(input)
	var finished = func2(halfWay)
	return finished
}







