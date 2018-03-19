import React, { Component } from 'react';
import Note from '../component/Note'
import styled from 'styled-components';

const GridContainer = styled.div`
display: flex;
/* flex-direction: row; */
flex-wrap: wrap;
justify-content: center;

`;



class NotesGrid extends Component {
    render() {
        let onNoteDelete = this.props.onNoteDelete;
        return (
            <GridContainer>
               {this.props.notes.map((note) =>
               (<Note 
                key={note.id} 
                color={note.color}
                text={note.text}
                onDelete={onNoteDelete.bind(null,note)}/>)
            )}
            </GridContainer>
        );
    }
}

export default NotesGrid;