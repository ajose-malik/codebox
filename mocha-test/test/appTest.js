const assert = require("chai").assert
// const sayHello = require("../app").sayHello
// const addNumbers = require("../app").addNumbers
const app = require("../app")

describe("App", () => {
	describe("sayHelloFunc", () => {
		it("sayHelloFunc should return hello", () => {
			let result = app.sayHello()
			assert.equal(result, "hello")
		})

		it("sayHelloFunc should return type string", () => {
			let result = app.sayHello()
			assert.typeOf(result, "string")
		})
	})

	describe("addNumbersFunc", () => {
		it("addNumbers should be above 5", () => {
			let result = app.addNumbers(8, 5)
			assert.isAbove(result, 7)
		})

		it("addNumbers should return type number", () => {
			let result = app.addNumbers(8, 5)
			assert.typeOf(result, "number")
		})
	})
})
