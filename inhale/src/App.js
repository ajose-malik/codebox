import React, { useState, useEffect } from "react"
import { Orbiter } from "./components/Orbiter"
import { Circle } from "./components/Circle"
import "./App.css"

const App = () => {
	const [state, setState] = useState("")

	const totalTime = 7500
	const activeTime = (totalTime / 5) * 2
	const holdTime = totalTime / 5

	useEffect(() => {
		const animate = () => {
			setState("Inhale")
			setTimeout(() => {
				setState("Hold")

				setTimeout(() => {
					setState("Exhale")
				}, holdTime)
			}, activeTime)
		}
		animate()
		setInterval(animate, totalTime)
	}, [activeTime, holdTime])

	return (
		<div
			className={
				state === "Inhale"
					? "container shrink"
					: state === "Exhale"
					? "container grow"
					: state === "Hold"
					? "container"
					: "container"
			}>
			<Circle state={state} />
			<Orbiter />
		</div>
	)
}

export default App
