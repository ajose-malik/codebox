import React, { useState } from "react"

const Counter = () => {
	const [count, setCount] = useState(0)

	return (
		<>
			<h3>Count is {count}</h3>
			<button onClick={() => setCount(count + 1)}>count-up</button>
		</>
	)
}

export default Counter
