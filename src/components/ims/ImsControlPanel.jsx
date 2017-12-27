import React, { Component } from 'react';
import $ from 'jquery';
import JqxTabs from 'jqwidgets-react/react_jqxtabs';
import ControlPanelHeader from 'components/ims/ControlPanelHeader.jsx';

import IncidentQueue from './IncidentQueue.jsx';

class ImsControlPanel extends Component {
	constructor(props) {
		super(props);
		this.state = {
			facility_id:0,
			event_id:0,
		};
		this.onFacilityChange = this.onFacilityChange.bind(this);
		this.onEventChange = this.onEventChange.bind(this);
	}
	componentWillMount() {
		$("#navbar").hide();
	}
	componentWillUnmount() {
		$("#navbar").show();
	}

	onFacilityChange(facility_id){
		this.setState(
			{
				facility_id: parseInt(facility_id),
				event_id: 0
			},
			()=>{
			}
		);
	}

	onEventChange(event_id){
		var state = [...this.state];
		this.setState(
			{
				state, 
				event_id: parseInt(event_id)
			}, 
			()=>{
			}
		);		
	}

	render() {
		return (
			<div id="control_panel_header_main_div">
				<ControlPanelHeader facility_id={this.state.facility_id} event_id={this.state.event_id} onEventChange={this.onEventChange} onFacilityChange={this.onFacilityChange} />
				<JqxTabs
				>
					<ul>
						<li>Incidents</li>
						<li>Requests</li>
						<li>Tasks</li>
						<li>Activities</li>
						<li>HotSpots</li>
					</ul>
					<div>
						<IncidentQueue ref={(IncidentQueue)=>{this.incident_queue = IncidentQueue;}} facility_id={this.state.facility_id} event_id={this.state.event_id} />
					</div>
					<div>
						
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
			</div>
		);
	}
}

export default ImsControlPanel;