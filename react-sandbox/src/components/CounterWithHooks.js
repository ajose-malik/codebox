import React, { useState } from "react"

const CounterWithHooks = ({ initialCount }) => {
	// Use state
	const [count, setCount] = useState(initialCount)

	return (
		<>
			<button onClick={() => setCount(count - 1)}>-</button>
			<span style={{ padding: "10px" }}>{count}</span>
			{/* Using callback to grab previous state*/}
			<button onClick={() => setCount(prevState => prevState + 1)}>+</button>
		</>
	)
}

export default CounterWithHooks
