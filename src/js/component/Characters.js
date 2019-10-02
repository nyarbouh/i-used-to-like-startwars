import React from "react";
import PropTypes from "prop-types";
import { Page } from "./Page.js";

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
					<h5 className="title card-title" />
					<h6 className="card-subtitle mb-2 text-muted">Name: {this.props.name}</h6>
					<h6 className="card-subtitle mb-2 text-muted">Gender: {this.props.gender}</h6>
					<h6 className="card-subtitle mb-2 text-muted">Eye Color: {this.props.eye_color}</h6>
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
