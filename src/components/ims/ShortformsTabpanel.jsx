import React, { Component } from 'react';
import JqxTabs from 'jqwidgets-react/react_jqxtabs'
import ImsShortForm from 'ImsShortForm.jsx';

class ShortformsTabpanel extends Component {
	render() {
		return (
            <JqxTabs>
                <ul>
                    <li>Incident</li>
                    <li>Hotspot</li>
                    <li>Notepad</li>
                    <li>Request</li>
                    <li>Activity</li>
                    <li>Lost Claim</li>
                    <li>Task</li>
                </ul>
                <div>
                    <ImsShortForm></ImsShortForm>
                </div>
                <div>
                    <div className="row">
                    </div>
                </div>
                <div>
                    <div className="row">
                    </div>
                </div>
                <div>
                    <div className="row">
                    </div>
                </div>
                <div>
                    <div className="row">
                    </div>
                </div>
                <div>
                    <div className="row">
                    </div>
                </div>
                <div>
                    <div className="row">
                    </div>
                </div>
            </JqxTabs>
        )
    }
}
export default ShortformsTabpanel;
