import React, { Component } from 'react';
import JqxPopover from 'jqwidgets-react/react_jqxpopover';

export default class SubMenu extends Component {
    constructor(props) {
        super(props);
    }
    render() { 
        let submenus = '';
        let arrowOffsetValue = -505;        
        if (this.props.parent == '#c3_account_manager_link') {
            arrowOffsetValue = -415;
            submenus =
                <div className="row">
                    <div className="col-lg-1 hidden-sm"></div>
                    <div className="sub-menu">Account Manager</div>
                    <div className="sub-menu">User Manager</div>
                    <div className="sub-menu">Keyword Manager</div>
                    <div className="sub-menu">Usage History</div>
                    <div className="sub-menu">Event List</div>
                    <div className="sub-menu">Twilio Manager</div>
                    <div className="sub-menu">C3 User Manager</div>
                </div>
        } else if (this.props.parent == '#c3_news_and_updates_link') {
            arrowOffsetValue = -302;
            submenus =
                <div className="row">
                    <div className="col-lg-1 hidden-sm"></div>
                    <div className="sub-menu">Announcement</div>
                    <div className="sub-menu">News</div>
                    <div className="sub-menu">System Updates</div>
                    <div className="sub-menu">Home Dashboard</div>
                    <div className="sub-menu">Home Navigation</div>
                </div>
        } else if (this.props.parent == '#c3_global_settings_link') {
            arrowOffsetValue = -200;
            submenus =
                <div className="row">
                    <div className="col-lg-1 hidden-sm"></div>
                    <div className="sub-menu">Icon Library</div>
                    <div className="sub-menu">Icon Category</div>
                    <div className="sub-menu">Sound Library</div>
                    <div className="sub-menu">Templates</div>
                    <div className="sub-menu">Subscription Tiers</div>
                    <div className="sub-menu">System Log</div>
                </div>
        }      
        return (
            <JqxPopover selector={this.props.parent} width="99.85%" offset={{ right: 0, top: -7 }} arrowOffsetValue={arrowOffsetValue} position={'bottom'} style={{ padding: "2px 5px", }}>
                {submenus}
            </JqxPopover>
        )    
    }
}        