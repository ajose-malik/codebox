import React from "react"
import { AppBar, Toolbar, Typography, Tabs, Tab } from "@material-ui/core"
import Logo from "../assets/logo.svg"
import { HeaderStyles } from "./HeaderStyles"

export const Header = () => {
	// destructured inline styles from HeaderStyles
	const { toolbarMargin, logo, title, tabContainer, tab } = HeaderStyles()

	return (
		<>
			<AppBar>
				<Toolbar disableGutters>
					<img src={Logo} alt="logo" className={logo} />
					<Typography variant="h4" className={title}>
						Post Palaver
					</Typography>
					<Tabs className={tabContainer}>
						<Tab className={tab} label="Home"></Tab>
						<Tab className={tab} label="Services"></Tab>
						<Tab className={tab} label="Shop"></Tab>
						<Tab className={tab} label="About Us"></Tab>
						<Tab className={tab} label="Contact Us"></Tab>
					</Tabs>
				</Toolbar>
			</AppBar>
			<div className={toolbarMargin}></div>
		</>
	)
}
