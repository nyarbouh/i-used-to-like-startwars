import React from "react";
import { Link } from "react-router-dom";
import { Consumer } from "../store/appContext.js";
//"https://static-mh.content.disney.io/starwars/assets/navigation/sw_logo_stacked-336c62367939.png"

export class Navbar extends React.Component {
	constructor() {
		super();
		this.state = {
			clicked: false
		};
	}
	show = () => {
		this.setState({ clicked: !this.state.clicked });
	};
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
						<div className={" btn-group " + (this.state.clicked && "show")}>
							<button
								onClick={this.show}
								type="button"
								className="drop-button btn btn-secondary dropdown-toggle"
								data-toggle="dropdown"
								aria-haspopup="true"
								aria-expanded="false">
								Favorites
							</button>

							<div className={"dropdown-menu dropdown-menu-right " + (this.state.clicked && "show")}>
								<Consumer>
									{({ store, actions }) => {
										return store.favorites.map((item, index) => (
											<button key={index} className="dropdown-item" type="button">
												{item.name}
											</button>
										));
									}}
								</Consumer>
							</div>
						</div>
					</nav>
				</div>
			</div>
		);
	}
}
