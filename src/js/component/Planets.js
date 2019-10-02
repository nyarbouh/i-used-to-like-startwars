import React from "react";
import PropTypes from "prop-types";

export class Planets extends React.Component {
	render(props) {
		return (
			<div className="card-planets card col-lg-6 col-md-6  ">
				<div className="card-body">
					<img
						src="https://starwarsblog.starwars.com/wp-content/uploads/2018/10/mustafar-tall.jpg"
						className="card-img-top"
						alt="..."
					/>
					<h5 className="title card-title" />
					<h6 className="card-subtitle mb-2 text-muted">Name: {this.props.name}</h6>
					<h6 className="card-subtitle mb-2 text-muted">Climate: {this.props.climate}</h6>
					<h6 className="card-subtitle mb-2 text-muted">Terrains: {this.props.terrain}</h6>
				</div>
			</div>
		);
	}
}

Planets.propTypes = {
	name: PropTypes.string,
	climate: PropTypes.string,
	terrain: PropTypes.string
};
