// Find the first pair that return sum zero
// const sumZero = array => {
// 	// Check if argument is an array
// 	if (!Array.isArray(array)) {
// 		console.log("Wrong input")
// 		return "Wrong input"
// 	}

// 	// Loop through array using the first number in array as checker
// 	for (let i = 0; i < array.length; i++) {
// 		const checker = array[0]
// 		if (checker + array[i] === 0) {
// 			console.log([checker, array[i]])
// 			return [checker, array[i]]
// 		}
// 	}
// 	console.log("undefined")
// 	return "undefined"
// }

// OPTION #2
const sumZero = array => {
	// Check if argument is an array
	if (!Array.isArray(array)) {
		console.log("Wrong input")
		return "Wrong input"
	}

	// Set two pointers in array for faster output
	let left = 0
	let right = array.length - 1

	// Loop through array with pointers and check sum
	while (left < right) {
		const sum = array[left] + array[right]
		if (sum === 0) {
			console.log([array[left], array[right]])
			return [array[left], array[right]]
		} else if (sum > 0) {
			right--
		} else {
			left++
		}
	}
}

sumZero([-3, -2, -1, 0, 1, 2, 3]) // Expected output => [-3,3]
sumZero([-2, 0, 1, 3]) // Expected out => undefined
