import React, { Component } from "react";
import TodoList from "./TodoList";
import { Link, Route, Redirect } from "react-router-dom";

export default class App extends Component {
	render() {
		return (
			<div className="App">
				<h1>Welcome to myTodo</h1>

				<div>
					<Link to="/todos">See my todos</Link>
				</div>

				<div>
					<Link to="/todos/new">Add todos</Link>
				</div>

				<Route exact path="/" render={() => <Redirect to="/todos" />} />
				<Route exact path="/todos" component={TodoList} />
			</div>
		);
	}
}
