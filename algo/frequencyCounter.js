// Check if frequecy exists within two given array. input ([2,5,3], [9,4,25]) => true

const array1 = [1, 2, 3, 2]
const array2 = [9, 1, 4, 4]

const frequencyCounter = (array1, array2) => {
	// Check if arrays have equal length
	if (array1.length !== array2.length) {
		// console.log("Not same length of array")
		return false
	}

	// Compare arrays for frequency
	for (let i = 0; i < array1.length; i++) {
		const correctIndex = array2.indexOf(array1[i] ** 2)

		if (correctIndex === -1) {
			// console.log(false)
			return false
		}
		array2.splice(correctIndex, 1)
	}
	// console.log(true)
	return true
}

frequencyCounter(array1, array2)
