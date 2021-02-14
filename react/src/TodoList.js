import React, { Component } from "react";
import { connect } from "react-redux";
import Todo from "./Todo";

class TodoList extends Component {
	render() {
		let todos = this.state.todos.map((task, i) => <Todo key={i} task={task} />);
		return (
			<>
				<ul>{todos}</ul>
			</>
		);
	}
}

export default connect()(TodoList);
