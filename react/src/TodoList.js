import React, { Component } from "react";
import Todo from "./Todo";

export default class TodoList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			todos: ["Eat", "Sleep", "Go home"]
		};
	}

	render() {
		let todos = this.state.todos.map((task, i) => <Todo key={i} task={task} />);
		return (
			<>
				<ul>{todos}</ul>
			</>
		);
	}
}
