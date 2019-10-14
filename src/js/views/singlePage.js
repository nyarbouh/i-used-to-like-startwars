import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Consumer } from "../store/appContext";

export const SinglePage = props => {
	return (
		<div className="card-characters card col-lg-6 col-md-6  ">
			<div className="card-body">
				<img
					src="https://media.timeout.com/images/103670273/630/472/image.jpg"
					className="card-img-top"
					alt="..."
				/>

				<h3 className="title card-title" />

				<h4 className="card-subtitle mb-2 text-muted">
					Name:
					{props.match.params.theid}
				</h4>

				<h4 className="card-subtitle mb-2 text-muted">
					Gender:
					{props.match.params.thegender}
				</h4>

				<h6 className="card-subtitle mb-2 text-muted">
					Eye Color:
					{props.match.params.theeye_color}
				</h6>
				<div>
					<Consumer>
						{({ actions }) => {
							return (
								<button
									type="button"
									className="btn btn-primary btn-sm"
									onClick={() => actions.addToFavorites(this.state.item)}>
									Add to Favorites
								</button>
							);
						}}
					</Consumer>
				</div>
			</div>
		</div>
	);
};

SinglePage.propTypes = {
	match: PropTypes.object,
	name: PropTypes.string,
	gender: PropTypes.string,
	eye_color: PropTypes.string
};
