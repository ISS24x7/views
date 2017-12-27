import React, { Component } from 'react';
import SubMenu from 'components/SubMenu.jsx';

export default class GlobalSettings extends Component {
    render() {
        return (
            <div>
                <SubMenu parent="#c3_global_settings_link" /> 
            </div>
        );
    }
}