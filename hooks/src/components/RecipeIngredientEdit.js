import React from "react";

export const RecipeIngredientEdit = () => {
	return (
		<>
			<input type="text" className="recipe-edit__input" />
			<input type="text" className="recipe-edit__input" />
			<button className="btn btn--danger ">&times;</button>
		</>
	);
};
