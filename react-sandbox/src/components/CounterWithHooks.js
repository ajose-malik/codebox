import React, { useState, useContext } from "react"
import { ThemeContext } from "./App"

const CounterWithHooks = ({ initialCount }) => {
	const [count, setCount] = useState(initialCount)

	// Consume ThemeContext with useContext
	const style = useContext(ThemeContext)

	return (
		<>
			<button style={style} onClick={() => setCount(count - 1)}>
				-
			</button>
			<span style={{ padding: "10px" }}>{count}</span>
			{/* Using callback to grab previous state*/}
			<button
				style={style}
				onClick={() => setCount(prevState => prevState + 1)}>
				+
			</button>
		</>
	)
}

export default CounterWithHooks
