class myArray {
	constructor() {
		this.length = 0
		this.data = {}
	}

	// Get data by index
	get(index) {
		return this.data[index]
	}

	// Implement push method
	push(item) {
		this.data[this.length] = item
		this.length++
	}
}

const newArray = new myArray()
newArray.push("hello world")
// console.log(myArray.length)
console.log(newArray.get(0))
