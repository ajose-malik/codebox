export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "ADD_TODO";

export const addTodo = task => {
	return { type: ADD_TODO, task };
};

export const deleteTodo = id => {
	return { type: DELETE_TODO, id };
};
