import React from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import "./cart-icon.styles.scss";

const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => {
	return (
		<button
			className={`${isGoogleSignIn ? "google-sign-in" : ""} custom-button`}
			{...otherProps}>
			{children}
		</button>
	);
};

export default CustomButton;
