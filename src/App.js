import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Add from './pages/Add';
import Vote from './pages/Vote';
import Result from './pages/Result';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <div className="container">
        <Header />
        <main className="main">
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
        </main>
      </div>
    </Router>
  );
}

export default App;
