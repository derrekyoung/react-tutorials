import React from 'react';

let Home = React.createClass({
	_tacos(obj) {
		return (
			<div key={obj.name}>
				<p key={obj.name}>{obj.name}</p>
			</div>
		)
	},

	render() {
		let tacos = this.props.appState.tacos
		// console.log(tacos)

		// const taco = tacos[0].name || "empty";

		return(
			<div>
				<p>Welcome to Home</p>
				<div>
					<span>Tacos: </span>
					<span>{tacos.map(this._tacos)}</span>
				</div>
			</div>
		);
	}
});

export default Home;