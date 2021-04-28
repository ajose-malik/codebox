// Write a function called sameFrequency. Given two positive numbers, find out if the two numbers have the same frequency of digits. Expected output is boolean.

const sameFrequency = (num1, num2) => {
	// Check if arguments are numbers.
	if (typeof num1 !== "number" || typeof num2 !== "number") {
		// console.log("Wrong input")
		return false
	}

	// Check if argument has same length.
	if (num1.toString().length !== num2.toString().length) {
		// console.log("Arguments are not the same length")
		return false
	}

	// Convert numbers to strings then to an array.
	const num1Array = Array.from(String(num1), Number)
	const num2Array = Array.from(String(num2), Number)

	// Loop through num1Array and add values to counter.
	const counter1 = {}
	for (let value of num1Array) {
		counter1[value] = (counter1[value] || 0) + 1
	}

	// Loop through num1Array and add values to counter.
	const counter2 = {}
	for (let value of num2Array) {
		counter2[value] = (counter2[value] || 0) + 1
	}

	// Check if each value in numArray2 exists in counter. If so decrement corresponding key in counter.
	for (let key in counter1) {
		// Check if key exist in counter2
		if (!(key in counter2)) {
			return false
		}
		// Check if both keys have same value
		if (counter1[key] !== counter2[key]) {
			return false
		}
	}

	console.log(true)
	return true
}

sameFrequency(182, 281) // Expect => true
// sameFrequency(34, 14) // Expect => false
// sameFrequency(3589578, 5879385) // Expect => true
// sameFrequency(22, 222) // Expect => false
