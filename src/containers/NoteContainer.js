import React, { Component } from 'react';
import NotesPanelComponent from '../components/NotesPanelComponent';

class NotesContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            notes: []
        };
        this.fetchNotes = this.fetchNotes.bind(this);
    }

    componentDidMount() {
        let olderNotes = this.fetchNotes();
        this.setState({
            notes : olderNotes
        });
    }

    fetchNotes() {
        return [
            { text: "This is notes application project. "},
            { text: "This is being written in React" }
          ];
    }
    
    render() {
        return (
            <NotesPanelComponent notesData = {this.state.notes}/>
        );
    }
}

export default NotesContainer;
