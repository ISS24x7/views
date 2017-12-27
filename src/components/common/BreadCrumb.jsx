import React, { Component } from 'react';

export default class BreadCrumb extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return(
            <div className="card">
                <div className="card-block">                   
                    {this.props.links.map(function (i) {
                        return (
                            <span><a href="{i.link}">{i.label}</a>&gt;&gt;</span>
                        )
                    })}
                </div>
            </div>
        )
    }
}        