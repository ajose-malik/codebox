import React from "react";
import { Recipe } from "./Recipe";

export const RecipeList = ({
	recipes,
	handleRecipeAdd,
	handleRecipeDelete
}) => {
	return (
		<div className="recipe-list">
			<div>
				{recipes.map(recipe => (
					<Recipe
						key={recipe.id}
						{...recipe}
						handleRecipeDelete={handleRecipeDelete}
					/>
				))}
			</div>
			<div className="recipe-list__add-recipe-btn-container">
				<button className="btn btn--primary" onClick={handleRecipeAdd}>
					Add Recipe
				</button>
			</div>
		</div>
	);
};
