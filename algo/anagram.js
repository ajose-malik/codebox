// Check if two strings are anagram. Expected output is true or false
const string1 = "texttwisttime";
const string2 = "timetwisttext";

// const validAnagram = (string1, string2) => {
// 	// Convert strings to array
// 	const array1 = string1.split("")
// 	const array2 = string2.split("")

// 	const counter1 = {}
// 	const counter2 = {}

// 	// Check if arguments are strings
// 	if (typeof string1 !== "string" || typeof string2 !== "string") {
// 		console.log("Wrong input")
// 		return false
// 	}

// 	// Check if arguments are same length
// 	if (array1.length !== array2.length) {
// 		console.log(false)
// 		return false
// 	}

// 	// Loop through Array1 and count char instances
// 	for (let value of array1) {
// 		counter1[value] = (counter1[value] || 0) + 1
// 	}

// 	// Loop through Array2 and count char instances
// 	for (let value of array2) {
// 		counter2[value] = (counter2[value] || 0) + 1
// 	}

// 	// Check if same char and same number of char exist in each counter
// 	for (let key in counter1) {
// 		// console.log(key)
// 		if (counter1[key] !== counter2[key]) {
// 			console.log(false)
// 			return false
// 		}
// 	}

// 	console.log(true)
// 	return true
// }

// REFACTORED
const validAnagram = (string1, string2) => {
	// Check if arguments are strings
	if (typeof string1 !== "string" || typeof string2 !== "string") {
		console.log("Wrong input");
		return false;
	}

	// Check if arguments are same length
	if (string1.length !== string2.length) {
		console.log(false);
		return false;
	}

	const counter = {};

	// Loop through String1 and count char instances
	for (let value of string1) {
		counter[value] = (counter[value] || 0) + 1;
	}

	// // Check if same char and same number of char exist in each counter
	// for (let i = 0; i < string2.length; i++) {
	// 	const char = string2[i]
	// 	// console.log(key)
	// 	if (!counter[char]) {
	// 		console.log(false)
	// 		return false
	// 	} else {
	// 		counter[char]--
	// 	}
	// }
	console.log(counter);
	console.log(true);
	return true;
};

validAnagram(string1, string2);
