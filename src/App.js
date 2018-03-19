import React, { Component } from 'react';
import './App.css';
import NoteApp from './modules/NoteApp'
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

`;


class App extends Component {
  render() {
    return (
      <Container>
        <NoteApp/>
      </Container>
    );
  }
}

export default App;
