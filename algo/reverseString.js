// Create a function that reverse string

const stringToConvert = "kilaM si eman ym iH"

const reverseString = str => {
	// Check for edge cases
	if (!str || str.length < 2 || typeof str !== "string") {
		console.log("bad input")
	}

	const result = []
	// Loop through string backwards and push character at each index
	for (let i = str.length - 1; i >= 0; i--) {
		result.push(str[i])
	}

	// Join all characters
	console.log(result.join(""))
}

reverseString(stringToConvert)
