import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { Main } from "pages";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Redirect path="*" to="/" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
