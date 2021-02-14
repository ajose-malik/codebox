import React, { Component } from "react";
import { connect } from "react-redux";
import Todo from "./Todo";

class TodoList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			task: ""
		};
	}
	handleSubmit = e => {
		e.preventDefault();
		this.props.dispatch({
			type: "ADD_TODO",
			task: this.state.task
		});
		e.target.reset();
	};

	handleChange = e => {
		e.preventDefault();
		this.setState({ [e.target.name]: e.target.value });
	};

	deleteTodo = id => {
		this.props.dispatch({ type: "DELETE_TODO", id });
	};

	render() {
		let todos = this.props.todos.map((todo, i) => (
			<Todo
				deleteTodo={() => this.deleteTodo(todo.id)}
				key={i}
				task={todo.task}
				id={i}
			/>
		));
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<label htmlFor="task">Task</label>
					<input
						type="text"
						name="task"
						id="task"
						onChange={this.handleChange}
					/>
					<button>Add Todo</button>
				</form>
				<div>
					<ul>{todos}</ul>
				</div>
			</div>
		);
	}
}

function mapStateToProps(reduxState) {
	return {
		todos: reduxState.todos
	};
}

export default connect(mapStateToProps)(TodoList);
