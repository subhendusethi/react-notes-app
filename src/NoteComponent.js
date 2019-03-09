import React, { Component } from 'react';


export default class NotesComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            text : ''
        };
        this.updateElement = this.updateElement.bind(this);
    }

    updateElement(event) {
        this.setState({
            text: event.target.value
        })
    }

    render () {
        return(
            <div>
            <input value={this.state.text} onChange={this.updateElement}></input>
          </div>
        );
    }
}