import * as React from 'react';
import { ApolloProvider } from 'react-apollo';
import styled, { keyframes } from 'styled-components';

import logo from './logo.svg';

import { hot } from 'react-hot-loader';
import { BooksContainer } from './apollo_view';
import { client } from './config/apollo';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Holder = styled.div`
  text-align: center;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}`;

const Link = styled.a`
  color: #61dafb;
`;

const Header = styled.div`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const Logo = styled.img`
  animation: ${rotate} infinite 3s ease-in-out;
  height: 40vmin;
`;

class App extends React.Component {
  public state = {
    i: 0
  };

  public render() {
    return (
      <ApolloProvider client={client}>
        <Holder>
          <If condition={true}>JSX Works</If>
          <Header>
            <Title>Other {this.state.i}</Title>
            <Logo src={logo} alt="logo" />
            <BooksContainer />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <Link href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
              Learn React
            </Link>
            <button onClick={this.increment}>Increment</button>
          </Header>
        </Holder>
      </ApolloProvider>
    );
  }

  private increment = () => {
    this.setState({ i: this.state.i + 1 });
  };
}

export default hot(module)(App);
