import React, { Component } from 'react';
import SampleCell from './SampleCell'
class ListView extends Component {

    constructor(props){
        super(props)
        this.state = {
            items: props.items
        }
    }

    render() {
        return (
            <div>
                {
                    this.state.items.map(element => {
                        return <SampleCell item={element}></SampleCell>   
                    })
                }
            </div>
        );
    }
}

export default ListView