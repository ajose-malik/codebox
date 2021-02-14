import { ADD_TODO, DELETE_TODO } from "./actionMaker";

const initialState = {
	todos: [],
	id: 0
};

export default function rootReducer(state = initialState, action) {
	switch (action.type) {
		case ADD_TODO:
			let newState = { ...state };
			newState.id++;
			return {
				...newState,
				todos: [...newState.todos, { task: action.task, id: newState.id }]
			};

		case DELETE_TODO:
			let todos = state.todos.filter(todo => todo.id !== newState.id);
			return { ...state, todos };

		default:
			return state;
	}
}
