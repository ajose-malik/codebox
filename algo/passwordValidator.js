// Write a isValidPassword function
// It accepts 2 arguments: password and username
// Password must:
//    - Be at least 8 characters
//    - Contains no space
//    - Cannot contain the username
// If all requirements are met return "true" else "false"

// isValidPassword('7hiwgidw9', 'catfan') // true
// isValidPassword('catfan7382', 'catfan') // false
// isValidPassword('an7382', 'catfan') // false

const isValidPassword = (password, username) => {
	// Check if password length
	if (password.length < 8) {
		console.log(false)
		return false
	}

	// Check if password contains space
	if (password.indexOf(" ") !== -1) {
		console.log(false)
		return false
	}

	// Check if password contains username
	if (password.includes(username)) {
		console.log(false)
		return false
	}

	// If above if statements are false then return true
	console.log(true)
	return true
}

isValidPassword("7hiwgidw9", "catfan") // true
isValidPassword("catfan7382", "catfan") // false
isValidPassword("an7382", "catfan") // false
