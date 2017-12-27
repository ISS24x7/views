import React, { Component } from 'react';
import {render} from 'react-dom';
import JqxButton from 'jqwidgets-react/react_jqxbuttons'
import asyncComponent from '../../asyncComponent.jsx';

const IncidentDetailspage = asyncComponent(() => import('../ims/IncidentDetailspage.jsx')
.then(module => module.default), { name: 'IncidentDetailspage' });

export default class TextCommunicationDashboard extends Component {
	componentDidMount() {
        this.refs.create_incident_button.on('click', (event) => {
            render(<IncidentDetailspage></IncidentDetailspage>, document.getElementById('text_communication_create_incident_wrapper'), () => {
			});
        });
    }
	render() {
		return (
			<div>
				<h1>Text Communication Dashboard</h1>
				<JqxButton ref={'create_incident_button'} value={"Create Incident"} height={27} width={200} />                                            
				<div id="text_communication_create_incident_wrapper"></div>
			</div>	
		);
	}
}