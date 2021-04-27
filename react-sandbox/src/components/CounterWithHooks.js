import React, { useState } from "react"

const CounterWithHooks = ({ initialCount }) => {
	// Use state
	const [state, setState] = useState({ count: initialCount })

	return (
		<>
			<button onClick={() => setState({ count: state.count - 1 })}>-</button>
			<span style={{ padding: "10px" }}>{state.count}</span>
			<button onClick={() => setState({ count: state.count + 1 })}>+</button>
		</>
	)
}

export default CounterWithHooks
