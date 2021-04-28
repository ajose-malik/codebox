import React, { Component } from "react"
import { ThemeContext } from "./App"

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
			<ThemeContext.Consumer>
				{style => (
					<div>
						<button style={style} onClick={() => this.changeCount(-1)}>
							-
						</button>
						<span style={{ padding: "10px" }}>{this.state.count}</span>
						<button style={style} onClick={() => this.changeCount(1)}>
							+
						</button>
					</div>
				)}
			</ThemeContext.Consumer>
		)
	}
}

export default CounterWithClass
