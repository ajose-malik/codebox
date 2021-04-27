//  Check maximum sum of numbers in array
const maxSubArraySum = (arr, num) => {
	// check if number is greater than array length
	if (arr.length < num) return null

	let maxSum = 0
	let tempSum = 0

	// Add up values in array based on the num argument
	for (let i = 0; i < num; i++) {
		maxSum += arr[i]
	}

	tempSum = maxSum
	// Loop through array, sum values in array based on i, and compare tempSum to maxSum and set largest value to maxSum
	for (let i = num; i < arr.length; i++) {
		tempSum = tempSum - arr[i - num] + arr[i]
		maxSum = Math.max(maxSum, tempSum)
	}
	console.log(maxSum)
	return maxSum
}

maxSubArraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3) // expected output => 19
// maxSubArraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 2) // expected output => 15
// maxSubArraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 20) // expected output => null
