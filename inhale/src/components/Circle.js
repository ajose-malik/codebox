import React from "react"
import "./CircleStyles.css"

export const Circle = ({ state }) => {
	return (
		<>
			<div className="circle"></div>
			<div className="gradient-circle"></div>
			<p>{state}</p>
		</>
	)
}
