// Given an array of integers, return the indices of the two numbers that add up to a given target?

const target = 13
const array = [1, 3, 7, 9, 2]

const findTwoSum = () => {
	for (let p1 = 0; p1 < array.length; p1++) {
		for (let p2 = 1; p2 < array.length; p2++)
			if (array[p1] + array[p2] === target) {
				console.log([p1, p2])
			}
	}
	// console.log("none found")
}

findTwoSum()

// // Traverse the array
// // Set pointer, check if any subsequent value in array is equal to target when added to value at current pointer

// let pointer0 = 0
// let pointer1 = 1

// const incrementPointers = () => {
// 	pointer0++
// 	pointer1++
// 	twoSum()
// }

// const twoSum = () => {
// 	if (pointer0 < array.length) {
// 		for (let i = pointer1; i < array.length; i++) {
// 			if (array[pointer0] + array[i] === target) {
// 				console.log([pointer0, i])
// 				break
// 			} else if (array[pointer0] + array[i] !== target) {
// 				incrementPointers()
// 			}
// 		}
// 	}
// }

// twoSum()

// let pointer = 0
// let i
// const twoSum = () => {
// 	for (i = 1; i < array.length; i++) {
// 		if (array[pointer] + array[i] === target) {
// 			console.log([i, pointer])
// 			break
// 		} else if (pointer < array.length - 1) {
// 			pointer++
// 			i++
// 			return twoSum()
// 		} else {
// 			console.log("none found")
// 		}
// 	}
// }

// twoSum()

// const twoSum = () => {
// 	let pointer = 0
// 	let i
// 	for (i = 1; i < array.length; i++) {
// 		if (array[pointer] + array[i] === target) {
// 			console.log([pointer, i])
// 		}
// 		pointer++
// 		console.log("here" + pointer)
// 	}
// 	console.log("none found")
// }

// twoSum()
