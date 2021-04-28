import React, { useState, createContext } from "react"
import CounterWithClass from "./CounterWithClass"
import CounterWithHooks from "./CounterWithHooks"
// import FormInput from "./FormInput"

// Set up React context
export const ThemeContext = createContext()

const App = () => {
	const [theme, setTheme] = useState("red")

	return (
		<ThemeContext.Provider value={{ backgroundColor: theme }}>
			<h1>CounterWithClass</h1>
			<CounterWithClass initialCount={0} />

			<h1>CounterWithHooks</h1>
			<CounterWithHooks initialCount={0} />
			<button
				onClick={() =>
					setTheme(prevTheme => (prevTheme === "red" ? "blue" : "red"))
				}>
				Toggle Theme
			</button>
			{/* <FormInput /> */}
		</ThemeContext.Provider>
	)
}

export default App
