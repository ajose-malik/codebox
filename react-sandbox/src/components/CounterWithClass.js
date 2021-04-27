import React, { Component } from "react"

class CounterWithClass extends Component {
	constructor(props) {
		super()
		this.state = {
			count: props.initialCount
		}
	}

	changeCount(value) {
		// The callback function uses the current previous state
		this.setState(prevState => {
			return { count: prevState.count + value }
		})
	}

	render() {
		return (
			<>
				<button onClick={() => this.changeCount(-1)}>-</button>
				<span style={{ padding: "10px" }}>{this.state.count}</span>
				<button onClick={() => this.changeCount(1)}>+</button>
			</>
		)
	}
}

export default CounterWithClass
