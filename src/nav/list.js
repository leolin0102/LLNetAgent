import React, { Component } from 'react';
import './list.css'
import store from '../Store';
import ListView from '../view/list/ListView'
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";
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
                <ContextMenuTrigger id="menu">
                    <ListView items={this.state.items}>

                    </ListView>
                </ContextMenuTrigger>
                <ContextMenu id="menu">
                    <MenuItem data={{action: 'add_request'}} onClick={this.handleClick}>
                        add request
                    </MenuItem>
                </ContextMenu>
            </div>
        );
    }

    handleClick(e, data) {
        console.log(data.foo);
    }
}

export default SideNav;
