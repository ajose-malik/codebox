import React, { Component } from "react";
import { connect } from "react-redux";
import { addTodo, deleteTodo } from "./actionMaker";
import { Route } from "react-router-dom";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";

class TodoList extends Component {
	constructor(props) {
		super(props);
		this.handleAddTodo = this.handleAddTodo.bind(this);
	}

	handleAddTodo(todo) {
		this.props.addTodo(todo);
	}

	deleteTodo = id => {
		this.props.deleteTodo(id);
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
				<Route
					exact
					path="/todos/new"
					component={props => (
						<NewTodoForm {...props} handleSubmit={this.handleAddTodo} />
					)}
				/>
				<Route exact path="/todos" component={() => <div>{todos}</div>} />
			</div>
		);
	}
}

function mapStateToProps(reduxState) {
	return {
		todos: reduxState.todos
	};
}

export default connect(mapStateToProps, { addTodo, deleteTodo })(TodoList);
