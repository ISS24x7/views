import React, { Component } from 'react';
import JqxInput from 'jqwidgets-react/react_jqxinput'
import BreadCrumb from 'components/common/BreadCrumb.jsx'

export default class HomeDashboard extends Component {
	render() {
		return (
			<div className="container-fluid">
				<BreadCrumb links={[{ label: 'Home', link: '#home' }, { label: 'News/Updates', link: '#News/Updates' }]} /> 
				<div className="card">
					<div className="card-block">
						<h5>Add System Updates</h5>
						<hr />
						<div className="container-fluid">
							<div className="row">
								
							</div>
						</div>
  					</div>
				</div>
			</div>
		);
	}
}