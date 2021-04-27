import React, { useState, useEffect } from "react"
import {
	AppBar,
	Toolbar,
	Typography,
	Tabs,
	Tab,
	Button,
	Menu,
	MenuItem
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

	// Set anchor of Material UI Menu components
	const [anchorEl, setAnchorEl] = useState(null)
	const [open, setOpen] = useState(false) // opens or close menu
	const handleClick = e => {
		setAnchorEl(e.currentTarget) // Sets location where menu will be opened
		setOpen(true) // Opens menu
	}
	const handleClose = e => {
		setAnchorEl(null)
		setOpen(false)
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
		} else if (window.location.pathname === "/contact" && value !== 5) {
			setValue(5)
		}
	}, [])

	return (
		<>
			<AppBar>
				<Toolbar disableGutters>
					{/* Brand logo */}
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
					{/* Tabs */}
					<Tabs
						value={value}
						onChange={handleChange}
						className={tabContainer}
						indicatorColor="primary">
						<Tab className={tab} label="Home" component={Link} to="/"></Tab>
						<Tab
							aria-owns={anchorEl ? "simple-menu" : undefined}
							aria-haspopup={anchorEl ? "true" : undefined}
							className={tab}
							label="Services"
							onMouseOver={e => handleClick(e)} // Opens service menu
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

						{/* Estimate Button */}
						<Button
							className={tab}
							size="small"
							variant="outlined"
							color="secondary"
							component={Link}
							to="/estimate">
							Estimate
						</Button>

						{/* Services Menu */}
						<Menu
							id="simple-men"
							anchorEl={anchorEl}
							open={open}
							onClose={handleClose}
							MenuListProps={{ onMouseLeave: handleClose }}>
							<MenuItem onClick={handleClose}>
								Custom Software Development
							</MenuItem>
							<MenuItem onClick={handleClose}>Mobile App development</MenuItem>
							<MenuItem onClick={handleClose}>Website Development</MenuItem>
						</Menu>
					</Tabs>
				</Toolbar>
			</AppBar>
			<div className={toolbarMargin}></div>
		</>
	)
}
