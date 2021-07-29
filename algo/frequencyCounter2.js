// Check if frequency exists within two given array. input ([2,5,3], [9,4,25]) => true

const array1 = [1, 2, 3, 2];
const array2 = [9, 1, 4, 4];

const frequencyCounter2 = (array1, array2) => {
	// Check if both arrays have same length
	if (array1.length !== array2.length) {
		console.log(false);
		return false;
	}

	counterArray1 = {};
	counterArray2 = {};

	// Loop through array1 and add counter1
	for (let value of array1) {
		counterArray1[value] = (counterArray1[value] || 0) + 1;
	}

	// Loop through array1 and add counter2
	for (let value of array2) {
		counterArray2[value] = (counterArray2[value] || 0) + 1;
	}

	// Check for frequency
	for (let key in counterArray1) {
		if (!(key ** 2 in counterArray2)) {
			console.log(false);
			return false;
		}

		if (counterArray1[key] !== counterArray2[key ** 2]) {
			console.log(false);
			return false;
		}

		console.log(counterArray1[key], counterArray2[key ** 2]);
	}

	console.log(true);
	return true;
};

frequencyCounter2(array1, array2);
