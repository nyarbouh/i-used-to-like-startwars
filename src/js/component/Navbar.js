import React from "react";
import { Link } from "react-router-dom";
//"https://static-mh.content.disney.io/starwars/assets/navigation/sw_logo_stacked-336c62367939.png"

export class Navbar extends React.Component {
	render() {
		return (
			<div>
				<div>
					<nav className="navbar2 navbar-dark bg-dark navbar-expand-sm d-flex justify-content-center">
						<a className="navbar-brand" href="#">
							<img
								src="https://static-mh.content.disney.io/starwars/assets/navigation/sw_logo_stacked-336c62367939.png"
								width="150px"
								height="120px"
								alt=""
							/>
						</a>
						<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar1">
							<span className="navbar-toggler-icon" />
						</button>

						<div className=" text-center collapse navbar-collapse">
							<ul className="navbar-nav mr-auto">
								<li className="nav-item active">
									<a className="nav-link" href="#">
										VIDEOS
									</a>
								</li>

								<li className="nav-item">
									<a className="nav-link" href="#">
										FILMS
									</a>
								</li>

								<li className="nav-item">
									<a className="nav-link" href="#">
										SERIES
									</a>
								</li>
								<Link to="/Page">
									<li className="nav-item active">
										<a className="nav-link" href="#">
											DATABANK
										</a>
										<span className="sr-only">(current)</span>
									</li>
								</Link>
							</ul>
						</div>
					</nav>
				</div>
			</div>
		);
	}
}
