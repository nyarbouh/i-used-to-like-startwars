import React from "react";

export class Navbar extends React.Component {
	render() {
		return (
			<div>
				<div>
					<div>
						<a
							className="navbar-brand"
							href="url(https://static-mh.content.disney.io/starwars/assets/navigation/sw_logo_stacked-336c62367939.png)">
							<img
								src="https://static-mh.content.disney.io/starwars/assets/navigation/sw_logo_stacked-336c62367939.png"
								className="starwarslogo fixed-top"
							/>
						</a>
					</div>
					<nav className="navbar2 navbar-dark bg-dark navbar-expand-sm fixed-top">
						<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar1">
							<span className="navbar-toggler-icon" />
						</button>

						<div className="collapse navbar-collapse" id="navbar1">
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

								<li className="nav-item">
									<a className="nav-link" href="#">
										DATABANK
									</a>
								</li>
							</ul>
						</div>
					</nav>
				</div>
			</div>
		);
	}
}
