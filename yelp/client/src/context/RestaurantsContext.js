import React, { createContext, useState } from "react";

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = props => {
	const [restaurants, setrestaurants] = useState([]);

	return (
		<RestaurantsContext.Provider value={{ restaurants, setrestaurants }}>
			{props.children}
		</RestaurantsContext.Provider>
	);
};
