import React, { useState } from "react"

const FormInput = () => {
	const [inputState, setinputState] = useState("")

	const handleChange = value => {
		setinputState(value)
	}
	return (
		<>
			<input
				type="text"
				onChange={e => handleChange(e.target.value)}
				style={{ display: "block", marginTop: "20px" }}
			/>
			<p>{inputState}</p>
		</>
	)
}

export default FormInput
