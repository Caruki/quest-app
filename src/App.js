import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import Add from "./pages/Add";
import Vote from "./pages/Vote";
import Result from "./pages/Result";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Header />
      <main>
        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/add">Add</Link>
                </li>
                <li>
                  <Link to="/vote">Vote</Link>
                </li>
                <li>
                  <Link to="/result">Result</Link>
                </li>
              </ul>
            </nav>

            <Switch>
              <Route path="/result">
                <Result />
              </Route>
              <Route path="/add">
                <Add />
              </Route>
              <Route path="/vote">
                <Vote />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </Router>
      </main>
    </>
  );
}

export default App;
