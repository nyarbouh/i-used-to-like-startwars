import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export class Characters extends React.Component {
	render(props) {
		return (
			<div className="card-characters card col-lg-6 col-md-6  ">
				<div className="card-body">
					<img
						src="https://media.timeout.com/images/103670273/630/472/image.jpg"
						className="card-img-top"
						alt="..."
					/>
					<h3 className="title card-title" />
					<h4 className="card-subtitle mb-2 text-muted">Name: {this.props.name}</h4>
					<h5 className="card-subtitle mb-2 text-muted">Gender: {this.props.gender}</h5>
					<h6 className="card-subtitle mb-2 text-muted">Eye Color: {this.props.eye_color}</h6>
					<button type="button" className="btn btn-info">
						<Link
							to={
								"/single-character/" +
								this.props.name +
								"/" +
								this.props.gender +
								"/" +
								this.props.eye_color
							}>
							More Info
						</Link>
					</button>
				</div>
			</div>
		);
	}
}

Characters.propTypes = {
	name: PropTypes.string,
	gender: PropTypes.string,
	eye_color: PropTypes.string
};
