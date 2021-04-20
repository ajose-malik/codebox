var add = require("add"),
	evil = [
		0.1,
		0.2,
		0.3,
		0.4,
		0.5,
		0.6,
		0.7,
		0.8,
		0.9,
		1.0,
		1.1,
		1.2,
		1.3,
		1.4,
		1.5,
		1.6,
		1.7
	]

const dumbsum = (a, b) => {
	return a + b
}

// console.log([1, 2, 3].reduce(dumbsum))
// console.log(evil)
// console.log(evil.reduce((a, b) => a + b))

console.log(evil.reduce(dumbsum)) // => 15.299999999999999

console.log(add(evil)) // => 15.3
