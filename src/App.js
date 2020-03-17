import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AppHeader from './components/AppHeader';
import Add from './pages/Add';
import Vote from './pages/Vote';
import Result from './pages/Result';
import Home from './pages/Home';
import styled from '@emotion/styled';

const AppContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  height: 100vh;
`;

const Main = styled.main`
  overflow: auto;
  display: flex;
  flex-flow: column nowrap;
  flex-grow: 1;
`;

function App() {
  return (
    <Router>
      <AppContainer>
        <AppHeader />
        <Main>
          <Switch>
            <Route path="/polls/:pollId">
              <Result />
            </Route>
            <Route path="/add">
              <Add />
            </Route>
            <Route path="/vote">
              <Vote />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </Main>
      </AppContainer>
    </Router>
  );
}

export default App;
