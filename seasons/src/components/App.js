import React from "react";

export default class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = { lat: null, errorMessage: null };

		window.navigator.geolocation.getCurrentPosition(
			position => this.setState({ lat: position.coords.latitude }),
			e => this.setState({ errorMessage: e.message })
		);
	}
	render() {
		if (this.state.errorMessage) {
			return <div>error: {this.state.errorMessage}</div>;
		} else if (this.state.lat) {
			return <div>latitude: {this.state.lat}</div>;
		} else {
			return <div>Nothing to show here</div>;
		}
	}
}
