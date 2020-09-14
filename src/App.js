import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { Main, Mypage, Exam } from "pages";
import { NotFound } from "common";
import axios from "axios";
import "./App.css";

function App() {
  axios.defaults.baseURL = "http://api.puroong.me/v1";
  const loggined = localStorage.getItem("AccessToken") ? true : false;
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/class" component={loggined ? Mypage : NotFound} />
          <Route path="/exam/:id" component={loggined ? Exam : NotFound} />
          <Redirect path="*" to="/" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
