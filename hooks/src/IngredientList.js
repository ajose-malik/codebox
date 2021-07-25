import React from "react";
import { Ingredient } from "./Ingredient";

export const IngredientList = ({ ingredients }) => {
	const ingredientsElements = ingredients.map(ingredient => (
		<Ingredient key={ingredient.id} {...ingredient} />
	));

	return <div>{ingredientsElements}</div>;
};
