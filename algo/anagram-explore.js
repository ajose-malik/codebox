// Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word , phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

const validAnagram = (str1, str2) => {
	// Convert strings to arrays
	const arr1 = str1.split("");
	const arr2 = str2.split("");
	// console.log(arr1, arr2); returns [ 'a', 'a', 'z' ] [ 'z', 'z', 'a' ]

	const counter1 = {};
	const counter2 = {};

	// Check if arguments are strings
	if (typeof str1 !== "string" || typeof str2 !== "string") {
		console.log(false);
		return false;
	}

	// Check length of
	if (arr1.length !== arr2.length) {
		console.log(false);
		return false;
	}

	// Loop through arr1 and count instances of each character
	for (let value of arr1) {
		counter1[value] = (counter1[value] || 0) + 1;
	}
	// Loop through arr2 and count instances of each character
	for (let value of arr2) {
		counter2[value] = (counter2[value] || 0) + 1;
	}

	// console.log(counter1, counter2);

	// Check if same char and same number of char exist in each counter
	for (let key in counter1) {
		if (counter1[key] !== counter2[key]) {
			console.log(false);
			return false;
		}
	}

	console.log(true);
	return true;
};

validAnagram("", ""); // true
validAnagram("aaz", "zza"); // false
validAnagram("anagram", "nagaram"); // true
validAnagram("rat", "car"); // false
validAnagram("awesome", "awesom"); // false
validAnagram("qwerty", "qeywrt"); // true
validAnagram("texttwisttime", "timetwisttext"); // true
