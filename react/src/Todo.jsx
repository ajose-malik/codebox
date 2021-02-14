import React from "react";

export default function Todo({ task, id, deleteTodo }) {
	return (
		<li key={id}>
			{task} <button onClick={deleteTodo}>X</button>
		</li>
	);
}
