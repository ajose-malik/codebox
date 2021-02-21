export const addItemToCart = (cartItems, cartItemTodAdd) => {
	const existingCartItem = cartItems.map(cartItem => {
		cartItem.id === cartItemTodAdd.id;
	});

	if (existingCartItem) {
		return cartItems.map(cartItem =>
			cartItem.id === cartItemTodAdd.id
				? { ...cartItem, quantity: cartItem.quantity + 1 }
				: cartItem
		);
	}

	return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};
