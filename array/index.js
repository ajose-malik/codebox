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

	// Implement pop method
	pop() {
		// Option 1
		delete this.data[this.length - 1]
		this.length--

		// Option 2
		// delete this.data[Object.keys(this.data).length - 1]
		// this.length--
	}
}

const newArray = new myArray()
newArray.push("hello world")
newArray.push("hello Bee")
console.log(newArray.length)
newArray.pop()
console.log(newArray.length)
console.log(newArray.get(0))
