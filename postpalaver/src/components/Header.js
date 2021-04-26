import React, { useState, useEffect } from "react"
import {
	AppBar,
	Toolbar,
	Typography,
	Tabs,
	Tab,
	Button
} from "@material-ui/core"
import Logo from "../assets/logo.svg"
import { HeaderStyles } from "./HeaderStyles"
import { Link } from "react-router-dom"

export const Header = () => {
	// destructured inline styles from HeaderStyles
	const { toolbarMargin, logo, title, tabContainer, tab } = HeaderStyles()

	// Set value of tab indicator
	const [value, setValue] = useState(0)
	const handleChange = (e, value) => {
		setValue(value)
	}

	// Check current URL and set value of tab indicator as needed
	useEffect(() => {
		if (window.location.pathname === "/" && value !== 0) {
			setValue(0)
		} else if (window.location.pathname === "/services" && value !== 1) {
			setValue(1)
		} else if (window.location.pathname === "/revolution" && value !== 2) {
			setValue(2)
		} else if (window.location.pathname === "/about" && value !== 3) {
			setValue(3)
		} else if (window.location.pathname === "/contact" && value !== 4) {
			setValue(4)
		} else {
			setValue(5)
		}
	}, [])

	return (
		<>
			<AppBar>
				<Toolbar disableGutters>
					<Button
						disableRipple
						component={Link}
						to="/"
						onClick={() => setValue(0)}
						style={{ padding: 0 }}>
						<img src={Logo} alt="logo" className={logo} />
						<Typography variant="h4" className={title} color="secondary">
							Post Palaver
						</Typography>
					</Button>
					<Tabs
						value={value}
						onChange={handleChange}
						// indicatorColor="primary"
						className={tabContainer}>
						<Tab className={tab} label="Home" component={Link} to="/"></Tab>
						<Tab
							className={tab}
							label="Services"
							component={Link}
							to="/services"></Tab>
						<Tab
							className={tab}
							label="Revolution"
							component={Link}
							to="/revolution"></Tab>
						<Tab
							className={tab}
							label="About Us"
							component={Link}
							to="/about"></Tab>
						<Tab
							className={tab}
							label="Contact Us"
							component={Link}
							to="/contact"></Tab>
						<Button
							className={tab}
							size="small"
							variant="outlined"
							color="secondary"
							component={Link}
							to="/estimate">
							Estimate
						</Button>
					</Tabs>
				</Toolbar>
			</AppBar>
			<div className={toolbarMargin}></div>
		</>
	)
}
