import React, { useState } from "react"

const Counter = () => {
	// Set state
	const [number, setNumber] = useState(0)

	// Handle change
	const handleChange = value => {
		if (value === "+") setNumber(number + 1)
		if (value === "-") setNumber(number - 1)
	}
	return (
		<>
			<button onClick={() => handleChange("-")}>-</button>
			<h4 style={{ display: "inline", padding: "10px" }}>{number}</h4>
			<button onClick={() => handleChange("+")}>+</button>
		</>
	)
}

export default Counter
