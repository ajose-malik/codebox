import React, { Component } from "react";
import ColorBox from "./ColorBox";
import "./Palette.css";

class Palette extends Component {
	render() {
		const { colors } = this.props;
		const colorBoxes = colors.map(({ color, name }) => {
			return <ColorBox background={color} name={name} />;
		});
		return (
			<div className="Palette">
				<div className="Palette-colors">{colorBoxes}</div>
			</div>
		);
	}
}

export default Palette;
