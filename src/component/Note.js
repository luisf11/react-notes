import React from 'react';
import styled from 'styled-components';

const NoteContainer = styled.div`
    background: #f2e379;
  width: 200px;
  padding: 15px;
  margin-bottom: 10px;
  position: relative;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: box-shadow 0.2s;
  &:hover {
    box-shadow: 0px 10px 20px rgba(0,0,0,0.19), 0px 6px 6px rgba(0,0,0,0.24);
  }
`;

const Close = styled.span`
     position: absolute;
    right: 5px;
    top:2px;
    cursor: pointer;
`;

const Note = () => {
    return(
        <NoteContainer>
            this is a note
            <Close>X</Close>
        </NoteContainer>
    );
}

export  default Note;