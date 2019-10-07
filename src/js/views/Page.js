import React from "react";
import { Navbar } from "./Navbar.js";
import { Planets } from "./Planets.js";
import { Characters } from "./Characters.js";
import PropTypes from "prop-types";

//include images into your bundle

//create your first component
export class Page extends React.Component {
	constructor() {
		super();

		this.state = {
			character: [],
			planet: []
		};
	}

	componentDidMount() {
		fetch("https://swapi.co/api/people/")
			.then(response => response.json())
			.then(data => {
				let character = this.state;

				this.setState({ character: data.results });
			});

		fetch("https://swapi.co/api/planets/")
			.then(response => response.json())
			.then(data => {
				let planet = this.state;

				this.setState({ planet: data.results });
			});
	}

	render() {
		let people1 = this.state.character.map((item, index) => {
			return <Characters key={index} name={item.name} gender={item.gender} eye_color={item.eye_color} />;
		});

		let planet1 = this.state.planet.map((item, index) => {
			return <Planets key={index} name={item.name} climate={item.climate} terrain={item.terrain} />;
		});

		return (
			<div className="home ">
				<div className="navbar-brand">
					<Navbar />
				</div>
				<div>

					<hr className="hr-top col-lg-10 col-md-6 col-sm-6 col-xs-6 " />
					<p className="categories">People</p>
					<hr className="hr-bottom col-lg-10 col-md-6 col-sm-6 col-xs-6 " />
				</div>
				<div className="container">
					<div className="row">{people1}</div>
				</div>
				<div>
					<hr className="hr-top col-lg-10 col-md-6 col-sm-6 col-xs-6" />
					<p className="categories">Planets</p>
					<hr className="hr-bottom col-lg-10 col-md-6 col-sm-6 col-xs-6" />
				</div>

				<div className="container">
					<div className="row">{planet1}</div>
				</div>

			</div>
		);
	}
}
