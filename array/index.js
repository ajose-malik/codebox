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

	// Implement shift method
	shift() {
		for (let i = 0; i < this.length - 1; i++) {
			// Set index to item to the right of index
			this.data[i] = this.data[i + 1]
		}
		delete this.data[this.length - 1]
		this.length--
	}
}

const newArray = new myArray()
newArray.push("!")
newArray.push("hello")
newArray.push("you")
newArray.shift()
newArray.push("are")
newArray.push("nice")
newArray.shift()
console.log(newArray)
