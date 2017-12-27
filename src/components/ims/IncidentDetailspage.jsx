import React, { Component } from 'react';
import $ from 'jquery';
import JqxWindow from 'jqwidgets-react/react_jqxwindow'
import JqxComboBox, {jqx} from 'jqwidgets-react/react_jqxcombobox'
import JqxButton from 'jqwidgets-react/react_jqxbuttons'
import JqxInput from 'jqwidgets-react/react_jqxinput'
import JqxRadioButton from 'jqwidgets-react/react_jqxradiobutton'
import JqxCheckbox from 'jqwidgets-react/react_jqxcheckbox'
import JqxDateTimeInput from 'jqwidgets-react/react_jqxdatetimeinput'
import JqxEditor from 'jqwidgets-react/react_jqxeditor'
import JqxFileUpload from 'jqwidgets-react/react_jqxfileupload'
import JqxTextArea from 'jqwidgets-react/react_jqxtextarea'
import JqxGrid from 'jqwidgets-react/react_jqxgrid'

class IncidentDetailsPage extends Component {
    componentDidMount() {
        $("#incident_details_add_ap_button").click(function(){
            if($(this).hasClass('fa-plus-circle')){
                $(this).addClass('fa-minus-circle').removeClass('fa-plus-circle');
                $("#incident_details_ap_accordion_body").addClass('show').removeClass('in');
                $("#incident_details_ap_form_id").show();
            } else {
                $(this).addClass('fa-plus-circle').removeClass('fa-minus-circle');
                $("#incident_details_ap_accordion_body").addClass('in').removeClass('show');
                $("#incident_details_ap_form_id").hide();
            }
        });
    }
	render() {
		return (
            <div>
                <JqxWindow ref='incident_details_page_window' title={'Incident Details'} width={"70%"} height={"92%"} position={{ x: "20%", y: "4%" }} showCollapseButton={true} resizable={false} >
                    <div id="incident_details_tablist" role="tablist" aria-multiselectable="true">
                        <div className="card">
                            <div className="card-header bg-dark-blue" role="tab" id="incident_details_when_accordion_header">
                                When 1
                                <a style={{float: 'right'}} data-toggle="collapse" data-parent="#incident_details_when_accordion" href="#incident_details_when_accordion_body" aria-expanded="true" aria-controls="incident_details_when_accordion_header"><i className="fa fa-chevron-circle-up" aria-hidden="true" /></a>
                            </div>
                            <div id="incident_details_when_accordion_body" className="collapse in" role="tabpanel" aria-labelledby="incident_details_when_accordion">
                                <div className="card-block">
                                    <div className="row form-group">
                                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12" style={{display: 'none'}}>
                                            <select name="account" id="incident_details_account_combo">
                                                <option defaultValue={1822}>Alpha Beta Gamma Account [PUNE TEST]</option>
                                            </select>
                                        </div>
                                        <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                            <label htmlFor="incident_details_facility_combo">Facility</label>
                                            <JqxComboBox
                                                ref='incident_details_facility_combobox'
                                                width={'98%'} 
                                                valueMember={'id'}
                                                displayMember={'facility_name'}
                                                disabled={true}
                                                autoDropDownHeight={true}
                                                source={ 
                                                    new jqx.dataAdapter({
                                                        autoBind: true,
                                                        dataType: 'json',
                                                        type:'POST',
                                                        root:'Facilities',
                                                        dataFields: [
                                                            { name: 'id', type: 'string' },
                                                            { name: 'facility_name', type: 'string' }
                                                        ],
                                                        url: 'https://dev1.isscommand.com/IMSAPI/GetFacilities',
                                                        data:{
                                                            access_token: '68644d84-daca-493a-86ec-9936f4d3ad04',
                                                            api_mode: 'development',
                                                        },
                                                    })
                                                }
                                            />
                                        </div>
                                        <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                            <label htmlFor="incident_details_event_combo">Event</label>
                                            <JqxComboBox 
                                                ref='incident_details_event_combobox'
                                                width={'98%'}
                                                valueMember={'id'}
                                                displayMember={'event_name'}                            
                                                source={ 
                                                    new jqx.dataAdapter({
                                                        autoBind: true,
                                                        dataType: 'json',
                                                        type:'POST',
                                                        root:'events',
                                                        dataFields: [
                                                            { name: 'id', type: 'string' },
                                                            { name: 'event_name', type: 'string' }
                                                        ],
                                                        url: 'https://dev1.isscommand.com/IMSAPI/GetEvents',
                                                        data:{
                                                            access_token: '68644d84-daca-493a-86ec-9936f4d3ad04',
                                                            api_mode: 'development',
                                                            event_mode:1,
                                                            event_status:1,
                                                        },
                                                    })
                                                }
                                            />
                                        </div>
                                        <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                            <label htmlFor="incident_details_event_marker_combo">Event Marker</label>
                                            <JqxComboBox ref={"incident_details_event_marker_comobo"} width={'98%'} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header bg-dark-blue" role="tab" id="incident_details_what_accordion_header">
                                What
                                <a style={{float: 'right'}} data-toggle="collapse" data-parent="#incident_details_what_accordion" href="#incident_details_what_accordion_body" aria-expanded="true" aria-controls="incident_details_what_accordion_header"><i className="fa fa-chevron-circle-up" aria-hidden="true" /></a>
                            </div>
                            <div id="incident_details_what_accordion_body" className="collapse show" role="tabpanel" aria-labelledby="incident_details_what_accordion">
                                <div className="card-block">
                                    <div className="row form-group">
                                        <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12">
                                            <label htmlFor="incident_details_incident_type_combo">Incident Type</label>
                                            <JqxComboBox ref={"incident_details_incident_type_combo"} width={'98%'} />
                                        </div>
                                        <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12" style={{display: 'none'}}>
                                            <label htmlFor="incident_details_department_combo">Department</label>
                                            <JqxComboBox ref={"incident_details_department_combo"} width={'98%'} />
                                        </div>
                                        <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                            <label htmlFor="incident_details_priority_combo">Priority</label>
                                            <JqxComboBox ref={"incident_details_priority_combo"} width={'98%'} />
                                        </div>
                                        <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                                            <label htmlFor="incident_details_assigned_to_button">&nbsp;</label>
                                            <JqxButton ref={'incident_details_assigned_to_button'} value={"Assigned To"} height={27} width={150} />                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header bg-dark-blue" role="tab" id="incident_details_where_accordion_header">
                                Where
                                <a style={{float: 'right'}} data-toggle="collapse" data-parent="#incident_details_where_accordion" href="#incident_details_where_accordion_body" aria-expanded="true" aria-controls="incident_details_where_accordion_header"><i className="fa fa-chevron-circle-up" aria-hidden="true" /></a>
                            </div>
                            <div id="incident_details_where_accordion_body" className="collapse show" role="tabpanel" aria-labelledby="incident_details_where_accordion">
                                <div className="card-block">
                                    <div className="row form-group">
                                        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-6">
                                            <label htmlFor="incident_details_location_combo">Location</label>
                                            <JqxComboBox ref={"incident_details_location_combo"} width={'98%'} />
                                        </div>
                                        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-6">
                                            <label htmlFor="incident_details_section_combo">Section</label>
                                            <JqxComboBox ref={"incident_details_section_combo"} width={'98%'} />
                                        </div>
                                        <div className="col-lg-2 col-md-2 col-sm-6 col-xs-6">
                                            <label htmlFor="incident_details_row_text">Row</label>
                                            <JqxInput ref={"incident_details_row_text"} width={"92%"}  />
                                        </div>
                                        <div className="col-lg-2 col-md-2 col-sm-6 col-xs-6">
                                            <label htmlFor="incident_details_seat_text">Seat</label>
                                            <JqxInput width={"92%"} ref={'incident_details_seat_text'} />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                                            <label style={{width: '98.6%'}}>Facility</label>
                                            <JqxRadioButton  style={{display:'inline-block'}}  width={"45%"} >Inside</JqxRadioButton>
                                            <JqxRadioButton  style={{display:'inline-block'}}  width={"45%"} >Outside</JqxRadioButton>
                                        </div>
                                        <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                            <label style={{width: '98.6%'}}>Condition</label>
                                            <JqxRadioButton  style={{display:'inline-block'}}  width={"23%"} >Dry</JqxRadioButton>
                                            <JqxRadioButton  style={{display:'inline-block'}}  width={"23%"} >Wet</JqxRadioButton>
                                            <JqxRadioButton  style={{display:'inline-block'}}  width={"23%"} >Icy</JqxRadioButton>
                                            <JqxRadioButton  style={{display:'inline-block'}}  width={"23%"} >Clean</JqxRadioButton>
                                        </div>
                                        <div className="col-lg-2 col-md-2 col-sm-12 col-xs-12">
                                            <label style={{width: '98.6%'}}>Normal Lighting</label>
                                            <JqxRadioButton  style={{display:'inline-block'}}  width={"45%"} >Yes</JqxRadioButton>
                                            <JqxRadioButton  style={{display:'inline-block'}}  width={"45%"} >No</JqxRadioButton>
                                        </div>
                                        <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                                            <label htmlFor="incident_details_obstacle_present_text">Obstacle Present</label>
                                            <JqxInput width={"95%"} ref={'incident_details_obstacle_present_text'} />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
                                            <label htmlFor="incident_details_reported_via_multiselect">Reported via</label>
                                            <JqxComboBox ref={"incident_details_reported_via_multiselect"} checkboxes={true}  width={"97%"} />
                                        </div>
                                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
                                            <label htmlFor="incident_details_person_reporting_text">Person Reporting</label>
                                            <JqxInput width={"93%"} ref={'incident_details_person_reporting_text'} />
                                        </div>
                                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
                                            <label htmlFor="incident_details_dept_reporting_combo">Dept. Reporting</label>
                                            <JqxComboBox ref={"incident_details_dept_reporting_combo"} width={"97%"} />
                                        </div>
                                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
                                            <label htmlFor="incident_details_handled_by_multiselect">Handled by</label>
                                            <JqxComboBox ref={"incident_details_handled_by_multiselect"} checkboxes={true} width={"97%"} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header bg-dark-blue" role="tab" id="incident_details_incident_status_accordion_header">
                                Incident Status
                                <a style={{float: 'right'}} data-toggle="collapse" data-parent="#incident_details_incident_status_accordion" href="#incident_details_incident_status_accordion_body" aria-expanded="true" aria-controls="incident_details_incident_status_accordion_header"><i className="fa fa-chevron-circle-up" aria-hidden="true" /></a>
                            </div>
                            <div id="incident_details_incident_status_accordion_body" className="collapse show" role="tabpanel" aria-labelledby="incident_details_incident_status_accordion">
                                <div className="card-block">
                                    <div className="row">
                                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
                                            <label htmlFor="incident_details_created_datetime">Created</label>
                                            <JqxDateTimeInput ref={'incident_details_created_datetime'} width={"98%"} showTimeButton={true} formatString={'F'} />
                                        </div>
                                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
                                            <label htmlFor="incident_details_dispatch_datetime">Dispatch</label>
                                            <JqxDateTimeInput ref={'incident_details_dispatch_datetime'} width={"98%"} showTimeButton={true} formatString={'F'} />
                                        </div>
                                        <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                                            <label htmlFor="incident_details_onscene_datetime">On Scene</label>
                                            <JqxDateTimeInput ref={'incident_details_onscene_datetime'} width={"98%"} showTimeButton={true} formatString={'F'} />
                                        </div>
                                        <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                                            <label htmlFor="incident_details_close_datetime">Closed</label>
                                            <JqxDateTimeInput ref={'incident_details_close_datetime'} width={"98%"} showTimeButton={true} formatString={'F'} />
                                        </div>
                                    </div>
                                    {/* <div className="row">
                                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
                                            <button id="incident_details_resolution_button" style={{width: '98.6%'}}>Select Resolution</button>
                                        </div>
                                        <div className="col-lg-9 col-md-9 col-sm-6 col-xs-6">
                                            <label style={{paddingTop: 8}}>Last person who updated form:</label>
                                            <a href="#" />
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header bg-dark-blue" role="tab" id="incident_details_notes_narrative_accordion_header">
                                Notes Narrative
                                <a style={{float: 'right'}} data-toggle="collapse" data-parent="#incident_details_notes_narrative_accordion" href="#incident_details_notes_narrative_accordion_body" aria-expanded="true" aria-controls="incident_details_notes_narrative_accordion_header"><i className="fa fa-chevron-circle-up" aria-hidden="true" /></a>
                            </div>
                            <div id="incident_details_notes_narrative_accordion_body" className="collapse show" role="tabpanel" aria-labelledby="incident_details_notes_narrative_accordion">
                                <div className="card-block" style={{padding: 0}}>
                                    <JqxEditor ref={"incident_details_notes_narrative_editor"} tools={'bold italic underline | format size | color background | left center right | outdent indent | ul ol | image | link | clean'} width={"100%"} height={150} toolbarPosition={'bottom'}> </JqxEditor>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header bg-dark-blue" role="tab" id="incident_details_additional_details_accordion_header">
                                Additional Details
                                <a style={{float: 'right'}} data-toggle="collapse" data-parent="#incident_details_additional_details_accordion" href="#incident_details_additional_details_accordion_body" aria-expanded="true" aria-controls="incident_details_additional_details_accordion_header"><i className="fa fa-chevron-circle-up" aria-hidden="true" /></a>
                            </div>
                            <div id="incident_details_additional_details_accordion_body" className="collapse show" role="tabpanel" aria-labelledby="incident_details_additional_details_accordion">
                                <div className="card-block">
                                    <div className="row">
                                        <div className="col-lg-4">
                                            <label htmlFor="incident_details_agency_incident_text">Agency Incident #</label>
                                            <JqxInput width={"94%"} ref={'incident_details_agency_incident_text'} />
                                        </div>
                                        <div className="col-lg-4">
                                            <label htmlFor="incident_details_call_sign_text">Call Sign</label>
                                            <JqxInput width={"94%"} ref={'incident_details_agency_incident_text'} />
                                        </div>
                                        <div className="col-lg-4">
                                            <label htmlFor="incident_details_ticket_text">Ticket #</label>
                                            <JqxInput width={"94%"} ref={'incident_details_agency_incident_text'} />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-4">
                                            <label>Alcohol Related</label><br />
                                            <JqxRadioButton  style={{display:'inline-block'}}  width={"30%"} >Yes</JqxRadioButton>
                                            <JqxRadioButton  style={{display:'inline-block'}}  width={"30%"} >No</JqxRadioButton>
                                            <JqxRadioButton  style={{display:'inline-block'}}  width={"30%"} >N/A</JqxRadioButton>
                                        </div>
                                        <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                            <label>Fan Conduct Related</label><br />
                                            <JqxRadioButton  style={{display:'inline-block'}}  width={"30%"} >Yes</JqxRadioButton>
                                            <JqxRadioButton  style={{display:'inline-block'}}  width={"30%"} >No</JqxRadioButton>
                                        </div>
                                        <div className="col-lg-4">
                                            <label>Customer Complaint</label><br />
                                            <JqxRadioButton  style={{display:'inline-block'}}  width={"30%"} >Yes</JqxRadioButton>
                                            <JqxRadioButton  style={{display:'inline-block'}}  width={"30%"} >No</JqxRadioButton>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header bg-dark-blue" role="tab" id="incident_details_attachments_accordion_header">
                                Attachments
                                <a style={{float: 'right'}} data-toggle="collapse" data-parent="#incident_details_attachments_accordion" href="#incident_details_attachments_accordion_body" aria-expanded="true" aria-controls="incident_details_attachments_accordion_header"><i className="fa fa-chevron-circle-up" aria-hidden="true" /></a>
                            </div>
                            <div id="incident_details_attachments_accordion_body" className="collapse show" role="tabpanel" aria-labelledby="incident_details_attachments_accordion">
                                <div className="card-block">
                                    <div className="row">
                                        <div className="col-lg-4">
                                            <JqxFileUpload ref={"incident_details_attchment_file_upload"} width={"97%"} fileInputName={'fileToUpload'} multipleFilesUpload={false} />
                                        </div>
                                        <div className="col-lg-4">
                                            <JqxInput width={"94%"} ref={'incident_details_attachment_name'} placeHolder={"Attachment Name"} />
                                        </div>
                                        <div className="col-lg-4">
                                            <JqxComboBox placeHolder={"Attachment Type"} ref={"incident_details_attchment_type_combo"} width={"97%"} />
                                        </div>                                        
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12" style={{border: '1px solid #e1e1e1', display: 'none'}}>
                                        <div id="incident_details_attachment_grid" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header bg-dark-blue" role="tab" id="incident_details_ap_accordion_header">
                                Associated Person
                                <div style={{display: 'inline', float: 'right'}}>
                                    <a><i id="incident_details_add_ap_button" className="fa fa-plus-circle" aria-hidden="true" style={{color: '#17881c', marginRight: 5}}> </i> </a>
                                    <a data-toggle="collapse" data-parent="#incident_details_ap_accordion" href="#incident_details_ap_accordion_body" aria-expanded="false" aria-controls="incident_details_ap_accordion_header"> <i className="fa fa-chevron-circle-up" aria-hidden="true"> </i> </a>
                                </div>
                            </div>
                            <div id="incident_details_ap_accordion_body" className="collapse in" role="tabpanel" aria-labelledby="incident_details_ap_accordion">
                                <div className="card-block" style={{padding: 0}}>
                                    <div id="incident_details_ap_form_id" style={{display:"none"}}>
                                        <div style={{padding: '0.3rem 0.5rem'}}>
                                            <div className="row form-group">
                                                <div className="col-lg-3">
                                                    <label>First Name</label>
                                                    <JqxInput width={"93%"} ref={'incident_details_ap_first_name'} />
                                                </div>
                                                <div className="col-lg-1">
                                                    <label>M.</label>
                                                    <JqxInput width={"80%"} ref={'incident_details_ap_middle_name'} />
                                                </div>
                                                <div className="col-lg-3">
                                                    <label>Last Name</label>
                                                    <JqxInput width={"93%"} ref={'incident_details_ap_last_name'} />
                                                </div>
                                                <div className="col-lg-2">
                                                    <label>Date of birth</label>
                                                    <JqxDateTimeInput ref={'incident_details_ap_dob'} width={"92%"} />
                                                </div>
                                                <div className="col-lg-1">
                                                    <label>Sex</label>
                                                    <JqxInput width={"80%"} ref={'incident_details_ap_last_name'} />
                                                </div>
                                                <div className="col-lg-2">
                                                    <label>Race</label>
                                                    <JqxInput width={"90%"} ref={'incident_details_ap_race'} />
                                                </div>
                                            </div>
                                            <div className="row form-group">
                                                <div className="col-lg-1">
                                                    <label>Height</label>
                                                    <JqxInput width={"80%"} ref={'incident_details_ap_height'} />
                                                </div>
                                                <div className="col-lg-1">
                                                    <label>Weight</label>
                                                    <JqxInput width={"80%"} ref={'incident_details_ap_weight'} />
                                                </div>
                                                <div className="col-lg-1">
                                                    <label>Build</label>
                                                    <JqxInput width={"80%"} ref={'incident_details_ap_build'} />
                                                </div>
                                                <div className="col-lg-1">
                                                    <label>Hair Color</label>
                                                    <JqxInput width={"80%"} ref={'incident_details_ap_hair_color'} />
                                                </div>
                                                <div className="col-lg-1">
                                                    <label>Eye Color</label>
                                                    <JqxInput width={"80%"} ref={'incident_details_ap_eye_color'} />
                                                </div>
                                                <div className="col-lg-7">
                                                    <label>Marks/Scars</label>
                                                    <JqxInput width={"97%"} ref={'incident_details_ap_marks_scars'} />
                                                </div>
                                            </div>
                                            <div className="row form-group">
                                                <div className="col-lg-2">
                                                    <label>Minor</label>
                                                    <JqxComboBox ref={"incident_details_ap_minor"} width={"94%"} />
                                                </div>
                                                <div className="col-lg-2">
                                                    <label>Parents Notified</label>
                                                    <JqxComboBox ref={"incident_details_ap_parents_notified"} width={"94%"} />
                                                </div>
                                                <div className="col-lg-3">
                                                    <label>Who Notified Parents</label>
                                                    <JqxInput width={"92%"} ref={'incident_details_ap_who_notified_parents'} />
                                                </div>
                                                <div className="col-lg-2">
                                                    <label>Occupation/Employer</label>
                                                    <JqxInput width={"90%"} ref={'incident_details_ap_occupation'} />
                                                </div>
                                                <div className="col-lg-3">
                                                    <label>Photo</label>
                                                    <JqxFileUpload ref={"incident_details_ap_photo"} width={"97%"} multipleFilesUpload={false} />
                                                </div>
                                            </div>
                                            <div className="row form-group">
                                                <div className="col-lg-4">
                                                    <label>Address</label>
                                                    <JqxInput width={"95%"} ref={'incident_details_ap_address'} />
                                                </div>
                                                <div className="col-lg-2">
                                                    <label>City</label>
                                                    <JqxInput width={"90%"} ref={'incident_details_ap_city'} />
                                                </div>
                                                <div className="col-lg-1">
                                                    <label>State</label>
                                                    <JqxInput width={"80%"} ref={'incident_details_ap_state'} />
                                                </div>
                                                <div className="col-lg-1">
                                                    <label>Zip</label>
                                                    <JqxInput width={"80%"} ref={'incident_details_ap_zip'} />
                                                </div>
                                                <div className="col-lg-2">
                                                    <label>Phone</label>
                                                    <JqxInput width={"90%"} ref={'incident_details_ap_phone'} />
                                                </div>
                                                <div className="col-lg-2">
                                                    <label>Email</label>
                                                    <JqxInput width={"90%"} ref={'incident_details_ap_email'} />
                                                </div>
                                            </div>
                                            <div className="row form-group">
                                                <div className="col-lg-3">
                                                    <label>Driver Licence</label>
                                                    <JqxInput width={"92%"} ref={'incident_details_ap_driver_licence'} />
                                                </div>
                                                <div className="col-lg-3">
                                                    <label>ID #</label>
                                                    <JqxInput width={"92%"} ref={'incident_details_ap_social_id'} />
                                                </div>
                                                <div className="col-lg-2">
                                                    <label>Ticket #</label>
                                                    <JqxInput width={"90%"} ref={'incident_details_ap_ticket'} />
                                                </div>
                                                <div className="col-lg-2">
                                                    <label>Section</label>
                                                    <JqxInput width={"90%"} ref={'incident_details_ap_section'} />
                                                </div>
                                                <div className="col-lg-1">
                                                    <label>Row</label>
                                                    <JqxInput width={"80%"} ref={'incident_details_ap_row'} />
                                                </div>
                                                <div className="col-lg-1">
                                                    <label>Seat</label>
                                                    <JqxInput width={"80%"} ref={'incident_details_ap_seat'} />
                                                </div>
                                            </div>
                                            <div className="row form-group">
                                                <div className="col-lg-2">
                                                    <label>Resolution</label>
                                                    <JqxComboBox ref={"incident_details_ap_resolution"} width={"94%"} />
                                                </div>
                                                <div className="col-lg-2">
                                                    <label>Guest Type</label>
                                                    <JqxComboBox ref={"incident_details_ap_guest_type"} width={"94%"} />
                                                </div>
                                                <div className="col-lg-4">
                                                    <label>How this person is involved</label>
                                                    <JqxInput width={"95%"} ref={'incident_details_ap_how_involved'} />
                                                </div>
                                                <div className="col-lg-4">
                                                    <label>Other Details</label>
                                                    <JqxInput width={"95%"} ref={'incident_details_ap_other_details'} />
                                                </div>
                                            </div>
                                            <div className="row form-group">
                                                <div className="col-lg-12">
                                                    <label>Remarks/Notes</label>
                                                    <JqxTextArea width={"99%"} height={50} ref={'incident_details_ap_remarks_notes'} />
                                                </div>
                                            </div>
                                            <div className="row form-group">
                                                <div className="offset-lg-10">
                                                </div>
                                                <div className="col-lg-1">    
                                                    <JqxButton ref={'incident_details_ap_clear_button'} value="Clear" height={27} width={50} />
                                                </div>
                                                <div className="col-lg-1">                                            
                                                    <JqxButton ref={'incident_details_ap_save_button'} value="Add" height={27} width={50} />                                            
                                               </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="incident_details_ap_grid" style={{border: '1px solid #e6e6e6'}} >
                                    <JqxGrid width={"100%"} sortable={true} altrows={true} enabletooltips={true} autoheight={true} editable={true} 
                                        columns={[
                                            { text: 'First Name', datafield: 'ap_first_name',},
                                            { text: 'Last Name', datafield: 'ap_last_name',},
                                            { text: 'Date of Birth', datafield: 'ap_dob',},
                                            { text: 'How this person is involved', datafield: 'ap_how_involved',},
                                            { text: 'Ticket #', datafield: 'ap_ticket',},
                                            { text: 'Section', datafield: 'ap_section',},
                                            { text: 'Row', datafield: 'ap_row',},
                                            { text: 'Seat', datafield: 'ap_seat',},
                                            { text: 'Resolution', datafield: 'ap_resolution',},
                                            { text: 'Signature', datafield: 'ap_signature',},
                                            { text: '<img src="images/delete.png" class="img" />', width:'3%'},
                                        ]}
                                    />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header bg-dark-blue" role="tab" id="incident_details_medical_details_accordion_header">
                                Medical Details
                                <a style={{float: 'right'}} data-toggle="collapse" data-parent="#incident_details_medical_details_accordion" href="#incident_details_medical_details_accordion_body" aria-expanded="false" aria-controls="incident_details_medical_details_accordion_header"><i className="fa fa-chevron-circle-up" aria-hidden="true" /></a>
                            </div>
                            <div id="incident_details_medical_details_accordion_body" className="collapse in" role="tabpanel" aria-labelledby="incident_details_medical_details_accordion">
                                <div className="card-block" style={{padding: 0}}>
                                    <div id="incident_details_medical_details_grid" />
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header bg-dark-blue" role="tab" id="incident_details_police_details_accordion_header">
                                Police Details
                                <a style={{float: 'right'}} data-toggle="collapse" data-parent="#incident_details_police_details_accordion" href="#incident_details_police_details_accordion_body" aria-expanded="false" aria-controls="incident_details_police_details_accordion_header"><i className="fa fa-chevron-circle-up" aria-hidden="true" /></a>
                            </div>
                            <div id="incident_details_police_details_accordion_body" className="collapse in" role="tabpanel" aria-labelledby="incident_details_police_details_accordion">
                                <div className="card-block" style={{padding: 0}}>
                                    <div id="incident_details_police_details_grid" />
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header bg-dark-blue" role="tab" id="incident_details_vehicle_details_accordion_header">
                                Vehicle Details
                                <a style={{float: 'right'}} data-toggle="collapse" data-parent="#incident_details_vehicle_details_accordion" href="#incident_details_vehicle_details_accordion_body" aria-expanded="false" aria-controls="incident_details_vehicle_details_accordion_header"><i className="fa fa-chevron-circle-up" aria-hidden="true" /></a>
                            </div>
                            <div id="incident_details_vehicle_details_accordion_body" className="collapse in" role="tabpanel" aria-labelledby="incident_details_vehicle_details_accordion">
                                <div className="card-block" style={{padding: 0}}>
                                    <div id="incident_details_vehicle_details_grid" />
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header bg-dark-blue" role="tab" id="incident_details_witness_details_accordion_header">
                                Witness Details
                                <a style={{float: 'right'}} data-toggle="collapse" data-parent="#incident_details_witness_details_accordion" href="#incident_details_witness_details_accordion_body" aria-expanded="false" aria-controls="incident_details_witness_details_accordion_header"><i className="fa fa-chevron-circle-up" aria-hidden="true" /></a>
                            </div>
                            <div id="incident_details_witness_details_accordion_body" className="collapse in" role="tabpanel" aria-labelledby="incident_details_witness_details_accordion">
                                <div className="card-block" style={{padding: 0}}>
                                    <div id="incident_details_witness_details_grid" />
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header bg-dark-blue" role="tab" id="incident_details_comments_accordion_header">
                                Comments
                                <a style={{float: 'right'}} data-toggle="collapse" data-parent="#incident_details_comments_accordion" href="#incident_details_comments_accordion_body" aria-expanded="false" aria-controls="incident_details_comments_accordion_header"><i className="fa fa-chevron-circle-up" aria-hidden="true" /></a>
                            </div>
                            <div id="incident_details_comments_accordion_body" className="collapse in" role="tabpanel" aria-labelledby="incident_details_comments_accordion">
                                <div className="card-block" style={{padding: 0}}>
                                    <div id="incident_details_comments_grid" />
                                </div>
                            </div>
                        </div>
                    </div>
                </JqxWindow>            
            </div>
        )
    }
}
export default IncidentDetailsPage;