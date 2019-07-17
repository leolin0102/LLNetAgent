import React, { Component } from 'react';
import './ListView.css'
import store from '../../Store';
class SampleCell extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: props.item.name,
            desc: props.item.desc,
        }
    }

    render() {
        return (
            <div onClick={this.onClickItem} className="SampleCell">
                <li className="SampleCell-Item-name">{this.state.name}</li>
                <li className="SampleCell-item-desc">{this.state.desc}</li>
            </div>
        )
    }

    onClickItem(e) {
    }
}

export default SampleCell