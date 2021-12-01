// import * as React from "react";
import React, { useState } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "./components/Auth/Login";
import './styles/index.scss';
import Admin from "./components/Admin";
import Student from "./components/Student";
import ProtectedRoute from "./components/Common/ProtectedRoute/ProtectedRoute";
import Home from "./components/Home";
import useAuth from "./components/Common/CustomHooks/useAuth";

function App() {
  const [isAuth, login] = useAuth(false);
  const loginCallback = () => login();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <div className="quiz-app-root">
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/login">
            {!isLoggedIn ? <Login loginCallback={loginCallback} /> : <Admin />}
          </Route>
          <ProtectedRoute path="/admin" component={Admin}/>
          <Route path="/student">
            <Student />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;