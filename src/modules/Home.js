import React, { Component } from 'react';
import NotesGrid from './NotesGrid'
import NoteEditor from '../component/NoteEditor'
import styled from 'styled-components';

const Container = styled.div`


`;


class Home extends Component {
    render() {
        return (
            <Container>
                <NoteEditor/>
                <NotesGrid/>
            </Container>
        );
    }
}

export default Home;