// Check if frequecy exists within two given array. input ([2,5,3], [9,4,25]) => true

const array1 = [1, 2, 3, 2]
const array2 = [9, 1, 4, 4]
// const array2 = [5, 6, 10, 14]

// const frequencyCounter = (array1, array2) => {
// 	// Check if arrays have equal length
// 	if (array1.length !== array2.length) {
// 		// console.log("Not same length of array")
// 		return false
// 	}

// 	// Compare arrays for frequency
// 	for (let i = 0; i < array1.length; i++) {
// 		const correctIndex = array2.indexOf(array1[i] ** 2) // IndexOf performs a loop

// 		if (correctIndex === -1) {
// 			// console.log(false)
// 			return false
// 		}
// 		array2.splice(correctIndex, 1)
// 	}
// 	// console.log(true)
// 	return true
// }

// frequencyCounter(array1, array2)

// // Result is O(n2)

// REFACTORED
const frequencyCounter = (array1, array2) => {
	// Check if arrays are same length
	if (array1.length !== array2.length) {
		console.log(false)
		return false
	}

	let counter1 = {}
	let counter2 = {}

	// Loop through array1 and add values to counter1
	for (let value of array1) {
		counter1[value] = (counter1[value] || 0) + 1
		// expected output for counter 1 => {1:1, 2:2, 3:1}
	}

	// Loop through array2 and add values to counter2
	for (let value of array2) {
		counter2[value] = (counter2[value] || 0) + 1
		// expected output for counter 2 => {9:1, 1:1, 4:2}
	}

	// Check for frequency
	for (key in counter1) {
		if (!(key ** 2 in counter2)) {
			return false
		}

		if (counter1[key] !== counter2[key ** 2]) {
			return false
		}

		console.log(counter1[key], counter2[key ** 2])
	}

	console.log(true)
	return true
}

frequencyCounter(array1, array2)
