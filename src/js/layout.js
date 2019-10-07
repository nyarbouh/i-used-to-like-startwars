import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import { SinglePage } from "./views/singlePage";

import injectContext from "./store/appContext";
import "../styles/index.scss";

import { Navbar } from "./component/Navbar";
import { Planets } from "./component/Planets";
import { Page } from "./component/Page";
import { Characters } from "./component/Characters";

//create your first component
export const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column h-100">
			<BrowserRouter>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/Page" component={Page} />
						<Route path="/Planets" component={Planets} />
						<Route path="/Characters" component={Characters} />
						<Route exact path="/single-character/:theid/:thegender/:theeye_color" component={SinglePage} />
						<Route render={() => <h1>Not found!</h1>} />
					</Switch>
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
