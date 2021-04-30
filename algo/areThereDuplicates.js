// Check for duplicates; expected output => boolean
const areThereDuplicates = (...arg) => {
	// console.log(arg)
	const counter = {}
	// Add values to counter
	for (let value of arg) {
		counter[value] = (counter[value] || 0) + 1
	}

	// Check if duplicates exist
	for (let key in counter) {
		if (counter[key] !== 1) {
			console.log(true)
			return true
		}
	}
	console.log(false)
	return false
}
areThereDuplicates(1, 2, 3) // false
areThereDuplicates(1, 2, 2) // true
areThereDuplicates("a", "b", "c", "a") // true
