import React, {Component} from 'react';
import { browserHistory } from 'react-router';
import { HashRouter as Router, Route, IndexRoute, Link, Switch } from 'react-router-dom';
import asyncComponent from './asyncComponent.jsx';
import Header from 'components/Header.jsx';
import Footer from 'components/Footer.jsx';

const HomeDashboard = asyncComponent(() => import('components/common/HomeDashboard.jsx')
	.then(module => module.default), { name: 'Home' });
const AccountAndUsers = asyncComponent(() => import('components/C3/AccountAndUsers.jsx')
	.then(module => module.default), { name: 'AccountAndUsers' });
const NewsAndUpdates = asyncComponent(() => import('components/C3/NewsAndUpdates.jsx')
	.then(module => module.default), { name: 'NewsAndUpdates' });
const GlobalSettings = asyncComponent(() => import('components/C3/GlobalSettings.jsx')
	.then(module => module.default), { name: 'GlobalSettings' });

export default class App extends Component {
	render() {
		return (
			<Router history={browserHistory}>
				<div id="app-content">
					<Header />
					<div id="main-content">
						<Route exact path="/" component={HomeDashboard} />
						<Route path="/account-and-users" component={AccountAndUsers} />
						<Route path="/account-manager" component={HomeDashboard} />
						<Route path="/user-manager" component={HomeDashboard} />
						<Route path="/keyword-manager" component={HomeDashboard} />
						<Route path="/usage-history" component={HomeDashboard} />
						<Route path="/news-and-updates" component={NewsAndUpdates} />
						<Route path="/global-settings" component={GlobalSettings} />
					</div>
					{/* <Footer /> */}
				</div>
			</Router>
		);
	}
}		
