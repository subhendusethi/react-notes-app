import React, { Component } from 'react';
import styled from 'styled-components';

const StyledNotesDiv = styled.div`
    margin-bottom: 15px;
    padding: 4px 12px;
    background-color: #ffffcc;
    border-left: 6px solid #ffeb3b;
    font-family: monospace
`;
export default class NotesComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            text : this.props.text || ''
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
        <StyledNotesDiv>
            <p contentEditable="true" onInput={this.updateElement}>{this.state.text}</p>
        </StyledNotesDiv>
        );
    }
}