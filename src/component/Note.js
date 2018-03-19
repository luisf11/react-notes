import React from 'react';
import styled from 'styled-components';

const NoteContainer = styled.div`
    background: ${props => props.color || 'yellow'};
    width: 100%;
    max-width: 20%;
    display: flex;
    flex: 20%;
    padding: 15px;
    margin: 10px;
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

const Note = (props) => {
    return(
        <NoteContainer color={props.color}>
            {props.text}
            <Close onClick={props.onDelete}>X</Close>
        </NoteContainer>
    );
}

export  default Note;