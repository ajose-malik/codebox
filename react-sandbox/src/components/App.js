import React, { Component } from "react"
// import CounterWithClass from "./CounterWithClass"
import CounterWithHooks from "./CounterWithHooks"
// import FormInput from "./FormInput"

class App extends Component {
	render() {
		return (
			<>
				<h1>Counter</h1>
				{/* <CounterWithClass initialCount={0} /> */}
				<CounterWithHooks initialCount={0} />
				{/* <FormInput /> */}
			</>
		)
	}
}

export default App
