const oldCivic = {
	name: "civic",
	year: 2000,
	broken: true
}

interface Vehicle {
	name: string
	year: number
	broken: boolean
}

const printVehicle = (vehicle: Vehicle) => {
	console.log(`Name: ${vehicle.name}`)
	console.log(`Year: ${vehicle.year}`)
	console.log(`Broken: ${vehicle.broken}`)
}

printVehicle(oldCivic)
