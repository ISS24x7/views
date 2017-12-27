import React, { Component } from 'react';
import SubMenu from 'components/SubMenu.jsx';

export default class AccountAndUsers extends Component {
    render() {
        return (
            <div>
                <SubMenu parent="#c3_account_manager_link" /> 
            </div>
        );
    }
}