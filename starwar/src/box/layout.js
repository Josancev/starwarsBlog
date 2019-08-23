import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/Router/ScrollToTop";
import { Home } from "./renders/home";
import { Detail } from "./renders/detail";
import { Planet_detail } from "./renders/planet_detail";
import injectStore from "./store/appContext";
import "../styles/index.scss";
import Nav from "./component/data/Nav";


export class Layout extends React.Component {
	render() {
		return (
			<div className="d-flex flex-column h-100">
				<BrowserRouter>
					<ScrollToTop>
						<Nav />
						<Switch>
							<Route exact path="/" component={Home} />
							<Route exact path="/detail/:id" name="detail" component={Detail} />
							<Route exact path="/planet_detail/:id" name="detail" component={Planet_detail} />
							<Route render={() => <h1>Not found!</h1>} />
						</Switch>

					</ScrollToTop>


				</BrowserRouter>
			</div>

		);
	}
}

export default injectStore(Layout);