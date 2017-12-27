import React, { Component } from 'react';
import $ from 'jquery';
import {render} from 'react-dom';
import { Link } from 'react-router-dom';
import JqxMenu from 'jqwidgets-react/react_jqxmenu';
import asyncComponent from '../../asyncComponent.jsx';

const IncidentDetailspage = asyncComponent(() => import('components/ims/IncidentDetailspage.jsx')
.then(module => module.default), { name: 'IncidentDetailspage' });

class IncidentQueueToolbar extends Component {
    componentDidMount() {
		this.refs.incident_queue_toolbar_menu.on('itemclick', (event) => {
            if(event.args.id === 'create_incident_button') {
				render(<IncidentDetailspage></IncidentDetailspage>, document.getElementById('incident_details_page_id'), () => {

                });
			}
        });
	}
	render() {
        return (
            <div className="row">
                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-xs-12 hidden-sm-down" style={{paddingTop:"5px"}}>
                    <span> &nbsp;Powered by ISS 24/7</span>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 text-center hidden-sm-down" style={{paddingTop:"5px"}}>
                    <span>Incident Queue[20/2592]</span>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-xs-12">
                    <div id="incident_queue_grid_options" style={{float:"right"}} >
                    <JqxMenu clickToOpen={true} ref="incident_queue_toolbar_menu"  >
					<ul>
						<li>
							<img src="public/images/filter.png" />
							<ul>
								<li id="incident_queue_filter_options">
									<label htmlFor="incident_queue_new_chekbox_id" className="queue-listbox-label">
										<input defaultValue="New" type="checkbox" name="incident_queue_status_chekbox" id="incident_queue_new_chekbox_id" /> New
										<div className="new_status_icon" />
									</label>
									<label htmlFor="incident_queue_dispatch_chekbox_id" className="queue-listbox-label">
										<input defaultValue="Dispatched" type="checkbox" name="incident_queue_status_chekbox" id="incident_queue_dispatch_chekbox_id"
										/> Dispatched
										<div className="dispached_status_icon" />
									</label>
									<label htmlFor="incident_queue_onscene_chekbox_id" className="queue-listbox-label">
										<input defaultValue="Onscene" type="checkbox" name="incident_queue_status_chekbox" id="incident_queue_onscene_chekbox_id"
										/> On Scene
										<div className="onscene_status_icon" />
									</label>
									<label htmlFor="incident_queue_closed_chekbox_id" className="queue-listbox-label">
										<input defaultValue="Closed" type="checkbox" name="incident_queue_status_chekbox" id="incident_queue_closed_chekbox_id"
										/> Closed
										<div className="closed_status_icon" />
									</label>
									<label htmlFor="incident_queue_starred_chekbox_id" className="queue-listbox-label">
										<input defaultValue="Starred" type="checkbox" name="incident_queue_status_chekbox" id="incident_queue_starred_chekbox_id"
										/> Starred
										<div className="starred_status_icon" />
									</label>
									<label htmlFor="incident_queue_deleted_chekbox_id" className="queue-listbox-label">
										<input defaultValue="Deleted" type="checkbox" name="incident_queue_status_chekbox" id="incident_queue_deleted_chekbox_id"
										/> Deleted
										<div className="deleted_status_icon" />
									</label>
									<label htmlFor="incident_queue_my_incident_chekbox_id" className="queue-listbox-label">
										<input defaultValue="Myinc" type="checkbox" name="incident_queue_status_chekbox" id="incident_queue_my_incident_chekbox_id"
										/> My Incidents
										<div className="my_incident_status_icon" />
									</label>
									<label htmlFor="incident_queue_locked_incident_chekbox_id" className="queue-listbox-label">
										<input defaultValue="Locked" type="checkbox" name="incident_queue_status_chekbox" id="incident_queue_locked_incident_chekbox_id"
										/> Locked
										<div className="locked_status_icon" />
									</label>
								</li>
								<li>
									<div className="row">
										<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-6">
											<button id="incident_queue_filter_apply_button" style={{width: '75%'}}>Apply</button>
										</div>
										<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-6">
											<button id="incident_queue_filter_reset_button" style={{width: '75%'}}>Clear</button>
										</div>
									</div>
								</li>
							</ul>
						</li>
						<li>
							<img src="public/images/filter_minus.png" />
						</li>
						<li>
							<img src="public/images/table_minus.png" />
						</li>
						<li id="create_incident_button">
							<img src="public/images/plus.png" />
						</li>
					</ul>
                    </JqxMenu>
                    </div>
                </div>
            </div>
        );
    }
}
export default IncidentQueueToolbar;
