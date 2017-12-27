import React, { Component } from 'react';
import JqxComboBox from 'jqwidgets-react/react_jqxcombobox';
import { Link } from 'react-router-dom';

class ControlPanelHeader extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.control_panel_header_facility_combobox.on('change', (e) => {
            if(typeof e.args !== 'undefined') {
                let event_comobo_source = this.control_panel_header_event_combobox.source()._source;
                event_comobo_source.data.selected_facility = e.args.item.value;
                this.props.facility_id = e.args.item.value;
                this.props.onFacilityChange(this.props.facility_id);
                this.control_panel_header_event_combobox.setOptions({ source: new window.JQXLite.jqx.dataAdapter(event_comobo_source), disabled: false});
            } else {
                this.control_panel_header_event_combobox.setOptions({ disabled: true, selectedIndex: -1 });
            }
        });

        this.control_panel_header_event_combobox.on('change', (e) => {
            if(typeof e.args !== 'undefined') {
                this.props.event_id = e.args.item.value;
                this.props.onEventChange(this.props.event_id);                
            }
        });
    }
	render() {
		return (
        <nav id="control_panel_header_nav" className="navbar navbar-toggleable-sm navbar-inverse bg-dark-blue" style={{padding:"0"}}>
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="fa fa-navicon"></span>
            </button>
            
            <Link to="/ims" className="navbar-brand" href="#" ><i className="fa fa-chevron-circle-left" aria-hidden="true" style={{fontsize:"20px", padding: "2px 10px", color:"#fff"}}></i></Link>
            <div className="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <JqxComboBox
                            ref={(JqxComboBox)=>{this.control_panel_header_facility_combobox = JqxComboBox;}}
                            placeHolder={'Facilities'}
                            valueMember= {'facility_id'}
                            displayMember= {'facility_name'}
                            selectedIndex = {0}
                            autoDropDownHeight={true}
                            style={{marginRight:'5px'}}
                            source = { new window.JQXLite.jqx.dataAdapter({
                                        autoBind: true,
                                        dataType: 'json',
                                        type:'POST',
                                        root:'facilities',
                                        dataFields: [
                                            { name: 'facility_id', type: 'string' },
                                            { name: 'facility_name', type: 'string' }
                                        ],
                                        url: 'https://dev1.isscommand.com/index.php/Common/Facility/get_module_facility',
                                        data:{
                                            module_name: 'ims'
                                        },
                                    })
                                }
                        />
                    </li>
                    <li className="nav-item">
                        <JqxComboBox
                            ref = {(JqxComboBox)=>{this.control_panel_header_event_combobox = JqxComboBox;}}
                            placeHolder = {'Event'}
                            disabled = {true}
                            valueMember = {'event_id'}
                            displayMember = {'event_name'}
                            source = { new window.JQXLite.jqx.dataAdapter({
                                    autoBind: false,
                                    dataType: 'json',
                                    root:'rows',
                                    dataFields: [
                                        { name: 'event_id', type: 'string' },
                                        { name: 'event_name', type: 'string' },
                                        { name: 'ims_system_mode', type: 'string' },
                                    ],
                                    url: 'https://dev1.isscommand.com/index.php/ControlPanel/Shortform/get_header_event_list',
                                    data:{
                                        ims_system_mode:0,
                                        event_list_type:'current',
                                    },
                                })
                            }
                        />
                    </li>
                </ul>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a href="#" title="Send Text Message"> <img src="public/images/sms.png" className="img" /> <span className="hidden-sm-up"> Send Text Messages</span></a>
                    </li>
                    <li className="nav-item">
                        <a href="#" id="add_incident_button" title="Add Incident"><img src="public/images/form.png" className="img" /> <span className="hidden-sm-up"> Add Incident</span></a>
                    </li>
                    <li className="nav-item">
                        <a href="#" title="Event Attachments"> <img src="public/images/pictures.png" className="img" /> <span className="hidden-sm-up"> Event Attachments</span></a>
                    </li>
                    <li className="nav-item">
                        <a href="#" title="Previous Event"> <img src="public/images/past-calendar.png" className="img" /> <span className="hidden-sm-up"> Previous Events</span></a>
                    </li>
                    <li className="nav-item">
                        <a href="#" title="Event Notes"> <img src="public/images/notepad.png" className="img" /> <span className="hidden-sm-up"> Event Notes</span></a>
                    </li>
                    <li className="nav-item">
                        <div className="btn-group">
                            <img src="public/images/reports.png" className="dropdown-toggle" title="Reports" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" /> <span className="hidden-sm-up"> Reports</span>
                            <div className="dropdown-menu dropdown-menu-right">
                                <a className="dropdown-item" href="#">Summary Report</a>
                                <a className="dropdown-item" href="#">Insight Report</a>
                                <a className="dropdown-item" href="#">Favourite Report</a>
                            </div>
                        </div>
                    </li>
                    <li className="nav-item">
                        <div className="btn-group">
                            <img src="public/images/clock.png" className="dropdown-toggle fa fa-clock-o" title="Event Markers" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" /> <span className="hidden-sm-up"> Event Markers</span>
                            <div className="dropdown-menu dropdown-menu-right">
                                <a className="dropdown-item" href="#">Post Marker Activation</a>
                                <div className="dropdown-divider"></div>
                                <span className="dropdown-item" href="#">Event Marker</span>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#">First Half</a>
                                <a className="dropdown-item" href="#">Break 1</a>
                                <a className="dropdown-item" href="#">Second Half</a>
                                <div className="dropdown-divider"></div>
                                <span className="dropdown-item" href="#">Daily Marker</span>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#">First Half</a>
                                <a className="dropdown-item" href="#">Break 1</a>
                                <a className="dropdown-item" href="#">Second Half</a>
                            </div>
                        </div>
                    </li>
                    <li className="nav-item">
                        <div className="btn-group">
                            <img src="public/images/setting.png" className="dropdown-toggle img" title="Queue Filter" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" /> <span className="hidden-sm-up"> Queue Filter</span>
                            <div className="dropdown-menu dropdown-menu-right">
                                <a className="dropdown-item" href="#">Incident Queue</a>
                                <a className="dropdown-item" href="#">Request Queue</a>
                                <a className="dropdown-item" href="#">Hotspot Queue</a>
                                <a className="dropdown-item" href="#">Task Queue</a>
                                <a className="dropdown-item" href="#">Activity Queue</a>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
        );
	}
}
export default ControlPanelHeader;