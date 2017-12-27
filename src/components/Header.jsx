import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import JqxPopover from 'jqwidgets-react/react_jqxpopover';

export default class Header extends Component {
	render() {
		return (
			<nav id="navbar" className="navbar navbar-toggleable-md navbar-inverse bg-dark-blue">
				<button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon" />
				</button>
				<a className="navbar-brand" href="#"><img src="public/images/247software-logo.png" className="img img-responsive" height={30} /></a>
				<div className="collapse navbar-collapse" id="navbarsExampleDefault">
					<ul className="navbar-nav mr-auto">
						<li className="nav-item">
							<NavLink to="/" className="nav-link" activeClassName="active" id="c3_home_link" >Home</NavLink>
						</li>
						<li className="nav-item">
							<NavLink to="/account-and-users" className="nav-link" activeClassName="active" id="c3_account_manager_link">Account & Users</NavLink>							
						</li>
						<li className="nav-item">
							<NavLink to="/news-and-updates" className="nav-link" activeClassName="active" id="c3_news_and_updates_link">News/Updates</NavLink>
						</li>
						<li className="nav-item">
							<NavLink to="/global-settings" className="nav-link" activeClassName="active" id="c3_global_settings_link">Global Settings</NavLink>
						</li>
					</ul>
					<div className="mr-sm-2">
						<div className="nav-item dropdown">
							<NavLink to="/ims-dashboard" className="nav-link dropdown-toggle" activeClassName="active" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{color:"#fff"}}><span className="fa fa-user-o"></span></NavLink>
							<div className="dropdown-menu" aria-labelledby="dropdown01">
								<NavLink to="/ims-control-panel" className="dropdown-item" activeClassName="active" href="#">IMS Control Panel</NavLink>
							</div>
						</div>
					</div>
				</div>
			</nav>
		);
	}
}