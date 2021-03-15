import React, { useState } from "react"
import "../index.css"

const Rules = () => {
	const [rules, setRules] = useState(false)

	return (
		<>
			<button
				className={rules ? "rules-btn btn show" : "rules-btn btn"}
				onClick={() => setRules(!rules)}>
				Show Rules
			</button>
			<div className={rules ? "show rules" : "rules"}>
				<h2>How To Play:</h2>
				<br />
				<h2>
					Use your right and left keys to move the paddle to bounce the ball up
					and break the blocks. If you miss the ball, your score and the blocks
					will reset.
				</h2>
				<br />
				<button className="btn" onClick={() => setRules(!rules)}>
					Close
				</button>
			</div>
		</>
	)
}

export default Rules
