import React, { Component } from 'react';

class Footer extends Component {
	render() {
		return (
            <footer className="footer navbar-fixed-bottom bg-dark-blue" id="control_panel_footer">
                <div className="row">
                    <div className="col-xl-7">
                        <span>12/12/2016 07:01 PM</span>
                    </div>
                    <div className="col-xl-3">
                        <i className="fa fa-user"></i> Web(0) Device(0)
                    </div>
                    <div className="col-xl-2">
                        <div className="row">
                            <div className="col-sm-4 col-xs-4">
                                <i className="fa fa-cog"></i>
                            </div>
                            <div className="col-sm-4 col-xs-4">
                                <i className="fa fa-language"></i>
                            </div>
                            <div className="col-sm-4 col-xs-4">
                                <i className="fa fa-bullhorn"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}
export default Footer;