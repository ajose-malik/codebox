import React, { Component } from "react"
import CounterWithClass from "./CounterWithClass"
// import Counter from "./Counter"
// import FormInput from "./FormInput"

class App extends Component {
	render() {
		return (
			<>
				<h1>Counter</h1>
				<CounterWithClass initialCount={0} />
				{/* <Counter /> */}
				{/* <FormInput /> */}
			</>
		)
	}
}

export default App
