import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AppHeader from './components/AppHeader';
import Add from './pages/Add';
import Vote from './pages/Vote';
import Result from './pages/Result';
import Home from './pages/Home';
import Polls from './pages/Home';
import styled from '@emotion/styled';
import GlobalStyles from './components/GlobalStyles';
import { ThemeProvider } from 'emotion-theming';
import colored from './themes/colored';
import { blackwhite } from './themes/blackwhite';

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
  const [theme, setTheme] = React.useState(colored);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <GlobalStyles />
        <AppContainer>
          <AppHeader
            onThemeButtonClick={() => {
              setTheme(theme === colored ? blackwhite : colored);
            }}
          />
          <Main>
            <Switch>
              <Route exact path="/polls/:pollId/result">
                <Result />
              </Route>
              <Route exact path="/add">
                <Add />
              </Route>
              <Route exact path="/polls">
                <Polls />
              </Route>
              <Route exact path="/polls/:pollId/vote">
                <Vote />
              </Route>
              <Route exact path="/">
                <Home />
              </Route>
            </Switch>
          </Main>
        </AppContainer>
      </Router>
    </ThemeProvider>
  );
}

export default App;
