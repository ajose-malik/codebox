// Check if frequecy exists within two given array. input ([2,5,3], [9,4,25]) => true

const array1 = [1, 2, 3, 2]
const array2 = [9, 1, 4, 1]

const frequencyCounter = (array1, array2) => {
	// Check to make sure arrays have similar length
	if (array1.length !== array2.length) {
		return false
	}

	const counter1 = {}
	const counter2 = {}

	// Loop through array1 and if value at index doesn't exist in counter1, set value at index to 1. If value at index exists in counter1, then add 1 to value.
	for (let value of array1) {
		counter1[value] = (counter1[value] || 0) + 1
		// console.log(counter1)
	}

	// Loop through array2 and if value at index doesn't exist in counter2, set value at index to 1. If value at index exists in counter2, then add 1 to value.
	for (let value of array2) {
		counter2[value] = (counter2[value] || 0) + 1
		// console.log(counter2)
	}

	// Check frequency
	for (let key in counter1) {
		if (!(key ** 2 in counter2)) {
			// console.log(false)
			// console.log(key)
			return false
		}

		if (counter2[key ** 2] !== counter1[key]) {
			// console.log(false)
			return false
		}
	}
	return true
}

frequencyCounter(array1, array2)
