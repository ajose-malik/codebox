// Find the first pair that return sum zero
const sumZero = array => {
	// Check if argument is an array
	if (!Array.isArray(array)) {
		console.log("Wrong input")
		return "Wrong input"
	}

	// Loop through array using the first number in array as checker
	for (let i = 0; i < array.length; i++) {
		const checker = array[0]
		if (checker + array[i] === 0) {
			console.log([checker, array[i]])
			return [checker, array[i]]
		}
	}
	console.log("undefined")
	return "undefined"
}

sumZero([-3, -2, -1, 0, 1, 2, 3]) // Expected output => [-3,3]
sumZero([-2, 0, 1, 3]) // Expected out => undefined
