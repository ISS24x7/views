import React, { Component } from 'react';
import JqxInput from 'jqwidgets-react/react_jqxinput'
import BreadCrumb from 'components/common/BreadCrumb.jsx'

export default class HomeDashboard extends Component {
	render() {
		return (
			<div className="container-fluid">
				<BreadCrumb links={[{ label: 'HomeSDEgf', link: '#home' }, { label: 'News/Updates', link: '#News/Updates' }]} /> 
				<div className="card">
					<div className="card-block">
						<h5>Add System Updates</h5>
						<hr />
						<div className="container-fluid">
							<div className="row">
								<div className="col-xl-3 col-lg-3 col-md-3 col-sm-12">
									<label htmlFor="">Topic</label>
									<input type="text" className="form-control" />
								</div>
								<div className="col-xl-3 col-lg-3 col-md-3 col-sm-12">
									<label htmlFor="">Topic</label>
									<input type="text" className="form-control"  />
								</div>
								<div className="col-xl-3 col-lg-3 col-md-3 col-sm-12">
									<label htmlFor=""> Topic</label>
									<input type="text" className="form-control"  />
								</div>
								<div className="col-xl-3 col-lg-3 col-md-3 col-sm-12">
									<label htmlFor="">Topic</label>
									<input type="text" className="form-control"  />
								</div>
							</div>
						</div>
  					</div>
				</div>
			</div>
		);
	}
}