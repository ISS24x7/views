import React, { Component } from 'react';
import JqxComboBox from 'jqwidgets-react/react_jqxcombobox'
import JqxRadioButton from 'jqwidgets-react/react_jqxradiobutton'
import JqxInput from 'jqwidgets-react/react_jqxinput'
import JqxTextArea from 'jqwidgets-react/react_jqxtextarea'

class ImsShortForm extends Component {
	render() {
		return (
        <div className="row" style={{padding:"5px"}}>
            <div className="col-xl-7 col-lg-7 col-md-7 col-sm-12 col-xs-12">
                <div className="form-group">
                    <JqxComboBox placeHolder={'Start typing to create an incident'} width={"99%"} />
                </div>
                <div className="form-group">
                    <JqxRadioButton  style={{display:'inline-block'}}  width={"25%"} >Dispacthed</JqxRadioButton>
                    <JqxRadioButton  style={{display:'inline-block'}}  width={"25%"} >Onscene</JqxRadioButton>
                    <JqxRadioButton  style={{display:'inline-block'}}  width={"25%"} >Closed</JqxRadioButton>
                    <a style={{verticalAlign:"top"}} ><i className="fa fa-plus-circle" style={{verticalAlign: "top", fontSize: "16px"}}></i> Incident</a>
                </div>
                <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 form-group">
                        <JqxComboBox placeHolder={'Location'} width={"98%"} />
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 form-group">
                        <JqxComboBox placeHolder={'Section'} width={"98%"} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-9 col-lg-9 col-md-9 col-sm-9 col-xs-9">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-6 form-group">
                                <JqxInput placeHolder={'Row'} width={"90%"} />
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-6 form-group">
                                <JqxInput placeHolder={'Seat'} width={"90%"} />
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-3 text-center form-group">
                        <a style={{verticalAlign:"-webkit-baseline-middle"}} ><i className="fa fa-plus-circle" style={{fontSize: "16px"}}></i> Location</a>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12 form-group">
                        <JqxComboBox placeHolder={'Event Marker'} width={"97%"} />
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12 form-group">
                        <JqxComboBox placeHolder={'Priority'} width={"97%"} />
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12 form-group">
                        <JqxComboBox placeHolder={'Reported via'} width={"97%"} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 form-group">
                        <JqxInput placeHolder={'Person Reporting'} width={"97.6%"} />
                    </div>
                </div>
            </div>
            <div className="col-xl-5 col-lg-5 col-md-5 col-sm-12 col-xs-12">
                <div className="row form-group">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 form-group">
                        <a style={{verticalAlign: "-webkit-baseline-middle"}}> &nbsp;Assigned To</a>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <label> &nbsp;Alcohol Related</label>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 form-group">
                        <JqxRadioButton  style={{display:'inline-block'}}  width={"45%"} >Yes</JqxRadioButton>
                        <JqxRadioButton  style={{display:'inline-block'}}  width={"45%"} >No</JqxRadioButton>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <label> &nbsp;Fan Conduct Related</label>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 form-group">
                        <JqxRadioButton  style={{display:'inline-block'}}  width={"45%"} >Yes</JqxRadioButton>
                        <JqxRadioButton  style={{display:'inline-block'}}  width={"45%"} >No</JqxRadioButton>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <label> &nbsp;Customer Complaint</label>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 form-group">
                        <JqxRadioButton  style={{display:'inline-block'}}  width={"45%"} >Yes</JqxRadioButton>
                        <JqxRadioButton  style={{display:'inline-block'}}  width={"45%"} >No</JqxRadioButton>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <label> &nbsp;Facility</label>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 form-group">
                        <JqxRadioButton  style={{display:'inline-block'}}  width={"45%"} >Inside</JqxRadioButton>
                        <JqxRadioButton  style={{display:'inline-block'}}  width={"45%"} >Outside</JqxRadioButton>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <JqxTextArea placeHolder={'Notes'} height={47} />
                    </div>
                </div>
            </div>
        </div>
        );
	}
}
export default ImsShortForm;