class Vehicle {
	drive(): void {
		console.log("vroom")
	}
	honk(): void {
		console.log("hoink")
	}
}

const buggy = new Vehicle()

console.log(buggy.drive(), buggy.honk())
