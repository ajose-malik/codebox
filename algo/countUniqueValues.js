// FIND UNIQUE VALUE IN SORTED ARRAY

// const countUniqueValues = array => {
// 	// Check if argument is array
// 	if (!Array.isArray(array)) {
// 		console.log("Wrong input")
// 		return "Wrong input"
// 	}

// 	const counter = {}
// 	// Loop through array and add unique numbers to counter
// 	for (let value of array) {
// 		counter[value] ? counter[value] : (counter[value] = 1)
// 	}

// 	console.log(Object.keys(counter).length)
// 	return Object.keys(counter).length
// }

const countUniqueValues = array => {
	// Check if argument is array
	if (!Array.isArray(array)) {
		console.log("Wrong input")
		return "Wrong input"
	}

	if (array.length === 0) {
		console.log(0)
		return 0
	}

	let left = 0
	let right = array.length - 1

	const counter = {}
	// Check each end of array and unique numbers to counter
	while (left < right) {
		counter[array[left]] = (counter[array[left]] || 0) + 1
		counter[array[right]] = (counter[array[right]] || 0) + 1
		left++
		right--
	}
	console.log(Object.keys(counter).length)
	return Object.keys(counter).length
}

countUniqueValues([1, 1, 1, 1, 1, 2]) // Expected output => 2
countUniqueValues([1, 2, 3, 4, 4, 4, 4, 7, 7, 7, 7, 12, 13]) // Expected output => 7
countUniqueValues([]) // Expected output => 0
countUniqueValues([-2, -1, -1, 0, 1]) // Expected output => 4
