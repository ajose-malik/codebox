import React from "react"
import { AppBar, Toolbar } from "@material-ui/core"
import Logo from "../assets/logo.svg"
import { HeaderStyles } from "./HeaderStyles"

export const Header = () => {
	// destructured inline styles from HeaderStyles
	const { toolbarMargin, logo } = HeaderStyles()

	return (
		<>
			<AppBar>
				<Toolbar disableGutters>
					<img src={Logo} alt="logo" className={logo} />
				</Toolbar>
			</AppBar>
			<div className={toolbarMargin}></div>
		</>
	)
}
