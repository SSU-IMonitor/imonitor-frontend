import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { Main } from "pages";
import axios from "axios";
import "./App.css";

function App() {
  axios.defaults.baseURL = "http://api.puroong.me/v1";
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
