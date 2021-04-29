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
	const {
		toolbarMargin,
		logo,
		title,
		tabContainer,
		tab,
		menu,
		menuItem,
		position
	} = HeaderStyles()

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

	// Set index of services menu items by looping through array of menu options
	const [selectedIndex, setSelectedIndex] = useState(0)
	const handleMenuItemClick = (e, idx) => {
		setAnchorEl(null)
		setOpen(false)
		setSelectedIndex(1)
	}
	// Services menu options
	const menuOptions = [
		{
			name: "Services",
			link: "/services"
		},
		{ name: "Custom Software Development", link: "/customsoftware" },
		{ name: "Mobile App Development", link: "/mobileapps" },
		{ name: "Website Development", link: "/websites" }
	]

	// Check current URL and set value of tab indicator as needed
	useEffect(() => {
		switch (window.location.pathname) {
			case "/": {
				if (value !== 0) {
					setValue(0)
				}
				break
			}
			case "/services":
				if (value !== 1) {
					setValue(1)
					setSelectedIndex(0)
				}
				break
			case "/customsoftware":
				if (value !== 1) {
					setValue(1)
					setSelectedIndex(1)
				}
				break
			case "/mobileapps":
				if (value !== 1) {
					setValue(1)
					setSelectedIndex(2)
				}
				break
			case "/websites":
				if (value !== 1) {
					setValue(1)
					setSelectedIndex(3)
				}
				break
			case "/revolution":
				if (value !== 2) {
					setValue(2)
				}
				break
			case "/about":
				if (value !== 3) {
					setValue(3)
				}
				break
			case "/contact":
				if (value !== 4) {
					setValue(4)
				}
				break
			case "/estimate":
				if (value !== 5) {
					setValue(5)
				}
				break
			default:
				break
		}
	}, [value])

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
							className={position}
							anchorEl={anchorEl}
							open={open}
							onClose={handleClose}
							classes={{ paper: menu }} // Using the CSS classes property from Material UI Menu component API
							MenuListProps={{ onMouseLeave: handleClose }} // Tracks mouse events on menu list
							elevation={0}>
							{/* Loop over menuOptions to set each menuItem*/}
							{menuOptions.map((option, idx) => (
								<MenuItem
									key={option + idx}
									component={Link}
									to={option.link}
									classes={{ root: menuItem }}
									onClick={e => {
										handleMenuItemClick(e, idx)
										setValue(1)
										handleClose()
									}}
									selected={idx === selectedIndex}>
									{option.name}
								</MenuItem>
							))}
						</Menu>
					</Tabs>
				</Toolbar>
			</AppBar>
			{/*Push down element behind toolbar*/}
			<div className={toolbarMargin}></div>{" "}
		</>
	)
}
