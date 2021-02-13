import React, { Component } from 'react';
import TodoList from './TodoList';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div className='App'>
				<h1>See Our Todos</h1>
				<TodoList />
			</div>
		);
	}
}
