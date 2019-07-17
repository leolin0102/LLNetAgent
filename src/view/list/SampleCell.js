import React, { Component } from 'react';

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
            <div>
                <li>{this.state.name}</li>
                <li>{this.state.desc}</li>
            </div>
        )
    }
}

export default SampleCell