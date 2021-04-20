// Merge sort /////////////////////////

const mergeSortedArrays = (array1, array2) => {
	const result = []
	let array1AtIndex = array1[0]
	let array2AtIndex = array2[0]
	let i = 1
	let j = 1

	// Define edge cases ////////////
	if (array1.length === 0) {
		return array2
		// console.log(array2)
	}

	if (array2.length === 0) {
		return array1
		// console.log(array1)
	}

	// Merge both arrays ///////////
	while (array1AtIndex || array2AtIndex) {
		if (!array2AtIndex || array1AtIndex < array2AtIndex) {
			result.push(array1AtIndex)
			array1AtIndex = array1[i]
			i++
		} else {
			result.push(array2AtIndex)
			array2AtIndex = array2[j]
			j++
		}
	}

	console.log(result)
}

mergeSortedArrays([5, 23, 245, 834], [3, 4, 9, 123])
