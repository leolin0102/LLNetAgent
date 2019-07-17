import React, { Component } from 'react';
import './list.css'
import store from '../Store';
import ListView from '../view/list/ListView'
class SideNav extends Component {

    constructor(props) {
        super(props)
        this.state = {
            title: store.getState()['title'],
            items: store.getState()['requestList']
        }
    }

    render() {
        return (
            <div className="SideNav">
                <div className="SideNav-TopBar">
                    {this.state.title}
                </div>
                <div className="SideNav-SideLine">
                </div>
                <ListView items={this.state.items}>

                </ListView>
            </div>
        );
    }
}

export default SideNav;
