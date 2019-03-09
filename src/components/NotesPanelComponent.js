import React, { Component } from 'react';
import NotesComponent from '../components/NoteComponent';
import styled from 'styled-components';

const StyledNewNoteButton = styled.button`
  background-color: #4CAF50; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
`;
class NotesPanelComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      notes: []
    }
    this.addNewNote = this.addNewNote.bind(this);
    this.transformNotesData = this.transformNotesData.bind(this);
  }

  componentWillReceiveProps(nextProps){
    this.transformNotesData(nextProps.notesData);
  }

  transformNotesData(notesData) {
      let notesStore = this.state.notes;
      for(var note of notesData){
        notesStore.push(<NotesComponent key={notesStore.length} text={note.text}/>);
      }
      this.setState({
          notes : notesStore
      })
  }

  addNewNote() {
    let newNode = <NotesComponent key={this.state.notes.length}/>;
    let newNotesState = this.state.notes;
    newNotesState.push(newNode);
    this.setState({
      note: newNotesState
    })
  }

  render() {
    return (
      <div>     
          <StyledNewNoteButton id="add-note-button" 
                               onClick={this.addNewNote}>
            Add New Note
          </StyledNewNoteButton>
          <div id="notes-section">
          {this.state.notes}
          </div>
      </div>
    );
  }
}

export default NotesPanelComponent;
