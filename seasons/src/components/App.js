import React from "react";

export default class App extends React.Component {
	render() {
		window.navigator.geolocation.getCurrentPosition(
			position => console.log(position),
			e => console.log(e)
		);
		return "hello world";
	}
}
