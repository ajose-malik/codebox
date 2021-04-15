import faker from "faker"

// Define User class
export class User {
	name: string
	location: {
		lat: number
		lng: number
	}

	// Initiate User properties
	constructor() {
		this.name = faker.name.firstName()
		this.location = {
			lat: parseFloat(faker.address.latitude()),
			lng: parseFloat(faker.address.longitude())
		}
	}
}
