import React, { Component } from 'react';
import './App.css';
import Home from './modules/Home'
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
        <Home/>
      </Container>
    );
  }
}

export default App;
