import React, { Component } from 'react';
import JqxTabs from 'jqwidgets-react/react_jqxtabs'
import JqxGrid from 'jqwidgets-react/react_jqxgrid';

class PendingQueue extends Component {
	render() {
		return (
            <JqxTabs height={242}>
                <ul>
                    <li>Device</li>
                    <li>Request</li>
                    <li>Event Task</li>
                    <li>Daily Task</li>
                </ul>
                <div>
                    <div className="row">
                    <JqxGrid
                        width={"100%"}
                        height={210}
                        style={{ border: 'none' }}
                        columns={
                            [
                                { datafield: "time" , text:"Time"},
                                { datafield: "incident_type" , text:"Incident Type" },
                                { datafield: "device" , text:"Device" },
                                { datafield: "location" , text:"Location" }
                            ]
                        }
                    />
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
export default PendingQueue;            