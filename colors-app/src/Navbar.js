import React, { Component } from "react";
import Slider from "rc-slider";
import {Select, MenuItem} from 
import "rc-slider/assets/index.css";
import "./Navbar.css";
import { Select } from "@material-ui/core";

class Navbar extends Component {
	constructor(props) {
		super(props);
		this.state = { format: "hex" };
	}
	handleChange = e => {
		const {handleChange} = this.props
		const {format} = this.state

		
		this.setState({format: e.target.value}, () => handleChange(format))
	}
	render() {
		const { changeLevel, level } = this.props;
		const {format} = this.state
		return (
			<header className="Navbar">
				<div className="logo">
					<a href="#">color-picker</a>
				</div>
				<div className="slider-container">
					<span>Level: {level}</span>
				</div>
				<div className="slider">
					<Slider
						defaultValue={level}
						min={100}
						max={900}
						step={100}
						onAfterChange={changeLevel}
					/>
				</div>
				<div className="select-container">
					<Select value={format} onChange={this.handleChange}>
						<MenuItem value="hex">HEX - #ffffff</MenuItem>
						<MenuItem value="rgb">RGB - rgb(255,255,255)</MenuItem>
						<MenuItem value="rgba">RGBA - rgba(255,255,255, 1.0)</MenuItem>
					</Select>
				</div>
			</header>
		);
	}
}

export default Navbar;
