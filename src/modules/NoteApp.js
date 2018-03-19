import React, { Component } from 'react';
import NotesGrid from './NotesGrid'
import NoteEditor from '../component/NoteEditor'
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
    width:100%;
`;


class NoteApp extends Component {

        state = {notes:[
        {id:1, text:'DemoNote', color:'coral'},
        {id:2, text:'You can use Masonry with vanilla JS', color:'aliceblue'},
        {id:3, text:'You can initialize Masonry in HTML, without writing any JavaScript', color:'gold'},
        {id:4, text:'HTML initialization was previously done with a class of js-masonry and setting options in data-masonry-options in Masonry v3. Masonry v4 is backwards compatible with this code.', color:'lightpink'},
        {id:5, text:'Masonry v4 is backwards compatible with this code.', color:'#C9A39C'},
        {id:6, text:'You can initialize Masonry in HTML, without writing any JavaScript', color:'gold'},
        {id:7, text:'HTML initialization was previously done with a class of js-masonry and setting options in data-masonry-options in Masonry v3. Masonry v4 is backwards compatible with this code.', color:'lightpink'},
        {id:8, text:'Masonry v4 is backwards compatible with this code.', color:'#C9A39C'}
      ]};

      componentDidMount(){
        var localNotes = JSON.parse(localStorage.getItem('notes'));
        if(localNotes){
          this.setState({notes: localNotes});
        }
      }
      updateLocalStorage(){
        var notes = JSON.stringify(this.state.notes);
        localStorage.setItem('notes', notes);
        console.log('update ls');
      }
      onNoteAdd(noteText, noteColor){
        var notesNew = this.state.notes.slice();
        notesNew.unshift({id: Date.now(), text: noteText, color: '#'+noteColor});
        this.setState({notes: notesNew});
      }
      onNoteDelete(note){
        var notesNew = this.state.notes.filter((_note) => _note.id !== note.id);
        this.setState({notes: notesNew});
      }
      componentDidUpdate(){
        this.updateLocalStorage();
      }

    render() {
        return (
            <Container>
                <NoteEditor onNoteAdd={this.onNoteAdd.bind(this)}/>
                <NotesGrid notes={this.state.notes} onNoteDelete={this.onNoteDelete.bind(this)}/>
            </Container>
        );
    }
}

export default NoteApp;