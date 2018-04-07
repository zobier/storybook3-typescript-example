import * as React from 'react';
import styled, { keyframes } from 'styled-components';

const Container = styled.div`
  text-align: center;
`;
const Header = styled.div`
  background-color: #222;
  height: 150px;
  padding: 20px;
  color: white;
`;
const Intro = styled.p`
  font-size: large;
`;
const Rotate = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;
const Logo = styled.img`
  animation: ${Rotate} infinite 20s linear;
  height: 80px;
`;
const logo = require('./logo.svg');

class App extends React.Component {
  render() {
    return (
      <Container>
        <Header>
          <Logo src={logo} alt="logo" />
          <h2>Welcome to React</h2>
        </Header>
        <Intro>
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </Intro>
      </Container>
    );
  }
}

export default App;
