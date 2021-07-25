import React from "react";
import { Recipe } from "./Recipe";

export const RecipeList = ({ recipes }) => {
	return (
		<>
			<div>
				{recipes.map(recipe => (
					<Recipe key={recipe.id} {...recipe} />
				))}
			</div>
			<button>Add Recipe</button>
		</>
	);
};
